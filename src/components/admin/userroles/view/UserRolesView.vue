<template>
  <v-container fluid>
    <v-card elevation="2">
      <v-card-title class="headline d-flex align-center">
        Asignación de Roles a Usuarios
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
          Nueva Asignación
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="userRoles"
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
                <v-select
                  v-model="editedItem.user_id"
                  :items="users"
                  item-text="name"
                  item-value="id"
                  label="Usuario"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="editedItem.role_id"
                  :items="roles"
                  item-text="name"
                  item-value="id"
                  label="Rol"
                ></v-select>
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
        <v-card-title class="text-h5">¿Estás seguro de que quieres eliminar esta asignación?</v-card-title>
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
import UserRolesService from '../service/UserRolesService';
import UsersService from '../../users/service/UsersService';
import RolesService from '../../roles/service/RolesService';

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: 'Usuario', align: 'start', sortable: true, value: 'user.name' },
      { text: 'Rol', value: 'role.name' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    userRoles: [],
    users: [],
    roles: [],
    editedIndex: -1,
    editedItem: {
      user_id: '',
      role_id: '',
    },
    defaultItem: {
      user_id: '',
      role_id: '',
    },
    search: '',
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nueva Asignación' : 'Editar Asignación'
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
        const [userRolesResponse, usersResponse, rolesResponse] = await Promise.all([
          UserRolesService.getAllUserRoles(),
          UsersService.getAllUsers(),
          RolesService.getAllRoles()
        ]);
        this.userRoles = userRolesResponse.data;
        this.users = usersResponse.data;
        this.roles = rolesResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    editItem(item) {
      this.editedIndex = this.userRoles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.userRoles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      try {
        await UserRolesService.deleteUserRole(this.editedItem.user_id, this.editedItem.role_id);
        this.userRoles.splice(this.editedIndex, 1)
        this.closeDelete()
      } catch (error) {
        console.error('Error deleting user role:', error);
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
          const response = await UserRolesService.updateUserRole(
            this.editedItem.user_id,
            this.editedItem.role_id,
            this.editedItem
          );
          Object.assign(this.userRoles[this.editedIndex], response.data);
        } else {
          const response = await UserRolesService.createUserRole(this.editedItem);
          this.userRoles.push(response.data);
        }
        this.close()
      } catch (error) {
        console.error('Error saving user role:', error);
      }
    },
  },
}
</script>