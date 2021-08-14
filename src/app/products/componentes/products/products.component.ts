import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products/products.service';

import {Product} from '../../../core/model/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product [] = [];

  constructor(
    private productsservice: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts()
  }

  clickProduct (id: number) {
    console.log(`El producto ${id} fue seleccionado mano`);
  }
  
  fetchProducts() {
    this.productsservice.getAllProducts()
    .subscribe(rta => this.products = rta)
  }
}
