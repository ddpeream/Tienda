import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem, CartService } from 'src/app/core/service/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cartItems$: Observable<CartItem[]>;
  promoCode: string = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.cartItems$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  increaseQuantity(productId: string) {
    let currentQuantity = 0;
    this.cartItems$.subscribe(items => {
      const item = items.find(i => i.product.id === productId);
      if (item) {
        currentQuantity = item.quantity;
      }
    }).unsubscribe();
    
    this.cartService.updateQuantity(productId, currentQuantity + 1);
  }

  decreaseQuantity(productId: string) {
    let currentQuantity = 0;
    this.cartItems$.subscribe(items => {
      const item = items.find(i => i.product.id === productId);
      if (item) {
        currentQuantity = item.quantity;
      }
    }).unsubscribe();
    
    if (currentQuantity > 1) {
      this.cartService.updateQuantity(productId, currentQuantity - 1);
    }
  }

  removeItem(productId: string) {
    if (confirm('¿Estás seguro de eliminar este producto del carrito?')) {
      this.cartService.removeFromCart(productId);
    }
  }

  getTotalItems(): number {
    return this.cartService.getItemCount();
  }

  getSubtotal(): number {
    return this.cartService.getTotal();
  }

  getDiscount(): number {
    // 10% de descuento si hay código promocional
    if (this.promoCode.toLowerCase() === 'descuento10') {
      return this.getSubtotal() * 0.1;
    }
    return 0;
  }

  getTotal(): number {
    return this.getSubtotal() - this.getDiscount();
  }

  applyPromoCode() {
    if (this.promoCode.toLowerCase() === 'descuento10') {
      alert('¡Código promocional aplicado! 10% de descuento 🎉');
    } else if (this.promoCode) {
      alert('Código promocional inválido');
    }
  }

  checkout() {
    if (this.getTotalItems() === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    
    // Aquí iría la lógica de pago real
    const confirmed = confirm(
      `¿Confirmar compra?\n\nTotal: $${this.getTotal().toFixed(2)}\nProductos: ${this.getTotalItems()}`
    );
    
    if (confirmed) {
      alert('¡Compra realizada con éxito! 🎉\n\nGracias por tu compra. Recibirás un email de confirmación.');
      this.cartService.clearCart();
      this.router.navigate(['/home']);
    }
  }

}
