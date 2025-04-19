import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
 const userservice =  inject(AuthService);
 if(userservice.loggedUser)
 {
  return true;
 }
 else
 {
  const router = inject(Router);
  router.navigate(['login']);
  return false;
 }

};
