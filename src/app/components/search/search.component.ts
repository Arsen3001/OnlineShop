import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPage, ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: ShopInterfaces[] = [];
  currentPage = this.shopService.pageNum;
  pages = 0;
  constructor(private shopService: ShopServiceService, private http: HttpClient) { }

  ngOnInit(): void {
this.getProducts();
  }

  getProducts(): void {
    this.shopService.searchSubject.subscribe((res: any) => {
    this.products = res.products;
    this.pages = res.pages;
    });
  }

  pageNumber(i: number): void {
    this.currentPage = i;
    this.shopService.setPageNum(i);
    this.shopService.searchProduct().subscribe((res: ShopInterfaces[]) => {
    this.shopService.searchSubject.next(res);
    }
    )};
}
