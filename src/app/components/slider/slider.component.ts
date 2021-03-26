import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  topProducts: any[] = [];
  mainLink = this.shopService.mainLink;
  loader = true;  
  constructor(private http: HttpClient, private shopService: ShopServiceService) { }

  ngOnInit(): void {
   this.shopService.getTopProduts().subscribe((res: any[]) => {
    this.topProducts = res;
    this.loader = false;
    } );

    
  }
}
