import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  keyWord = '';
  constructor(private router: Router, private shopService: ShopServiceService) { }

  ngOnInit(): void {
    this.shopService.searchClean.subscribe((res: any) => {
      this.keyWord = res;
    });
  }

  searchWord(): void {
  if (this.keyWord) {
    this.router.navigate(['search', this.keyWord]);
  }  else {
    this.router.navigate(['']);
  }
  }
}
