import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getimageUrl(product: IProduct) {
    if (!product) {
      // for null demo, in case something in array is undefined or null
      return '';
    }
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked() {
    // no need to pass product data from here bcz
    // parent component which rendered buy btn, already
    // has product info as it came out of ngFor loop as a section
    // with product object + child component which was product details html
    // But, if u want to emit whole data from here, its also possible
    this.buy.emit();
  }
}
