import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPage, ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
productsList: ShopInterfaces[] = [];
pages = 0;
currentPage = 1;
loader = true;
  constructor (private http: HttpClient, private shopService: ShopServiceService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  pageNumber(i: number): void {
    this.currentPage = i;
    this.getProducts();
  }

  getProducts(): void {
    this.shopService.getProduct().subscribe((res: IPage) => {
      this.productsList = res.products;
      this.pages = res.pages;
      this.loader = false;
    });
  }

}
