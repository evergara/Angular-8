import { Component, OnInit } from '@angular/core';
import { Product } from '@feature/product/model/product';
import { Router } from '@angular/router';
import { ProductService } from '@feature/product/shared/services/product.service';
import { CartService } from '@feature/cart/services/cart.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product [];
  constructor(private router: Router, 
    private cart: CartService,
    private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.productoAll();
  }
  productoAll() {
    this.products = this.productService.getAllProduct();
  }

  deleteProduct(id_product: number): void {
     console.log(`Estas inetnatado eliminar el producto con id ${id_product}`);
  }

  onClickedProduct(id: number) {
    console.log('clicked', id);
    this.router.navigate(['/product', id]);
  }

  onAddCart(product: Product) {
    this.cart.addProduct(product);
  }

}
