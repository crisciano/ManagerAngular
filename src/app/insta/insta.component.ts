import { Component, OnInit } from '@angular/core';
import { InstaService } from './insta.service'
import { Img } from './img'

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.scss']
})
export class InstaComponent implements OnInit {

  imgs: Img = new Img;

  constructor( private instaService: InstaService) { }

  ngOnInit() {

    this.imgs = this.instaService.getPosts()
    // console.log(this.instaService.getPosts());
    
    // this.instaService.getPosts()
  }

}
