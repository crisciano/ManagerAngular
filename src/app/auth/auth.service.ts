import { Injectable } from '@angular/core';
import { Usuario } from '../users/user';
import { Login } from '../login/login'
import { UserService } from '../users/user.service'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private userAth: boolean = false;

  constructor( private userService: UserService, private router: Router ) { }

  fazerLogin( user: Login ){
    this.userService.getUsers()
      .subscribe( (users:any )=> users.forEach(obj => {
        if( obj.email === user.email && obj.password === user.password ){
          this.userAth = true;
          console.log('auth');
          this.router.navigate(['/users']);
          return true;
        }
        // console.log(user);
      }) 
    )

  }
  auth(){
    return this.userAth;
  }

  logout(){
    this.router.navigate(['/']);
    this.userAth = false;
  }

}
