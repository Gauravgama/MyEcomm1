import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../app/model/model.module';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetail } from './cartDetail.component';

@NgModule({
  imports: [BrowserModule, ModelModule],
  exports:[StoreComponent], //shareable to other angular module
  declarations: [StoreComponent, CartSummaryComponent, CartDetail], //private to this angular module  --Register & Load this component
  providers: [],
})
export class StoreModule { }
