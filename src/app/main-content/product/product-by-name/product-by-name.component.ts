import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {RestService} from "../../../service/rest/rest.service";
import {Products} from "../../../models/products";
import {PageMeta} from "../../../models/page-meta";
import {ProductListDataSource} from "../product-list.data.source";

@Component({
  templateUrl: './product-by-name.component.html',
  styleUrls: ['./product-by-name.component.css']
})

export class ProductByNameComponent implements OnInit {
  products: Products[] | null;
  displayedColumns: string[];
  productDataSource: ProductListDataSource;
  pageMeta: PageMeta | null;
  includeParam = '?include[]=compound.*'

  constructor(private route: ActivatedRoute,
              private rest: RestService) {
    this.displayedColumns = [
      'name','generic_name','cas', 'smiles', 'mol_weight', 'drugbank_id',
    ]
  }

  ngOnInit() {
    console.log('compound by name');
    this._getCompoundByName();
  }

  private _getCompoundByName(page?, perPage?): void {
   this.route.queryParamMap
     .subscribe((params: ParamMap) => {
     if (params.has('keyword')) {
       let keyword = params.get('keyword');
       console.log(`retrieve compound by keyword: ${keyword}`);
       this.rest.getCompoundsByName(this.includeParam, keyword, page, perPage)
         .subscribe(data => {
           this.products = data['products'];
           this.productDataSource = new ProductListDataSource(this.products);
           this.pageMeta = data['meta']
         },
       error => {},
           () => {})
     }
     })
  }

  pageChange(event) {
    this._getCompoundByName(event.pageIndex, event.pageSize)
  }
}
