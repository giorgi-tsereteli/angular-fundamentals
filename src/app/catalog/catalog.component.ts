import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any; // why was this any?
  filter: string = '';

  // longer version of accessing service. does same as constructor
  // private cartSvc: CartService = inject(CartService);

  constructor(
    private cartSvc: CartService,
    private productSrc: ProductService
  ) {}

  ngOnInit() {
    // data is just a arrow function name
    this.productSrc.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
  }
}
