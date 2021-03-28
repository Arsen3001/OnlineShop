import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IBasketList, ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { BasketService } from 'src/app/services/basket.service';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-item-product-list',
  templateUrl: './item-product-list.component.html',
  styleUrls: ['./item-product-list.component.scss']
})
export class ItemProductListComponent implements OnInit {
  @Input () item = {} as IBasketList;
  @Input () index = 0;
  @Output () deleteItem = new EventEmitter();
  mainLink = this.shopService.mainLink;

  constructor(private basketService: BasketService, private shopService: ShopServiceService) {}

  ngOnInit(): void {
  }

  deleteFromCart(i: number): void {
    this.deleteItem.emit(i);
  }

  chosenQty(i: number, product: ShopInterfaces): void {
    this.basketService.addBasketProduct(product, i);
  }

}
