import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from '../../main.module';
import { SharedModule } from '../../../../shared/shared.module';


@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [CommonModule, MainModule, SharedModule,]
})
export class MainComponent {

}
