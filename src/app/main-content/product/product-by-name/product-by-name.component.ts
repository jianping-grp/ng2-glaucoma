import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
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
              private router: Router,
              private rest: RestService) {
    this.displayedColumns = [
      'generic_name', 'name', 'formula', 'mol_weight', 'cas', 'alogp', 'hba', 'hbd',
      'rtb', 'psa', 'drug_status', 'drugbank_id', 'uniprotinfo_set'
    ]
  }

  ngOnInit() {
    console.log('compound by name');
    this._getProductsByName();
  }

  goUniprotByCid(id: any) {
    this.router.navigate(['/uniprot-by-cid',id])
  }

  private _getProductsByName(page?, perPage?): void {
   this.route.queryParamMap
     .subscribe((params: ParamMap) => {
     if (params.has('keyword')) {
       let keyword = params.get('keyword');
       console.log(`retrieve compound by keyword: ${keyword}`);
       this.rest.getProductsByName(this.includeParam, keyword, page, perPage)
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
    this._getProductsByName(event.pageIndex, event.pageSize)
  }
}
