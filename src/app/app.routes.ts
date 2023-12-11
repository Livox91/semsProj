import { Routes } from '@angular/router';
import { MainComponent } from './features/main/components/main/main.component';
import { AboutComponent } from './features/about/components/about/about.component';
import { ProductComponent } from './features/Product/components/product/product.component';



export const routes: Routes = [
    { path: 'products/:_id', component: ProductComponent },
    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }

];
