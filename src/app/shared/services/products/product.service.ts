import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, tap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  public apiUrl = 'http://localhost:3000/';
  private productData: any[] = [];
  private itemData: any[] = [];


  constructor(private http: HttpClient) { }

  fetchproducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)

  }

  setProductData(data: any) {
    this.productData = data.pop();
  }
  setItemData(data: any) {
    this.itemData = data.pop();
  }

  getProductData() {
    return this.productData;
  }

  getItemData() {
    return this.itemData;
  }
  getProductId(): Observable<string[]> {
    return this.fetchproducts().pipe(map(products => products.map(product => product._id)))
  }

}
