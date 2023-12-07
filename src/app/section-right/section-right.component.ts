import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-section-right',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './section-right.component.html',
  styleUrl: './section-right.component.css'
})
export class SectionRightComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getproducts().subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
