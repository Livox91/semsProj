import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { SharedModule } from '@app/shared/shared.module';
import { ProductSubComponent } from './components/product-sub/product-sub.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, ProductMainComponent, SharedModule, ProductSubComponent
  ],
  exports: [
    ProductMainComponent, ProductSubComponent
  ]
})
export class ProductModule { }
