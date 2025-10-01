import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

import { BehaviorSubject } from 'rxjs'

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = []
  private cart = new BehaviorSubject<CartItem[]>([])

  cart$ = this.cart.asObservable()

  constructor() {
    // Cargar carrito del localStorage si existe
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.cart.next(this.items);
    }
  }

  addCart(product: Product, quantity: number = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items = [...this.items, { product, quantity }];
    }
    
    this.cart.next(this.items);
    this.saveCart();
  }

  removeFromCart(productId: string) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.cart.next(this.items);
    this.saveCart();
  }

  updateQuantity(productId: string, quantity: number) {
    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cart.next(this.items);
        this.saveCart();
      }
    }
  }

  clearCart() {
    this.items = [];
    this.cart.next(this.items);
    this.saveCart();
  }

  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  getItemCount(): number {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
