import { CanActivateFn, Router, UrlTree } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const routerService = inject(Router);
  const authService = inject(AuthService);
  if (authService.getPrincipal()) {
    return true;
  }else {
    return routerService.createUrlTree(['/login']);
  }

};
