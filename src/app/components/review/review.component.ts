import { Component, Input, OnInit } from '@angular/core';
import { ShopInterfaces } from 'src/app/interfaces/shop-interfaces';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input ()product = {} as ShopInterfaces;
  constructor() { }

  ngOnInit(): void {
  }

}
