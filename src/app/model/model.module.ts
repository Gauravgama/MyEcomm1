import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { PRODUCTREPOSITORY } from './product.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';

@NgModule({
  imports: [HttpClientModule],
  //declartions are non-services so we should not write here, even though we can write
  providers: [StaticDataSource, PRODUCTREPOSITORY, RestDataSource, Cart, Order, OrderRepository], //register and load services/injectables --all
  //services are sharable by nature
})

export class ModelModule {} // only services/injectables
