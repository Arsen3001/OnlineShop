import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit {
  totalPrice = 0;
  count = 0;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.priceAndQty();
    this.totalPrice = this.basketService.sum;
    this.count = this.basketService.count;
    this.basketService.subtotalSubj.subscribe((res: any) => {this.totalPrice = res;});
    this.basketService.countSubj.subscribe((res: any) => {this.count = res;});
  }

  // ngOnDestroy(): void {
  //   this.basketService.subtotalSubj.unsubscribe();
  //   this.basketService.countSubj.unsubscribe();
  // }


}
