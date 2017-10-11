import {Component, OnInit} from "@angular/core";
import {Uniprot} from "../../../models/uniprot";
import {PageMeta} from "../../../models/page-meta";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Compound} from "../../../models/compound";
import {UniprotListDataSource} from "../uniprot-list.data.source";


@Component({
  templateUrl: './uniprot-detail.component.html',
  styleUrls: ['./uniprot-detail.component.css'],
})

export class UniprotDetailComponent implements OnInit {
  id: any;
  compound: Compound;
  uniprotDetail: Uniprot[];
  uniprotDetailDataSource: UniprotListDataSource;
  displayedcolumns: string[];
  pageMeta: PageMeta | null;
  includeParams = '?include[]=uniprotinfo_set';

  constructor(private rest: RestService,
              private route: ActivatedRoute) {
    this.displayedcolumns = ['entry', 'entryname'];
  }

  ngOnInit() {
    console.log('uniprot detail init');
    // this._getUniprotByid();
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.rest.getUniportByCid(this.id, this.includeParams)
      .subscribe(data => {
          this.compound = data['compound'];
          this.uniprotDetail = this.compound.uniprotinfo_set;
          this.uniprotDetailDataSource = new UniprotListDataSource(this.uniprotDetail)
        },
        error => {},
        () => {});
  }

  // private _getUniprotByid(): void {
  //
  // }
// private _getUniprotByid():void {
//   this.route.params
//     .switchMap((params: Params) =>
//       this.rest.getUniportByCid(params['id'], this.includeParams))
//     .subscribe(data => {
//       this.compound = data['compound'];
//       this.uniprotDetail = this.compound.uniprotinfo_set;
//       this.uniprotDetailDataSource = new UniprotDetailDataSource(this.uniprotDetail)
//       },
//           error => {},
//           () => {});
// }

}

//   pageChange(event){
//     this._getUniprotByid(event.pageIndex, event.pageSize);
//   }
// }
