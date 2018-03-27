import { Injectable } from '@angular/core';
import { Usuario } from  './user'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserService {

  constructor( private http: HttpClient) { }

  addUser(user){

  }

  removeUser(user){

  }

  editUser(user){
    
  }
  getUsers(){
    // console.log('getusers');
    
    return this.http.get('./assets/json/users.json')
      // .subscribe( res=> console.log(res))
  }

}
