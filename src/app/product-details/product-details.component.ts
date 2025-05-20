import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buyProduct = new EventEmitter();

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct) {
    this.buyProduct.emit();
  }

  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) return 'strikethrough red';
    else return '';
  }
}
