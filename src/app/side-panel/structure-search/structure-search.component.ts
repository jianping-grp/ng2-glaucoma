import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import construct = Reflect.construct;
import {RestService} from "../../service/rest/rest.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-structure-search',
  templateUrl: './structure-search.component.html',
  styleUrls: ['./structure-search.component.css']
})

export class StructureSearchComponent implements OnInit {
  structureSearch = '0'; // '0' denotes structure while '1' denotes substructure search
  structureSearchTypeList = [
    {value: 'structure', viewValue: 'Structure', placeHolder: 'search structure'},
    {value: 'substructure', viewValue: 'Substructure', placeHolder: 'search substructure'}
  ];
  selectedType = this.structureSearchTypeList[0].value;

  constructor(private router: Router,
              private rest: RestService,
              private http: HttpClient) { }

  ngOnInit() {
    this._postCompoundTest()
  }

  //todo delete
  private _postCompoundTest():void {
    this.rest.postCompoundByStructure('c1ccccc1')
      .subscribe(data => console.log(data))
  }

  getSearchTypePlaceholder(): string{
    return this.structureSearchTypeList.find(el => el.value === this.selectedType).placeHolder
  }

  // goCompound(smiles: string) {
  //
  // }


  submit(smiles: string) {
    console.log(smiles);
    this.router.navigate(['/compound-by-smiles',smiles], {queryParams: {structureSearch: this.structureSearch}})
  }

}
