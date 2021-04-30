import { RouteService } from './route.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | undefined;

  constructor(private routeService: RouteService) {

  }

  login(value: any): void {

    this.user = new User();
    this.user.name = value.userName;

    this.routeService.goToHome();

    console.log(value);
  }

  isUserLogin(): boolean {
    return !!this.user;
  }
}
