import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@app/shared/services/product/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.fetchproducts().subscribe((data: any[]) => {
      this.productService.setProductData(data)
    }
    )
  }

}
