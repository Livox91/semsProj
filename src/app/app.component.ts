import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageFilterComponent } from './page-filter/page-filter.component';
import { SectionLeftComponent } from './section-left/section-left.component';
import { AboutComponent } from './about/about.component';
import { SectionRightComponent } from './section-right/section-right.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CarouselComponent, PageFilterComponent, SectionLeftComponent, AboutComponent, SectionRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoapp';
}
