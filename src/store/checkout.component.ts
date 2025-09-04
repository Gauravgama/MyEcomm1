import { OrderRepository } from './../app/model/order.repository';
import { ModelModule } from './../app/model/model.module';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Order } from '../app/model/order.model';


@Component({
  selector: 'checkout',
  templateUrl: 'checkOut.component.html',
  standalone: false,
})
export class CheckOut {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(private repository: OrderRepository, public order: Order) {
    // order = cart service data + form data
  }

  submitOrder(form:NgForm) {
    // post localhost:3500/orders , order
    this.submitted=true;
    if(form.valid){
      this.repository
        .saveOrder(this.order)

        .subscribe((order) => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
        });
    }
  }
}
