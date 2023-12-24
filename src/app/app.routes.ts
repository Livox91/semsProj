import { Routes } from '@angular/router';
import { MainComponent } from './features/main/components/main/main.component';
import { AboutComponent } from './features/about/components/about/about.component';

import { productGuard } from './features/Product/guard/product.guard';
import { ProductMainComponent } from './features/Product/components/product-main/product-main.component';



export const routes: Routes = [
    { path: 'products/:id', component: ProductMainComponent, },
    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'about', pathMatch: 'full' }

];
