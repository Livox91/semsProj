import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '@app/shared/services/products/product.service';

@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css'
})
export class ProductMainComponent implements OnInit {
  id: string | null = "";
  obeservable: any;
  product: any;
  category_id: string | null = "";

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.id = params.get('id') })
    this.obeservable = this.productService.fetchproducts().pipe(map(products => products.filter(product => product._id === this.id)))
    this.obeservable.subscribe((data: any) => {
      this.product = data;
      console.log(data);
    })
    this.category_id = this.product.category_id;
  }
}
