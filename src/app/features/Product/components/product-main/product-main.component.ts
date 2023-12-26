import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module'
import { ProductsService } from '@app/shared/services/products/product.service';
import { ProductVariationService } from '../../services/product-variation/product-variation.service';
import { ProductSubComponent } from "../product-sub/product-sub.component";


@Component({
  selector: 'app-product-main',
  standalone: true,
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css',
  imports: [CommonModule, SharedModule, ProductSubComponent]
})

export class ProductMainComponent implements OnInit {
  id: string | null = "";
  product_data: any;
  product: any;
  categoryid: string | null = "";



  constructor(private route: ActivatedRoute, private productService: ProductsService, private productInfo: ProductVariationService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => { this.id = params.get('id') })
    this.product = this.productService.getProductData().filter(product => product._id == this.id).pop()
    this.categoryid = this.product.category_id
    this.product_data = this.productService.getItemData().filter(item => item.product_id == this.id).pop()


    this.productInfo.fetchProductData(this.categoryid).subscribe((data) => {
      this.productInfo.setCategory(data.filter((_, index) => index === 0).pop())
      this.productInfo.setVariation(data.filter((_, index) => index === 1).pop()),
        this.productInfo.setVarOp(data.filter((_, index) => index === 2).pop());
    });

  }

}
