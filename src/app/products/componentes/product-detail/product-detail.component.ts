import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../../../core/service/products/products.service';
import { CartService } from '../../../core/service/cart/cart.service';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(rta => this.product = rta);
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addCart(this.product, this.quantity);
      alert(`${this.quantity > 1 ? this.quantity + ' productos agregados' : 'Producto agregado'} al carrito 🛒`);
      this.quantity = 1;
    }
  }

  buyNow() {
    if (this.product) {
      // Agregar al carrito
      this.cartService.addCart(this.product, this.quantity);
      // Redirigir inmediatamente a la página de orden/carrito
      this.router.navigate(['/order']);
    }
  }

  createProduct(product: Product) {
    this.productsService.createProduct(product)
      .subscribe(rta => console.log(product));
  }

  updateProduct(id: string, change: Product) {
    this.productsService.editProduct(id, change)
      .subscribe(rta => console.log(change));
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe(rta => console.log(rta));
  }

}
