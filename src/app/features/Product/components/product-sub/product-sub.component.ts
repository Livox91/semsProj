import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductVariationService } from '../../services/product-variation/product-variation.service';


@Component({
  selector: 'app-product-sub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-sub.component.html',
  styleUrl: './product-sub.component.css'
})
export class ProductSubComponent implements OnInit, OnDestroy {
  category: any;
  variation: any;
  variationOp: any;

  categorySub: any;
  varSub: any;
  varOpSub: any;
  constructor(private productInfo: ProductVariationService) { }

  ngOnInit(): void {
    this.categorySub = this.productInfo.productCat$.subscribe((data) => this.category = data)
    this.varSub = this.productInfo.productVar$.subscribe((data) => this.variation = data)
    this.varOpSub = this.productInfo.productVarOp$.subscribe((data) => this.variationOp = data)
  }
  ngOnDestroy() {
    this.categorySub.unsubscribe();
  }
}
