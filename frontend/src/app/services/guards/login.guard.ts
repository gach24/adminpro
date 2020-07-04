import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService, public router: Router) {}
  canActivate(): boolean  {
    if (this.userService.isLogged())
      return true;
    this.router.navigate(['/login']);
    return false;
  }
  
}
