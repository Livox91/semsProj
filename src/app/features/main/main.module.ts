import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionLeftComponent } from './components/section-left/section-left.component';
import { SectionRightComponent } from './components/section-right/section-right.component';
import { PageFilterComponent } from './components/page-filter/page-filter.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, CarouselComponent, SectionLeftComponent, SectionRightComponent, PageFilterComponent
  ],
  exports: [
    CarouselComponent, SectionLeftComponent, SectionRightComponent, PageFilterComponent
  ]
})
export class MainModule { }
