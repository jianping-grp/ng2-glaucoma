import {Component, OnInit} from "@angular/core";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
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
  pageMata: PageMeta | null;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              ){
    this.displayedColumns = [
      'generic_name','cas', 'smiles', 'mol_weight', 'drugbank_id', 'links'
    ]
  }

  ngOnInit() {
    console.log('compound by smiles init')
    this._postCompound();

  }

  private _postCompound(): void {
    this.route.queryParamMap
      .subscribe((params: ParamMap) => {
        //fetch data base queryParams
        if (params.has('structureSearch')) {
          if (params.get('structureSearch') === 'structure') {
            this.route.params
              .switchMap((params: Params) => this.rest.postCompoundByStructure(params['smiles']))
              .subscribe(data => {
                  this.compound = data['compounds'];
                  this.compoundDataSource = new CompoundsListDataSource(this.compound);
                  this.pageMata = data['meta']
                },
                error => {
                },
                () => {
                })
          }else if(params.get('structureSearch') === 'subStructure') {
            this.route.params
              .switchMap((params: Params) => this.rest.postCompoundBySubstructure(params['smiles']))
              .subscribe(data => {
                  this.compound = data['compounds'];
                  this.compoundDataSource = new CompoundsListDataSource(this.compound);
                  this.pageMata = data['meta'];
                },
                error => {
                },
                () => {
                })
          }
        }
      })
  }
}
