import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, tap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public apiUrl = 'http://localhost:3000/';
  private productData: any[] = []


  constructor(private http: HttpClient) { }

  fetchproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  setProductData(data: any[]) {
    this.productData = data;
  }

  getProductData() {
    console.log(this.productData);
    return this.productData;
  }

  getProductId(): Observable<string[]> {
    return this.fetchproducts().pipe(map(products => products.map(product => product._id)))
  }

}