import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //@ts-ignore
  @Input() product: Product;
  @Output() eventDeleteProduct: EventEmitter<number> = new EventEmitter();
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.eventDeleteProduct.emit(this.product.id);
  }
}
