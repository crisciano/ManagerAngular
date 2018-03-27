import { Injectable } from '@angular/core';
import { Login } from './login'
import { Usuario } from '../users/user'

@Injectable()
export class LoginService {

  user: Usuario;

  constructor() { }

}
