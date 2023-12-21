import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '@app/shared/services/products/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.fetchproducts().subscribe((data: any[]) => {
      this.productService.setProductData(data)
    }
    )

  }

}
