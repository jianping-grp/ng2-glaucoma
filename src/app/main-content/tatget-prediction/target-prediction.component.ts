import {Component, OnInit} from "@angular/core";
import {RestService} from "../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TargetPrediction} from "../../models/target-prediction/target-prediction";
import {GlobalService} from "../../service/global/global.service";

@Component({
  templateUrl: './target-prediction.component.html',
  styleUrls: ['./target-prediction.component.css'],
})

export class TargetPredictionComponent implements OnInit {
  targets=[];
  targetPreditions=[];
  includeParam = '';
  loadingStatus: boolean;
  isEmpty= false;

  constructor(private rest: RestService,
              private globalService: GlobalService,
              private route: ActivatedRoute,
              private router: Router) {
   this.globalService.loadingStatus
     .subscribe( status => this.loadingStatus = status)
  }

  ngOnInit() {
    console.log('target-prediction init')
    this._postTargetPrediction();
  }

  goUniprotByChemblId(chemblId: any) {
    this.router.navigate(['/uniprot-by-chembl-id', chemblId])
  }

  private _postTargetPrediction():void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
      this.rest.postTargetPrediction(params.get('smiles'), this.includeParam)
        .subscribe(data => {
          console.log('total data:',data)
          //data include one or more targets
         for (let target in data) {
           console.log('data:',data);
           this.targets.push(target);
           console.log('init:',data[target]);
           console.log('test:',typeof data[target]['atompair-hashed']['p-value']);
           this.targetPreditions.push(data[target]);
         }

         //if targets is non-data, no display;
          if (this.targets.length === 0) {
            this.isEmpty = true;
          }
        },
          error => {},
          () => {})
      })
  }
}
