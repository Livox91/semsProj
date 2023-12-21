import { Injectable, inject } from '@angular/core';
import { ProductsService } from '../products/product.service';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductIdService {

  private productService = inject(ProductsService);

  public ProductId: string[] = []

  public func = this.productService.getProductId().subscribe((data) => {
    this.ProductId = data;
    console.log(this.ProductId)
  })

}
