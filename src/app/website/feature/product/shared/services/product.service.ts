import { Injectable } from '@angular/core';
import { Product } from '@feature/product/model/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
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
  
  getAllProduct(): Product[] {
    return this.products;
  }

  getProduct(productId: string) {
    return of(this.products.find(product => product.id === parseInt(productId, 10)));
  }
}
