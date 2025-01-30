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
    // if you have a URL like http://example.com/products/123, 123 is a route parameter. 
    // In this case, products is the route, and 123 is the parameter that can be used to fetch or display specific data related to that product.
    this.route.params.subscribe((availableParams) => {
      // 'subscribe' listens for changes in the route parameters and executes the callback function when they change
      // Update the filter property with the 'filter' parameter from the route
      this.filter = availableParams['filter'] ?? ''
      console.log(`Current filter value: ${this.filter}`);
    });
  }

// Where does params come from?
// In the context of Angular, params is an object that contains the route parameters. 
// It comes from subscribing to the params observable of the ActivatedRoute service. 
// This service provides access to information about a route associated with a component that is loaded in an outlet.

// Why is params an object?
// params is an object, not an array. It is a key-value pair object where each key is the name of a route parameter and the value is the parameter's value. 
// For example, if the route is /catalog;filter=electronics, params would be { filter: 'electronics' }.

// Nullish Coalescing Operator (??):
// The expression params['filter'] ?? '' means "if params['filter'] is null or undefined, use an empty string '' instead."
// This ensures that this.filter is always a string, even if the filter parameter is not present in the route.

// there was a part about this.route.snapshot.params['filter'] but it was removed.
// The route.snapshot.params['filter'] approach is not recommended because it only reads the route parameters once when the component is initialized. 
// If the route parameters change later, the component will not be aware of the changes. 
// Using the params observable ensures that the component is always up-to-date with the latest route parameters.
// Example was landing on catalog and then clicking the filter buttons. Function was filtering but url params were not updating.
// When these buttons were changed to use routerLink, now active route was always available and filter was also getting proper filter value


  /**
   * Adds a product to the cart and navigates to the cart page.
   * @param product The product to add to the cart.
   */
  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
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
