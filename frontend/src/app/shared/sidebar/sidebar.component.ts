import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public user: User;

  constructor(public sidebarSrv: SidebarService, private userService: UserService, private router: Router) { }

  ngOnInit(): void { 
    this.user = this.userService.user;
  }
  
  public logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
