import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfService {

  constructor(private http: HttpClient) { }

  getConf() {
    return this.http.get('./assets/json/conf.json')
  }

}
