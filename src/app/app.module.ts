import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PagesComponent } from './components/pages/pages.component';
import { SearchComponent } from './components/search/search.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { BasketComponent } from './components/basket/basket.component';
import { ReviewComponent } from './components/review/review.component';
import { MessageComponent } from './components/message/message.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { BasketListComponent } from './components/basket-list/basket-list.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';
import { ItemProductListComponent } from './components/item-product-list/item-product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    SearchInputComponent,
    SliderComponent,
    ProductListComponent,
    ProductCardComponent,
    PagesComponent,
    SearchComponent,
    ProductPageComponent,
    QuantityComponent,
    BasketComponent,
    ReviewComponent,
    MessageComponent,
    NavComponent,
    SignInComponent,
    BasketListComponent,
    SubtotalComponent,
    ItemProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
