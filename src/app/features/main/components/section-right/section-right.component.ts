import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '@app/shared/services/products/product.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-section-right',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './section-right.component.html',
  styleUrl: './section-right.component.css'
})
export class SectionRightComponent implements OnInit {
  products: any[] = [];
  product_items: any = [];
  display_items: any = [];

  constructor(
    private productService: ProductsService,
    private router: Router,) { }

  ngOnInit() {
    this.products = this.productService.getProductData()
    this.product_items = this.productService.getItemData()
    this.display_items = this.pushItemPrice(this.products, this.product_items, 'price', 'price')
  }

  pushItemPrice(arr1: any[], arr2: any[], key: string, value: any): any[] {
    return arr1.map(product => {
      const match = arr2.find(item2 =>
        item2.product_id === product._id);
      return {
        product,
        [key]: match ? match[value] : null
      }
    })
  }

  gotoProductPage(ProductID: string) {
    this.router.navigate(['/products', ProductID])
  }
}