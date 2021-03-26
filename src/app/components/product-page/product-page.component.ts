import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { ShopInterfaces } from '../../interfaces/shop-interfaces';
import { ShopServiceService } from '../../services/shop-services.service';




@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  id = '';
  productId = 'id';
  mainLink = 'https://nodejs-final-mysql.herokuapp.com';
  product = {} as ShopInterfaces;
  count = 1;
  constructor(private activatedRoute: ActivatedRoute, private shopService: ShopServiceService, private basketService: BasketService ) { 
    this.id = activatedRoute.snapshot.params[this.productId];
  }

  ngOnInit(): void {
    this.shopService.getProductById(this.id).subscribe((res: ShopInterfaces ) => {
      this.product = res;
    });
  }

  addToCart(): void {
    this.basketService.addBasketProduct(this.product, this.count);
  }

chosenQty(i: number): void {
  this.count = i;
}

}
