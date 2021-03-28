import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  sign = 'SIGN IN';
  constructor(private shopServices: ShopServiceService) { }

  ngOnInit(): void {
    this.shopServices.signInSubject.subscribe((res: any) => {
      this.sign = res;
    });
  }

}
