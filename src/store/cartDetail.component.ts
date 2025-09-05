import { Cart } from './../app/model/cart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'cart-detail',
  templateUrl: 'cartDetail.component.html',
  standalone: false,
})
export class CartDetail {
  constructor(public cart: Cart) {}
}
