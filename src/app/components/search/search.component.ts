import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPage, ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: ShopInterfaces[] = [];
  loader = true;
  constructor(private shopService: ShopServiceService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((searchWord: any) => {
      this.shopService.searchProduct(searchWord.keyword).subscribe ((res: IPage) => {
        this.products = res.products;
        this.loader = false;
      });
    });
  }
}
