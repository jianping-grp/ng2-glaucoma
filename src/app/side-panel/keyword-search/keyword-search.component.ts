import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-keyword-search',
  templateUrl: './keyword-search.component.html',
  styleUrls: ['./keyword-search.component.css']
})

export class KeywordSearchComponent implements OnInit {
  keyword: string;
  searchTypeList = [
    {value: 'product', viewValue: 'Drug', placeholder: 'Drug Name'},
    {value: 'uniprot', viewValue: 'Target', placeholder: 'Target Name'}
  ];
  selectedType = this.searchTypeList[0].value;
  constructor(private router: Router) {

  }

  getKeywordPlaceholder():string {
    return this.searchTypeList.find(el => el.value == this.selectedType).placeholder
  }

  submit() {
    if(this.selectedType === 'target') {
      this.router.navigate(['uniprot-by-name'],{queryParams: {keyword: this.keyword}})
    }
    else  {
      this.router.navigate(['product-by-name'], {queryParams: {keyword: this.keyword}})
    }
  }
 ngOnInit() {}
}
