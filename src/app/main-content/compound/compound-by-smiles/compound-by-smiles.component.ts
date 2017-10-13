import {Component, OnInit} from "@angular/core";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Compound} from "../../../models/compound";
import {CompoundsListDataSource} from "../compounds-list.data.source";
import {PageMeta} from "../../../models/page-meta";

@Component({
  templateUrl: './compound-by-smiles.component.html',
  styleUrls: ['./compound-by-smiles.component.css']
})

export class CompoundBySmilesComponent implements OnInit {
  compound: Compound[];
  compoundDataSource: CompoundsListDataSource;
  displayedColumns: string[];
  pageMeta: PageMeta | null;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private router: Router
              ){
    this.displayedColumns = [
      'generic_name','cas', 'smiles', 'mol_weight', 'drugbank_id', 'links'
    ]
  }

  ngOnInit() {
    console.log('compound by smiles init');
    this._postCompound();

  }

  goUniprotDetail(id: any) {
    this.router.navigate(['/uniprot-detail', id])
  }

  private _postCompound(page?, perPage?): void {
    this.route.queryParamMap
      .subscribe((params: ParamMap) => {
        //fetch data base queryParams
        // selectedStructureType is 'structure' denotes structure search while 'substructure' denotes substructure search
        if (params.has('selectedStructureType')) {
          if (params.get('selectedStructureType') === 'structure') {
            this.route.params
              .switchMap((params: Params) => this.rest.postCompoundByStructure(params['smiles'], page, perPage))
              .subscribe(data => {
                  this.compound = data['compounds'];
                  this.compoundDataSource = new CompoundsListDataSource(this.compound);
                  this.pageMeta = data['meta']
                },
                error => {
                },
                () => {
                })
          }else if(params.get('selectedStructureType') === 'substructure') {
            this.route.params
              .switchMap((params: Params) => this.rest.postCompoundBySubstructure(params['smiles'], page, perPage))
              .subscribe(data => {
                  this.compound = data['compounds'];
                  this.compoundDataSource = new CompoundsListDataSource(this.compound);
                  this.pageMeta = data['meta'];
                },
                error => {
                },
                () => {
                })
          }
        }
      })
  }

  pageChange(event) {
    this._postCompound(event.pageIndex, event.pageSize)
  }
}
