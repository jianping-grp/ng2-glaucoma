import {Component, OnInit} from "@angular/core";
import {Compound} from "../../../models/compound"
import {CompoundsListDataSource} from "../compounds-list.data.source";
import {PageMeta} from "../../../models/page-meta";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.css']
})

export class CompoundListComponent implements OnInit {
  compoundList: Compound[];
  compoundListDataSource: CompoundsListDataSource;
  pageMeta: PageMeta | null;
  displayedColumns: string[];
  includeParam =''; //todo  add includeParams

  constructor(private rest: RestService,
              private router: Router,
              private route: ActivatedRoute){
    this.displayedColumns = [
      'generic_name','cas', 'smiles', 'mol_weight', 'drugbank_id', 'links'
    ]
  }

  ngOnInit() {
    console.log('compound list init');
    this._getCompoundList()
  }

  goUniprotByCid(id: any) {
    this.router.navigate(['/uniprot-by-cid',id])
  }

  private _getCompoundList(page?, perPage?): void {
    this.rest.getCompoundList(this.includeParam,page, perPage)
       .subscribe(data => {
          this.compoundList = data['compounds'];
          this.compoundListDataSource = new CompoundsListDataSource(this.compoundList);
          this.pageMeta = data['meta'];
         },
         error => {},
         () =>{})
  }

  pageChange(event) {
    this._getCompoundList(event.pageIndex, event.pageSize)
  }

}
