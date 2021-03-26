import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPage, ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { ShopServiceService } from 'src/app/services/shop-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  keyWord = '';
  constructor(private router: Router, private shopService: ShopServiceService) { }

  ngOnInit(): void {
  }

  searchWord(): void {
    this.shopService.searchProduct().subscribe((res: ShopInterfaces[]) =>{
      this.shopService.searchSubject.next(res);
      this.shopService.setKeyWord(this.keyWord)
    });
    this.router.navigate(['search']);
  }
  }
