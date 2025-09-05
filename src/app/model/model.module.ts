import { StoreComponent } from './../../store/store.component';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    StaticDataSource,
    ProductRepository,
    RestDataSource,
    Cart,
    Order,
    OrderRepository,
  ], // register & load injectable/service -- 'All services are Sharable by nature'
})
export class ModelModule {} // only services/injectables
