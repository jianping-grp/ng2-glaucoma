import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-database-browse',
  templateUrl:'./database-browse.component.html',
  styleUrls: ['./database-browse.component.css']
})

export class DatabaseBrowseComponent implements OnInit {
  dataType= '';
  dataTypeList = [
    {value: 'compounds', viewValue: 'Compounds', placeholder: 'compounds targeting glaucoma related proteins'},
    {value: 'uniprots', viewValue: 'Targets', placeholder: 'proteins related to glaucoma'},
    {value: 'products', viewValue: 'Drugs', placeholder: 'drugs for glaucoma treatment'}
  ];
  selectedType = this.dataTypeList[0].value;

  constructor(private router: Router) {
  }

  getDataTypePlaceholder(): string {
    return this.dataTypeList.find(el => el.value == this.selectedType).placeholder;
  }

  submit() {
    if (this.selectedType === 'compounds') {
      this.router.navigate(['/compound-list'])
    }
    else if(this.selectedType === 'uniprots') {
      this.router.navigate(['/uniprot-list'])
    }
    else if(this.selectedType === 'products'){
      this.router.navigate(['./product-list'])
    }
  }

  ngOnInit() {

  }
}
