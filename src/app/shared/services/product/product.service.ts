import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/';
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
  fetchproduct(_id: number | string) {
    return this.fetchproducts().pipe(
      map((products: Product[]) => products.find(product => product._id === _id))
    )
  }
}
