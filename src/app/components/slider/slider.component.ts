import { Component, OnInit } from '@angular/core';
import { ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  topProducts: ShopInterfaces[] = [];
  mainLink = this.shopService.mainLink;
  loader = true;
  constructor(private shopService: ShopServiceService) { }

  ngOnInit(): void {
   this.shopService.getTopProduts().subscribe((res: ShopInterfaces[]) => {
    this.topProducts = res;
    this.loader = false;
  });
  }
}
