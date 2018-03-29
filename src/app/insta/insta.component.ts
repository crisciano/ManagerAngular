import { Component, OnInit } from '@angular/core';
import { InstaService } from './insta.service'

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.scss']
})
export class InstaComponent implements OnInit {

  constructor( private instaService: InstaService) { }

  ngOnInit() {
    // this.instaService.getPosts()
    this.instaService.getPosts()
  }

}
