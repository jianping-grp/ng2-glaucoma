import {Component, OnInit} from "@angular/core";
import {Uniprot} from "../../../models/uniprot";
import {PageMeta} from "../../../models/page-meta";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UniprotListDataSource} from "../uniprot-list.data.source";
import {Compound} from "../../../models/compound";

@Component({
  templateUrl: './uniprot-list.component.html',
  styleUrls: ['./uniprot-list.component.css'],
})

export class UniprotListComponent implements OnInit {
  uniprotList: Uniprot[];
  uniprotListDataSource: UniprotListDataSource;
  pageMeta: PageMeta | null;
  displayedColumns: string[];
  includeParam='?exclude[]=compounds.*&include[]=compounds.id&';

  constructor(private rest: RestService,
              private router: Router,
              private route: ActivatedRoute) {
    this.displayedColumns = ['entry', 'entryname', 'compounds']
  }

  ngOnInit() {
    console.log('uniprot list init');
    this._getUniprotList();
  }

  goCompoundDetail(compounds: Compound[]) {
    let idList = [];
    //compounds only include compound id list
    for (let compound of compounds){
      idList.push(compound.id)
    }
    this.router.navigate(['/compound-detail-uid', {IdList: idList}])
  }

  private _getUniprotList(page?, perPage?): void {
    this.rest.getUniprotList(this.includeParam, page, perPage)
      .subscribe(data =>{
        this.uniprotList = data['uniprot_infos'];
        this.uniprotListDataSource =new UniprotListDataSource(this.uniprotList);
        this.pageMeta = data['meta'];
        },
        error => {},
        () => {});

  }

  pageChange(event) {
    this._getUniprotList(event.pageIndex, event.pageSize)
  }

}
