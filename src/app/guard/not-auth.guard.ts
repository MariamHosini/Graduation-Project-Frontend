import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const notAuthGuard: CanActivateFn = (route, state) => {
 const userservice =  inject(AuthService);
 if(userservice.loggedUser)
 {
    const router = inject(Router);
    router.navigate(['home']);
    return false;
   }
   else
   {
    return true;
 }

};
