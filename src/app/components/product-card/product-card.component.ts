import { Component, OnInit, Input } from '@angular/core';
import { ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  mainLink = this.shopServices.mainLink;
  @Input('product') product = {} as ShopInterfaces;
  constructor(private shopServices: ShopServiceService) { }

  ngOnInit(): void {}

}
