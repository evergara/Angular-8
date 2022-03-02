import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '@feature/product/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //@ts-ignore
  @Input() product: Product;
  @Output() eventDeleteProduct: EventEmitter<number> = new EventEmitter();
  @Output() clickedProduct: EventEmitter<number> = new EventEmitter();
  today: Date = new Date();

  constructor() {}

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.eventDeleteProduct.emit(this.product.id);
  }

  viewDetail() {
    console.log('viewDetail', this.product.name);
    this.clickedProduct.emit(this.product.id);
  }
}
