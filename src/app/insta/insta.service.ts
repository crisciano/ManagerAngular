import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfService } from '../conf/conf.service'
import { Conf } from '../conf/conf';
import { Img  } from './img'

@Injectable()
export class InstaService {

  imgs: Img = new Img;
  newObj: any = [];
  token: string;

  constructor(private http: HttpClient, private confService: ConfService) { }

  getPosts(){
    this.http.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=1545990645.1677ed0.9da0d63587f249c7b77bd92a65b3230e`)
      .subscribe( (res: any) => {
        res.data.forEach(obj => {
          this.imgs.urlImg = obj.images['thumbnail'].url;
          if(  obj.caption != null ){
            this.imgs.description = obj.caption['text'];
          }
          this.imgs.link = obj.link
          // this.img.description = obj.caption['text'];
          console.log( this.imgs );
          // this.imgs.push(this.newObj);
        });
      }) 
      return this.imgs
  }

  getToken(){
    let tk: string;
    this.confService.getConf()
      .subscribe((res: Conf) => { 
        return tk = res.tokenInsta })

        console.log(tk);
        

    return tk;

  }

}
