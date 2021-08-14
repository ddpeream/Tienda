import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';
import { ProductsService } from 'src/app/core/service/products/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = []
  displayedColumns: string[] = [
    'id', 'title', 'price', 'accion'
  ];

  constructor(
    private productservice: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProduct()
  }

  fetchProduct() {
    this.productservice.getAllProducts()
    .subscribe(rta => {
      this.products = rta;
      console.log(this.products)
    })
  }

  deleteProduct(id: string) {
    this.productservice.deleteProduct(id)
    .subscribe(rta => {
      console.log(rta)
      this.fetchProduct()
    })
  }

}
