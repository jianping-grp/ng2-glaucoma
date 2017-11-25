import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {RestService} from "../../service/rest/rest.service";


@Component({
  selector: 'app-structure-search',
  templateUrl: './structure-search.component.html',
  styleUrls: ['./structure-search.component.css']
})

export class StructureSearchComponent implements OnInit {
  similarityValueList = [100, '>=99%', '>=97%', '>=95%', '>=90%', '>=85%', '>=80%', '>=70%', '>=60%', '>=50%'];

  structureSearchTypeList = [
    {value: 'structure', viewValue: 'Similarity', placeHolder: 'Similarity number of 0.5-1'},
    {value: 'substructure', viewValue: 'Substructure', placeHolder: '1'}
  ];
  selectedStructureType = this.structureSearchTypeList[0].value;
  selectedSimilarityValue = this.similarityValueList[0];

  constructor(private router: Router,
              private rest: RestService,
              ) { }

  ngOnInit() { }

  getSearchTypePlaceholder(): string{
    return this.structureSearchTypeList.find(el => el.value === this.selectedStructureType).placeHolder
  }

  submit(smiles: string,) {
    console.log(smiles);
    let similarityValue;
    // transform selectedSimilarityValue to float;
    if(typeof this.selectedSimilarityValue === 'number' ) {
      similarityValue= 1;
    } else {
      similarityValue = parseInt(this.selectedSimilarityValue.slice(2)) /100;
    };
    console.log(typeof similarityValue);
    // selectedStructureType is 'structure' denotes structure search while 'substructure' denotes substructure search
    this.router.navigate(['/compound-by-smiles', smiles], {queryParams: {selectedStructureType: this.selectedStructureType,
      similarityValue: similarityValue}})
  }

  goTargetPredictionBySmiles(smiles: string) {
    this.router.navigate(['/target-prediction', smiles])
  }

}
