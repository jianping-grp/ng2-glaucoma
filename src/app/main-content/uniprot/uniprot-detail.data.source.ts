import {DataSource} from '@angular/cdk/collections';
import {Uniprot} from "../../models/uniprot"
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

export class UniprotDetailDataSource extends DataSource<Uniprot> {
  private _uniprotDetail: Uniprot[];
  constructor(uniprotDetail) {
    super();
    this._uniprotDetail = uniprotDetail;
  }
  connect(): Observable<Uniprot[]> {
    return Observable.of(this._uniprotDetail)
  }

  disconnect() {
  }
}
