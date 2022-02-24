import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product [] = [
    {
      id: 1,
      price: 10000,
      name: 'Papa',
      description: 'Es una buena papa..',
      image: ''
    },
    {
      id: 2,
      price: 700,
      name: 'Yuca',
      description: 'Es una buena yuca..',
      image: ''
    },
    {
      id: 3,
      price: 1700,
      name: 'Platano',
      description: 'Es una buena Platano..',
      image: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  deleteProduct(id_product: number): void {
     console.log(`Estas inetnatado eliminar el producto con id ${id_product}`);
  }

}
