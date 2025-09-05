import { ModelModule } from './../app/model/model.module';
import { RouterModule } from '@angular/router';
import { CartDetail } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckOut } from './checkout.component';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  declarations: [StoreComponent, CartSummaryComponent, CartDetail, CheckOut], // 'Private to this Angular module' -- 'register & load' this component
  exports: [StoreComponent, CartDetail, CheckOut], // 'sharable to other Angular modules'
})
export class StoreModule {}
