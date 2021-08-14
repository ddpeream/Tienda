import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/model/product.model';
import { CartService } from 'src/app/core/service/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(
    private cartservice: CartService
  ) {
    this.products$ = this.cartservice.cart$
   }

  ngOnInit(): void {
    console.log(this.products$)
  }

}
