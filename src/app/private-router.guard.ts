import { routes } from './app.routes';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRouterGuard: CanActivateFn = (route, state) => {
  // const router = inject(Router)
  // const user = JSON.parse(localStorage.getItem('user') || '{}')
  // if (user.user !== 1) {
  //   alert("Bạn không có quyền truy cập")
  //   router.navigateByUrl('/')
  //   return false
  // }
  return true;
};
