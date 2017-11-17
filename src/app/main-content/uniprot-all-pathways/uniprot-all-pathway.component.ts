import {Component, OnInit} from "@angular/core";
import {RestService} from "../../service/rest/rest.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UniprotAllPathway} from "../../models/uniprot-all-pathway";
import {PageMeta} from "../../models/page-meta";

@Component({
  templateUrl: 'uniprot-all-pathway.component.html',
  styleUrls: ['uniprot-all-pathway.component.css']
})

export class UniprotAllPathwayComponent implements OnInit {
  uniprotAllPathways: UniprotAllPathway[];
  includeParam = '';
  pageMeta : PageMeta | null;
  loading = false;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    console.log('uniprot-all-pathways init');
    this._getUniprotAllPathway()
  }

  private _getUniprotAllPathway(page?, perPage?): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
      this.rest.getUniprotAllPathwaysByUid(params.get('id'), this.includeParam, 1, 999999)
        .subscribe( data => {
          this.uniprotAllPathways = data['uniprot_all_pathways'];
          this.pageMeta = data['meta'];

          //if uniprotAllPathways is null, no display
          if (this.uniprotAllPathways.length === 0) {
            this.loading = true;
          }
        },
          error => {},
        () => {},
        )
      })
  }


}


