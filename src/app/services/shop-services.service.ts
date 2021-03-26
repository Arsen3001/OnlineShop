import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPage, ShopInterfaces } from '../interfaces/shop-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {
searchSubject = new Subject();
keyWord = '';
pageNum = 1;
mainLink = 'https://nodejs-final-mysql.herokuapp.com';



  constructor(private http: HttpClient) { }

setKeyWord(s: string): void {
  this.keyWord = s;
}

setPageNum(i: number): void {
  this.pageNum = i;
}

getProductById(id: string): Observable <ShopInterfaces> {
  return this.http.get<ShopInterfaces>(`https://nodejs-final-mysql.herokuapp.com/products/${id}`);
}

getTopProduts(): Observable <ShopInterfaces[]> {
return this.http.get<ShopInterfaces[]> ('https://nodejs-final-mysql.herokuapp.com/products/top');

}

searchProduct(): Observable <ShopInterfaces[]> {
  return this.http.get<ShopInterfaces[]>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.keyWord}&pageNumber=`);
}

getProduct(): Observable <IPage> {
  return this.http.get<IPage>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNum}`);
}
}

