import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  // cart var thats an array of products OF type IProduct[]
  cart : IProduct[] = [];

  add(product: IProduct): void {
    this.cart.push(product);
    console.log('Adding product to cart:', product.name);
  }

}
