import { Component, Input, OnInit, Output,  EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Input ('pages') pages = 0;
  @Output () pageNumber = new EventEmitter <number>();
  count = Array;
  constructor() { }

  ngOnInit(): void {
  }

changePage(i: number): void {
  this.pageNumber.emit(i);
}


}
