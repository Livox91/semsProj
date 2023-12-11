import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ProductService } from '@app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.products = this.productService.getProductData()
  }
}
