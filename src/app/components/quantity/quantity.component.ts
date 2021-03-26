import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  @Input ()count = 1;
  @Input ()countInStock = 1;
  @Output ()chosenQty = new EventEmitter<number>();
  countArr = Array;


  constructor() { }

  ngOnInit(): void {
  }

onChosenQty(i: number): void{
  this.chosenQty.emit(i);
}


}
