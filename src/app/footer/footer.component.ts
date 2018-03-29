import { Component, OnInit } from '@angular/core';
import { ConfService } from '../conf/conf.service'
import { Conf } from '../conf/conf'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  conf: Conf = new Conf;

  constructor( private confService: ConfService) { }

  ngOnInit() {
    this.confService.getConf()
      .subscribe( (res: Conf)=> {
        // console.log(res)  
        this.conf = res
      })
  }

}
