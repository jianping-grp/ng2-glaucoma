import {DataSource} from "@angular/cdk/collections";
import {Compound} from "../../models/compound";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

export class CompoundDetailDataSource extends DataSource<Compound> {
  private _compoundDetail: Compound[];
  constructor(compoundDetail) {
    super();
    this._compoundDetail = compoundDetail;
  }
  connect(): Observable<Compound[]> {
    return Observable.of(this._compoundDetail)
  }

  disconnect() {

  }
}
