import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {

  
    imgbanner = 'https://iotacontabil.com.br/wp-content/uploads/2020/12/academia-1024x683.jpg';
  

  constructor() { }

  ngOnInit(): void {}

}
