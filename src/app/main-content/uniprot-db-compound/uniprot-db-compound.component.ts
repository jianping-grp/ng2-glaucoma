import {Component, OnInit} from "@angular/core";
import {RestService} from "../../service/rest/rest.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UniprotDbCompound} from "../../models/uniprot-db-compound";
import {PageMeta} from "../../models/page-meta";

@Component({
  templateUrl: './uniprot-db-compound.component.html',
  styleUrls: ['./uniprot-db-compound.component.css']
})

export class UniprotDbCompoundComponent implements OnInit {
  uniprotDbCompounds: UniprotDbCompound[];
  includeParam = '';
  pageMeta: PageMeta | null;
  loading=false;

  constructor(private rest: RestService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('uniprot-db-compound init');
    this._getUniprotDbCompound();
  }

  private _getUniprotDbCompound(page?, perPage?):void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
      this.rest.getUniprotDbCompoundByUid(params.get('id'), this.includeParam, 1, 99999)
        .subscribe(data => {
          this.uniprotDbCompounds = data['uniprot_db_compounds'];
          this.pageMeta = data['meta'];

          //if uniprotDbCompounds is null, no display
          if (this.uniprotDbCompounds.length === 0) {
            this.loading = true;
          }
        },
          error => {},
          () => {})
      })
  }

  // pageChange(event) {
  //   this._getUniprotDbCompound(event.pageIndex, event.pageSize);
  // }
}
