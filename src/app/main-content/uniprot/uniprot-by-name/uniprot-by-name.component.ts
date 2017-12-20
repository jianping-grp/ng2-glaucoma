import {Component, OnInit} from "@angular/core";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Uniprot} from "../../../models/uniprot";
import {UniprotListDataSource} from "../uniprot-list.data.source";
import {PageMeta} from "../../../models/page-meta";


@Component({
  templateUrl: './uniprot-by-name.component.html',
  styleUrls: ['./uniprot-by-name.component.css']
})

export class UniprotByNameComponent implements OnInit {
  uniprots: Uniprot[];
  uniprotByNameDataSource: UniprotListDataSource;
  includeParam = '&exclude[]=compounds.*&include[]=compounds.id'; //use for count compounds
  displayedColumns: string[];
  pageMeta: PageMeta;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private router: Router) {
    this.displayedColumns = ['uniprot_chembl_id',  'entry', 'entryname', 'uniprot_type',
      'kegg_name',  'uniprot_all_pathway', 'compounds']
  }


  ngOnInit() {
    console.log('uniprot by name init');
    this._getUniprotByName()
  }

  private _getUniprotByName(page?, perPage?): void {
    this.route.queryParamMap
      .subscribe( (params: ParamMap) => {
        if (params.has('keyword')) {
          let keyword = params.get('keyword');
          console.log(`retrieve uniprot by keyword: ${keyword}`);
          this.rest.getUniprotByName(keyword, this.includeParam, page, perPage)
            .subscribe( data => {
              this.uniprots = data['uniprot_infos'];
              this.uniprotByNameDataSource = new UniprotListDataSource(this.uniprots);
              this.pageMeta = data['meta'];
            },
              error => {},
          () => {},
            )
        }
      })
  }

  pageChange(event) {
    this._getUniprotByName(event.pageIndex, event.pageSize)
  }
}
