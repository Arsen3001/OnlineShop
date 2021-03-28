import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShopInterfaces } from 'src/app/interfaces/shop-interfaces';
import { ShopServiceService } from 'src/app/services/shop-services.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  mainLink = this.shopServices.mainLink;
  @Input() product = {} as ShopInterfaces;
  constructor(private shopServices: ShopServiceService, private router: Router) { }

  ngOnInit(): void {}


  routerFunc(): void {
    this.router.navigate(['product-page', this.product._id]);
  }
}
