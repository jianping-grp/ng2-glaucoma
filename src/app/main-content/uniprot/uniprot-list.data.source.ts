import {DataSource} from "@angular/cdk/collections";
import {Uniprot} from "../../models/uniprot";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

export class UniprotListDataSource extends DataSource<Uniprot> {
  private _uniprotList: Uniprot[];
  constructor(uniprotList) {
    super();
    this._uniprotList = uniprotList
  }

  connect(): Observable<Uniprot[]> {
    return Observable.of(this._uniprotList)
  }

  disconnect() {

  }
}
