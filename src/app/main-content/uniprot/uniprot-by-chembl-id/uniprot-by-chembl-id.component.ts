import {Component, OnInit} from "@angular/core";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Uniprot} from "../../../models/uniprot";
import {UniprotListDataSource} from "../uniprot-list.data.source";
import {PageMeta} from "../../../models/page-meta";

@Component({
  templateUrl: './uniprot-by-chembl-id.component.html',
  styleUrls: ['./uniprot-by-chembl-id.component.css']
})

export class UniprotByChemblIdComponent implements OnInit {
  uniprots: Uniprot[];
  uniprotByChemblIdDataSource: UniprotListDataSource;
  includeParam = '&exclude[]=compounds.*&include[]=compounds.id'; //use for count compounds
  displayedColumns: string[];
  meta: PageMeta;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private router: Router)  { this.displayedColumns = ['uniprot_chembl_id',  'entry', 'entryname', 'uniprot_type',
    'kegg_name', 'uniprot_all_pathway', 'compounds'];
}

  ngOnInit() {
    console.log('uniprot by chembl id init');
    this._getUniprotByChemblId();
  }

  goCompoundByUid(id: any) {
    this.router.navigate(['/compound-by-uid', id])
  }

  goUniprotByCid(id: any) {
    this.router.navigate(['/uniprot-by-cid', id])
  }

  goUniprotAllPathwayByUid(id: any) {
    this.router.navigate(['/uniprot-all-pathway', id])
  }

  private _getUniprotByChemblId(page?, perPage?):void {
    this.route.paramMap
      .subscribe( (params: ParamMap) => {
        this.rest.getUniprotByChemblId(params.get('chemblId'), this.includeParam, page, perPage)
          .subscribe(data => {
            this.uniprots = data['uniprot_infos'];
            this.uniprotByChemblIdDataSource = new UniprotListDataSource(this.uniprots);
            this.meta = data['meta'];
          })
      })
  }

  pageChange(event) {
    this._getUniprotByChemblId(event.pageIndex, event.pageSize);
  }
}
