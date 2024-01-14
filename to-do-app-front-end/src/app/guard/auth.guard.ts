import { CanActivateFn, Router, UrlTree } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const routerService = inject(Router);
  const authService = inject(AuthService);
  return new Promise<boolean|UrlTree>(resolve=>{
    authService.getPrincipal().subscribe(user=>{
      if(user){
        resolve(true);
      }else {
        resolve(routerService.createUrlTree(['/login']));
      }

    });
  });

};
