import {DataSource} from "@angular/cdk/collections";
import {Compound} from "../../models/compound";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

export class CompoundsListDataSource extends DataSource<Compound> {
  private _compoundList: Compound[];
  constructor(compoundList) {
    super();
    this._compoundList = compoundList;
  }
  connect(): Observable<Compound[]> {
    return Observable.of(this._compoundList)
  }

  disconnect() {

  }
}
