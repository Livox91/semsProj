import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductVariationService {
  private apiUrl = "http://localhost:3000/products";

  private productCategory = new BehaviorSubject<any>(null);
  productCat$ = this.productCategory.asObservable();

  private productVariation = new BehaviorSubject<any>(null);
  productVar$ = this.productVariation.asObservable()

  private productVariationOp = new BehaviorSubject<any>(null);
  productVarOp$ = this.productVariationOp.asObservable()

  constructor(private http: HttpClient) { }

  fetchProductData(category_id: string | null): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${category_id}`);
  }

  setVariation(data: any) {
    this.productVariation.next(data)
  }

  setCategory(data: any) {
    this.productCategory.next(data)
  }

  setVarOp(data: any) {
    this.productVariationOp.next(data)
  }

}
