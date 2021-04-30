import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {

  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['login']);
  }

  goToHome(): void {
    this.router.navigate(['']);
  }

}
