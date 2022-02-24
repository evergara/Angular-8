import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //@ts-ignore
  @Input() product: Product;
  

  constructor() {}

  ngOnInit(): void {
  }

}
