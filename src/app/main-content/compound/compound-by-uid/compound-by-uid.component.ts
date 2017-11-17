import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Uniprot} from "../../../models/uniprot";
import {Compound} from "../../../models/compound";
import {CompoundDetailDataSource} from "../compound-detail.data.source";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {RestService} from "../../../service/rest/rest.service";
import 'rxjs/add/operator/switchMap';
import {CompoundsListDataSource} from "../compounds-list.data.source";
import {PageMeta} from "../../../models/page-meta";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {UniprotDbCompound} from "../../../models/uniprot-db-compound";

@Component({
  templateUrl: './compound-by-uid.component.html',
  styleUrls: ['./compound-by-uid.component.css']
})

export class CompoundByUidComponent implements OnInit {
  uniprot: Uniprot;
  compounds: Compound[];
  uniprotDbCompounds: UniprotDbCompound[];
  compoundByUidDataSource: CompoundsListDataSource;
  includeParam = '';
  displayedColumns: string[];
  pageMeta:PageMeta | null;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private router: Router) {
    this.displayedColumns = [
      'generic_name', 'formula', 'mol_weight', 'cas', 'alogp', 'hba', 'hbd',
      'rtb', 'psa', 'drug_status', 'drugbank_id', 'uniprotinfo_set'
    ]
  }

  ngOnInit() {
    console.log('compound detail by idlist');
    this._getData(); //inclued compounds list and uniprot detail

  }

  goUniprotByCid(id: any) {
    this.router.navigate(['/uniprot-by-cid', id])
  }

  goUniprotAllPathwayByUid(id: any) {
    this.router.navigate(['/uniprot-all-pathway', id])
  }

  private _getData(page?, perPage?): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = params.get('id');
        // fetch compounds data
        this.rest.getCompoundsByUid(id, this.includeParam, page, perPage)
          .subscribe(data => {
            this.compounds = data['compounds'];
            this.compoundByUidDataSource = new CompoundsListDataSource(this.compounds);
            this.pageMeta = data['meta'];
          },
            error => {},
            ()=> {},
            );
        // fetch uniprot detail
       this.rest.getUniprotDetail(id, this.includeParam)
         .subscribe(
           data => {
             this.uniprot= data['uniprot_info']
           });

       //todo delete
        // this.rest.getUniprotDbCompoundByUid(id, this.includeParam, 1, 999999)  //fetch all uniprot-db-compound
        //   .subscribe(data => {
        //     this.uniprotDbCompounds = data['uniprot_db_compounds'];
        //   })
      })
  }

  pageChange(event) {
    this._getData(event.pageIndex, event.pageSize)
  }

}

// private _getUniprotDetail():void {
//   this.route.params
//   .switchMap((params: Params) =>
//     this.rest.getUniprotDetail(params['id'], this.includeParams))
//   .subscribe(data => {
//     this.uniprot = data['uniprot_info']
//   })
// }

// idObj: any;
// idString: string;
// idList: any[];
// compound: Compound;
// compounds: Compound[];
// compoundDetailByUidDataSource : CompoundDetailDataSource;
// includeParams= '';
// displayedColumns: string[];

  // private _getCompoundByid():void {
  //   this.idString = this.route.snapshot.params.IdList;
  //   this.idList = this.idString.split(',');
  //
  //   console.log(this.idString, this.idList)
  //
  //   for (let id of this.idList) {
  //     this.rest.getCompoundByid(id, this.includeParams)
  //       .subscribe(data => {
  //         this.compound = data['compound'];
  //         this.compounds.push(this.compound);
  //         this.compoundDetailByUidDataSource = new CompoundDetailDataSource(this.compounds);
  //       })
  //   }
  // }





