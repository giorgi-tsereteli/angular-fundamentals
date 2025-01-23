import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute // to filter page of products
  ) { }

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    // Subscribe to route parameters
    this.route.params.subscribe((params) => {
      // Update the filter property with the 'filter' parameter from the route
      this.filter = params['filter'] ?? ''
      // 'subscribe' listens for changes in the route parameters and executes the callback function when they change
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']); // conditional navigation
  }

  /**
   * Filters the products based on the selected category.
   * If no category is selected (filter is an empty string), it returns all products.
   * Otherwise, it returns only the products that match the selected category.
   */
  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
        (product: any) => product.category === this.filter
      );
  }
}
