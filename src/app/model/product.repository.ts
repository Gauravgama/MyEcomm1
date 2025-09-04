import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class PRODUCTREPOSITORY{
    private categories: any[] = [];
    private products: Product[] = [];

    constructor(private datasource: RestDataSource) {
      this.datasource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data.map((p) => p.category)
      .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category:string):Product[]{
    return this.products.filter((product) => product.category == category); //auto fire when state changes
  }

  getCategories():any[]{
    return this.categories; //auto fire when state changes
  }
}
