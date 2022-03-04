import { Component, OnInit } from '@angular/core';
import { Product } from '@feature/product/model/product';
import { ProductService } from '@feature/product/shared/services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  dataSource: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.dataSource = this.productService.getAllProduct();
  }

}
