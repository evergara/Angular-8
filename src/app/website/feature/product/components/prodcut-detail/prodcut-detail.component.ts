import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@feature/product/model/product';
import { ProductService } from '@feature/product/shared/services/product.service';


import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-prodcut-detail',
  templateUrl: './prodcut-detail.component.html',
  styleUrls: ['./prodcut-detail.component.scss']
})
export class ProdcutDetailComponent implements OnInit {
  //@ts-ignore
  product$: Observable<Product | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product$ = this.activatedRoute.params
    .pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        return this.productService.getProduct(id);
      })
    );
  }

  ngOnInit() {
  }

   /*
  //@ts-ignore
  product?: Product;

 
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.activatedRoute.params
    .subscribe((params: Params) => {
      const id = params["id"];
      this.product = this.productService.getProduct(id);
    });
  }
**/
}
