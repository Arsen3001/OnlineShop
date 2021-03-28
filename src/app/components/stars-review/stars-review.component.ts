import { Component, Input, OnInit } from '@angular/core';
import { ShopInterfaces } from 'src/app/interfaces/shop-interfaces';

@Component({
  selector: 'app-stars-review',
  templateUrl: './stars-review.component.html',
  styleUrls: ['./stars-review.component.scss']
})
export class StarsReviewComponent implements OnInit {
  @Input () product = {} as ShopInterfaces;
  constructor() { }

  ngOnInit(): void {
  }

}
