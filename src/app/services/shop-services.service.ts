import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPage, ShopInterfaces } from '../interfaces/shop-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {
signInSubject = new Subject();
mainLink = 'https://nodejs-final-mysql.herokuapp.com';
  constructor(private http: HttpClient) {}

getProductById(id: string): Observable <ShopInterfaces> {
  return this.http.get<ShopInterfaces>(`https://nodejs-final-mysql.herokuapp.com/products/${id}`);
}

getTopProduts(): Observable <ShopInterfaces[]> {
return this.http.get<ShopInterfaces[]> ('https://nodejs-final-mysql.herokuapp.com/products/top');

}

searchProduct(keyWord: string): Observable <IPage> {
  return this.http.get<IPage>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=${keyWord}&pageNumber=`);
}

getProduct(i: number): Observable <IPage> {
  return this.http.get<IPage>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${i}`);
}
}

