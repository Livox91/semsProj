import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderComponent, AboutComponent,
  ],
  exports: [
    HeaderComponent, AboutComponent
  ]
})
export class SharedModule { }
