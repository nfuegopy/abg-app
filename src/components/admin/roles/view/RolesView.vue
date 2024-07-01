<template>
  <v-container fluid>
    <v-card elevation="2">
      <v-card-title class="headline d-flex align-center">
        Gestión de Roles
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
          class="mx-4"
        ></v-text-field>
        <v-btn color="primary" dark @click="dialog = true">
          <v-icon left>mdi-plus</v-icon>
          Nuevo Rol
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="roles"
        :search="search"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.name"
                  label="Nombre del Rol"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">¿Estás seguro de que quieres eliminar este rol?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
          <v-btn color="red darken-1" text @click="deleteItemConfirm">Eliminar</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import RolesService from '../service/RolesService';

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: 'Nombre del Rol', align: 'start', sortable: true, value: 'name' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    roles: [],
    editedIndex: -1,
    editedItem: {
      name: '',
    },
    defaultItem: {
      name: '',
    },
    search: '',
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo Rol' : 'Editar Rol'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    async initialize() {
      try {
        const response = await RolesService.getAllRoles();
        this.roles = response.data;
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    },

    editItem(item) {
      this.editedIndex = this.roles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.roles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      try {
        await RolesService.deleteRole(this.editedItem.id);
        this.roles.splice(this.editedIndex, 1)
        this.closeDelete()
      } catch (error) {
        console.error('Error deleting role:', error);
      }
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {
      try {
        if (this.editedIndex > -1) {
          const response = await RolesService.updateRole(this.editedItem.id, this.editedItem);
          Object.assign(this.roles[this.editedIndex], response.data);
        } else {
          const response = await RolesService.createRole(this.editedItem);
          this.roles.push(response.data);
        }
        this.close()
      } catch (error) {
        console.error('Error saving role:', error);
      }
    },
  },
}
</script>