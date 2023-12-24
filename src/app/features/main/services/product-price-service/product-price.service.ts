import { Injectable } from '@angular/core';
import { ProductsService } from '@app/shared/services/products/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService {

  constructor(private productService: ProductsService) { }


}
