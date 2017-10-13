import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {RestService} from "../../service/rest/rest.service";


@Component({
  selector: 'app-structure-search',
  templateUrl: './structure-search.component.html',
  styleUrls: ['./structure-search.component.css']
})

export class StructureSearchComponent implements OnInit {
  structureSearchTypeList = [
    {value: 'structure', viewValue: 'Structure', placeHolder: 'search structure'},
    {value: 'substructure', viewValue: 'Substructure', placeHolder: 'search substructure'}
  ];
  selectedStructureType = this.structureSearchTypeList[0].value;

  constructor(private router: Router,
              private rest: RestService,
              ) { }

  ngOnInit() { }

  getSearchTypePlaceholder(): string{
    return this.structureSearchTypeList.find(el => el.value === this.selectedStructureType).placeHolder
  }

  submit(smiles: string) {
    console.log(smiles);
    // selectedStructureType is 'structure' denotes structure search while 'substructure' denotes substructure search
    this.router.navigate(['/compound-by-smiles',smiles], {queryParams: {selectedStructureType: this.selectedStructureType}})
  }

}
