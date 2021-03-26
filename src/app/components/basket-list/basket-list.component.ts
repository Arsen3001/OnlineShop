import { Component, OnInit } from '@angular/core';
import { IBasketList, ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { BasketService } from 'src/app/services/basket.service';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {
  count = 1;
  products: IBasketList[] = JSON.parse(`${localStorage.getItem('products')}`);
  constructor(private shopService: ShopServiceService, private basketService: BasketService) {}

  ngOnInit(): void {
  }

  deleteItem(i: number): void {
    this.basketService.deleteFromCart(i);
    this.products = JSON.parse(`${localStorage.getItem('products')}`);
  }

}
