import { Component, OnInit } from '@angular/core';
import { CartService } from '@feature/cart/services/cart.service';
import { Product } from '@feature/product/model/product';
import { Observable, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  products$: Observable<Product[]>;
  //@ts-ignore
  sub: Subscription;

  constructor(
    private cart: CartService
  ) {
    this.products$ = this.cart.cart$
    .pipe(
      tap(() => console.log('se agrego'))
    );
  }

  ngOnInit() {
    // this.sub = this.cart.cart$
    // .subscribe(products => {
    //   console.log('se agrego producto');
    //   this.products = products;
    // });
  }

  ngOnDestroy() {
    console.log('eliminar');
    // this.sub.unsubscribe();
  }

}
