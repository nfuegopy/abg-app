import AuthService from '@/services/AuthService';

export default function authGuard(to, from, next) {
  const currentUser = AuthService.getCurrentUser();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!currentUser) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
}