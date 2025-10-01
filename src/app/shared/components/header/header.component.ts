import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/service/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  mobileMenuOpen = false;

  constructor(
    private cartservice: CartService
  ) {
    this.total$ = this.cartservice.cart$
    .pipe(
      map(items => items.reduce((count, item) => count + item.quantity, 0))
    )
  }

  ngOnInit(): void {
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

}
