import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login'
import { UserService } from '../users/user.service'
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // user: Usuario = new Usuario();
  login: Login = new Login();

  constructor( private userService: UserService, private authService: AuthService ) { }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe( (users:any) => users.forEach(user => {
    //     console.log(user);
    //   }))
  }

  fazerLogin(){

    this.authService.fazerLogin(this.login);

    // console.log( this.login );
    

  }

}
