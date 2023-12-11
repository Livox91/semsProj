import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { get } from 'node:http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public isSideNavVisible: boolean = false;

  public showSideNav(): void {
    this.isSideNavVisible = !this.isSideNavVisible
  }
}