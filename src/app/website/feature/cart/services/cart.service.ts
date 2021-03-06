import { Injectable } from '@angular/core';
import { Product } from '@feature/product/model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];
  cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.products.push(product);
    this.cart.next(this.products);
  }

  getAllProducts() {
    return this.products;
  }
}
