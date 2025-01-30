import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent, title: 'Joes Home Page'},
  {path: 'catalog', component:CatalogComponent, title: 'Catalog Page'},
  {path: 'cart', component:CartComponent, title: 'Cart Page'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
