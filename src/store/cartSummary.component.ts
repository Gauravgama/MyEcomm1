import { Component } from '@angular/core';
import { Cart } from '../app/model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: 'cartSummary.component.html',
  standalone: false,
})
export class CartSummaryComponent {
  constructor(public cart:Cart) {}
}
