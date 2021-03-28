import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit, OnDestroy {
  totalPrice = 0;
  count = 0;
  sub !: Subscription;
  set !: Subscription;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.priceAndQty();
    this.totalPrice = this.basketService.sum;
    this.count = this.basketService.count;
    this.sub = this.basketService.subtotalSubj.subscribe((res: any) => this.totalPrice = res );
    this.set = this.basketService.countSubj.subscribe((res: any) => this.count = res);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.set.unsubscribe();
  }


}
