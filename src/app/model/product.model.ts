// structure
export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number
  ) {}
}


//let inst1=new Product() will not give error if used ? otherwise we need to provide the arguments
