import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '../store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from '../store/store.component';
import { CartDetail } from '../store/cartDetail.component';
import { StoreFirstGuard } from './store.FirstGuard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [//wider scope / blocking sccript /dependency module
    BrowserModule, StoreModule, RouterModule.forRoot([
      {
        path: 'store',
        canActivate: [StoreFirstGuard], // route guard - non first navigation
        component: StoreComponent,
      },
      {
        path: 'cart',
        canActivate: [StoreFirstGuard],
        component: CartDetail,
      },
      {
        path: '**',
        redirectTo: '/store',
      },
    ]),
  ],
  providers: [StoreFirstGuard], //register services
  bootstrap: [AppComponent]  // load root component
})
export class AppModule { }

// root level entities do not directly try to connect to model level entity (services - data)
//root level entities should not register feature level entitites(component, directive, pipe)
