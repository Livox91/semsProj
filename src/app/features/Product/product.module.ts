import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainComponent } from './components/product-main/product-main.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, ProductMainComponent
  ],
  exports: [
    ProductMainComponent
  ]
})
export class ProductModule { }
