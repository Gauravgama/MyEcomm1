import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<router-outlet> </router-outlet>',
  standalone: false,
})
export class AppComponent {} // root(glocal scope) component - anti - pattern

// root component - shoudnt try to directly wrangle with template and services(data)
