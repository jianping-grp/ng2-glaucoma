import {Component, OnInit} from "@angular/core";
import {Uniprot} from "../../../models/uniprot";
import {Compound} from "../../../models/compound";
import {CompoundDetailDataSource} from "../compound-detail.data.source";
import {ActivatedRoute, Params} from "@angular/router";
import {RestService} from "../../../service/rest/rest.service";
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './compound-detail-by-uid.component.html',
  styleUrls: ['./compound-detail-by-uid.component.css']
})

export class CompoundDetailByUidComponent implements OnInit {
  // idObj: any;
  idString: string;
  idList: any[];
  compound: Compound;
  compounds: Compound[]= [];
  compoundDetailByUidDataSource : CompoundDetailDataSource;
  includeParams: '';
  displayedColumns: string[];

  constructor(private rest: RestService,
              private route: ActivatedRoute) {
    this.displayedColumns = [
      'generic_name','cas', 'smiles', 'mol_weight', 'drugbank_id',
    ]
  }

  ngOnInit(){
    console.log('compound detail by idlist');
    this.idString = this.route.snapshot.params.IdList;
    this.idList = this.idString.split(',');

    console.log(this.idString, this.idList)

    for (let id of this.idList) {
      this.rest.getCompoundByid(id, this.includeParams)
        .subscribe(data => {
          this.compound = data['compound'];
          this.compounds.push(this.compound);
          this.compoundDetailByUidDataSource = new CompoundDetailDataSource(this.compounds);
        })
    }
    // this.compoundDetailByUidDataSource = new CompoundDetailDataSource(this.compounds);
  }


}


