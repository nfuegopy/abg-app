<template>
  <v-app>
    <v-app-bar app class="app-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ABG App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout">Cerrar sesión</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="navigation-drawer">
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.title" @click="navigate(item)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/home/roles">
            <v-list-item-icon>
              <v-icon>mdi-shield-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Roles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/home/users">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/home/user-roles">
            <v-list-item-icon>
              <v-icon>mdi-account-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Asignación de Roles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Inicio', icon: 'mdi-home', route: '/home' },
        { title: 'Cliente', icon: 'mdi-account', route: '/home/cliente' },
        { title: 'Juzgado', icon: 'mdi-gavel', route: '/home/juzgado' },
        { title: 'Secretaria', icon: 'mdi-account-tie', route: '/home/secretaria' },
        { title: 'Demandado', icon: 'mdi-account-cancel', route: '/home/demandado' },
      ],
    };
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push('/');
    },
    navigate(item) {
      this.$router.push(item.route);
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

.v-app-bar {
  background: #3d8de7;
  background: -webkit-linear-gradient(to right, #5eb3ff, #3d8de7);
  background: linear-gradient(to right, #5eb3ff, #3d8de7);
  color: white;
}

.navigation-drawer {
  background: #f5f5f5;
}

.v-list-item-title {
  font-family: 'Noto Sans', sans-serif;
}

.v-list-subheader {
  color: #3d8de7;
}

.v-list-group__header .v-list-item__title {
  color: #3d8de7;
}

.v-list-group__items .v-list-item__title {
  color: #3d8de7;
}
</style>