import { OrderRepository } from './../app/model/order.repository';
import { Order } from './../app/model/order.model';
import { Component } from '@angular/core';

@Component({
  selector: 'checkout',
  templateUrl: 'checkOut.component.html',
  standalone: false,
})
export class CheckOut {
  constructor(private repository: OrderRepository, public order: Order) {}
}
