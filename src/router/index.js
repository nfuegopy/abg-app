import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/page/MainLayout.vue';
import LoginView from '@/components/login/view/LoginView.vue';
import HomeMenu from '@/views/HomeMenu.vue';
import ClienteView from '@/components/referenciales/Clientes/view/ClienteView.vue';
import JuzgadoView from '@/components/referenciales/Juzgado/view/JuzgadoView.vue';
import SecretariaView from '@/components/referenciales/Secretaria/view/SecretariaView.vue';
import DemandadoView from '@/components/referenciales/Demandado/view/DemandadoView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/home',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeMenu,
      },
      {
        path: 'cliente',
        name: 'Cliente',
        component: ClienteView,
      },
      {
        path: 'juzgado',
        name: 'Juzgado',
        component: JuzgadoView,
      },
      {
        path: 'secretaria',
        name: 'Secretaria',
        component: SecretariaView,
      },
      {
        path: 'demandado',
        name: 'Demandado',
        component: DemandadoView,
      },
      // Agrega más rutas según sea necesario
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
