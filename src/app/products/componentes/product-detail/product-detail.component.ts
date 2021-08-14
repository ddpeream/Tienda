import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router'
import {ProductsService} from '../../../core/service/products/products.service'
import {Product} from '../../../core/model/product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
    });


  }
  fetchProduct (id: string) {
    this.productsService.getProduct(id)
    .subscribe(rta => this.product = rta)
  }

  createProduct(product) {
    this.productsService.createProduct(product)
    .subscribe(rta => console.log(product))
  }

  updateProduct(id: string, change: Product) {
    this.productsService.editProduct(id, change)
    .subscribe(rta => console.log(change))
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => console.log(rta))
  }

}
