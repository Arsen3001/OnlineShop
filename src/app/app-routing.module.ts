import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { SearchComponent } from './components/search/search.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'search/:keyword', component: SearchComponent},
  {path: 'product-page/:id', component: ProductPageComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'sign-in', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
