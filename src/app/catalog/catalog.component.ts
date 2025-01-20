import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: '1',
      description: 'This is a product description',
      name: 'Product Name',
      imageName: 'product.jpg',
      category: 'Category',
      price: 100,
      discount: 10
    }
  }
}
