import { AuthService } from './../services/auth.service';
import { RouteService } from './../services/route.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private routeService: RouteService,
    private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const isUserLogin = this.authService.isUserLogin();

      if (!isUserLogin) {
        this.routeService.goToLogin();
      }

    return isUserLogin;
  }

}
