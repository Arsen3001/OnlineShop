import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBasketList, ShopInterfaces } from '../interfaces/shop-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products: IBasketList[] = [];
  subtotalSubj = new Subject();
  countSubj = new Subject();
  count = 0;
  sum = 0;
  
  constructor() {}

addBasketProduct(product: ShopInterfaces, qty: number): void {
  const subtotal = 0;

  this.checkItem();

  const basketItem = this.products.find(item =>  {
    return JSON.stringify(item.product) === JSON.stringify(product);
  });

  if (basketItem) {
    basketItem.quantity = parseInt(`${basketItem.quantity}, 10`);
    qty = parseInt(`${qty}`, 10);
    basketItem.quantity = qty;
    localStorage.setItem('products', JSON.stringify(this.products));
    this.priceAndQty();
    return;
  }
  this.products.push({product, quantity: qty})
  localStorage.setItem('products', JSON.stringify(this.products));
  this.priceAndQty();
}

deleteFromCart(i: number): void {
  this.products = JSON.parse(`${localStorage.getItem('products')}`);
  this.products.splice(i,1);
  localStorage.setItem('products', JSON.stringify(this.products));
  this.priceAndQty();
}

checkItem(): void {
  if (JSON.parse(`${localStorage.getItem('products')}`)) {
    this.products = JSON.parse(`${localStorage.getItem('products')}`);
  } else {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}

priceAndQty(): void {
this.count = 0;
this.sum = 0;
this.checkItem();
this.products.forEach(item => {
    this.sum += item.product.price * item.quantity;
    this.count += item.quantity;
    this.subtotalSubj.next(this.sum);
    this.countSubj.next(this.count);
});
this.subtotalSubj.next(this.sum);
this.countSubj.next(this.count);
}

}
