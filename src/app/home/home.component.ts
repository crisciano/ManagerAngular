import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core'
import { ConfService } from '../conf/conf.service'
import { Conf } from '../conf/conf' 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  conf: Conf = new Conf;

  zoom: number = 18;
  
  // initial center position for the map
  lat: number = -31.7672454;
  lng: number = -52.3467149;
  // lat: number
  // lng: number

  constructor( private confService: ConfService) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.confService.getConf()
      .subscribe( (res: Conf) =>{ 
      // this.lat = res.lat;
      // this.lng = res.lng;
      // console.log( ` ${res.lat} -  ${res.lng}  ` );
        
        this.conf = res
      })

  }

}
