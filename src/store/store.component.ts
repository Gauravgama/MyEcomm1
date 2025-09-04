import { Component } from '@angular/core';
import { PRODUCTREPOSITORY } from '../app/model/product.repository';
import { Product } from '../app/model/product.model';
import { Cart } from '../app/model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
  standalone:false
})

export class StoreComponent {
  public selectedCategory = 'undefined'; // 'Category 1'  ---- 'undefined'
  public productsPerPage = 4; // event driven
  public selectedPage = 1; // 2

  constructor( private repository: PRODUCTREPOSITORY, private cart:Cart, private router:Router) {

   }

   get products() {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories() {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePageSize(newSize: any) {
    this.productsPerPage = newSize.value;
  }

  get pageNumbers() {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product)
    this.router.navigateByUrl('/cart') //Hashbang
  }
}
