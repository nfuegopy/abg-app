import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import axios from 'axios';

loadFonts();

const app = createApp(App);

// Configura Axios
axios.defaults.baseURL = 'http://localhost:3000'; // Ajusta esto a la URL de tu API
axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access_token) {
      config.headers['Authorization'] = 'Bearer ' + user.access_token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

app.use(router).use(vuetify).mount('#app');