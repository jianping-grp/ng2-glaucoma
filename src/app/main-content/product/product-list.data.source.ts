import {DataSource} from "@angular/cdk/collections";
import {Products} from "../../models/products";
import {Observable} from "rxjs/Observable";

export class ProductListDataSource extends DataSource<Products> {
  private _productList: Products[];
  constructor(productList) {
    super();
    this._productList = productList
  }

  connect(): Observable<Products[]> {
    return Observable.of(this._productList)
  }

  disconnect() {

  }
}
