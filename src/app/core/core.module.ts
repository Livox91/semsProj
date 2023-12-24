import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, ProductListComponent,
  ],
  exports: [
    ProductListComponent,
  ]
})
export class CoreModule { }
