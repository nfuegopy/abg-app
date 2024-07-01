import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/page/MainLayout.vue';
import LoginView from '@/components/login/view/LoginView.vue';
import HomeMenu from '@/views/HomeMenu.vue';
import ClienteView from '@/components/referenciales/Clientes/view/ClienteView.vue';
import JuzgadoView from '@/components/referenciales/Juzgado/view/JuzgadoView.vue';
import SecretariaView from '@/components/referenciales/Secretaria/view/SecretariaView.vue';
import DemandadoView from '@/components/referenciales/Demandado/view/DemandadoView.vue';
import RolesView from '../components/admin/roles/view/RolesView.vue';
import UsersView from '@/components/admin/users/view/UsersView.vue';
import UserRolesView from '../components/admin/userroles/view/UserRolesView.vue';
import authGuard from './authGuard';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/home',
    component: MainLayout,
    meta: { requiresAuth: true },
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
      {
        path: 'roles',
        name: 'Roles',
        component: RolesView,
      },
      {
        path: 'users',
        name: 'Users',
        component: UsersView,
      },
      {
        path: 'user-roles',
        name: 'UserRoles',
        component: UserRolesView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(authGuard);

export default router;
