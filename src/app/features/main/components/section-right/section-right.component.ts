import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '@app/shared/services/products/product.service';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '@app/shared/services/products/product';


@Component({
  selector: 'app-section-right',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './section-right.component.html',
  styleUrl: './section-right.component.css'
})
export class SectionRightComponent implements OnInit {
  products: any[] = [];
  product$!: Observable<Product | null | undefined>;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.products = this.productService.getProductData()
    /* this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.productService.fetchproduct(params.get('_id')!))
    )
    console.log(this.product$.subscribe((data: any) => console.log(data))) */
  }


  gotoProductPage(ProductID: string) {
    this.router.navigate(['/products', ProductID])
  }
}