import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent, title: 'Joes Home Page'},
  // :filter is a route parameter that can be used to filter the products displayed on the page.
  // when icon on home is clicked, it will navigate to /catalog/Heads and Heads is a filter value
  {path: 'catalog/:filter', component:CatalogComponent, title: 'Catalog Page'},
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
