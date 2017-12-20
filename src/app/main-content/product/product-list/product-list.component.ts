import {Component, OnInit} from "@angular/core";
import {Products} from "../../../models/products";
import {PageMeta} from "../../../models/page-meta";
import {ActivatedRoute, Router} from "@angular/router";
import {RestService} from "../../../service/rest/rest.service";
import {ProductListDataSource} from "../product-list.data.source"

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  productList: Products[];
  productListDataSource: ProductListDataSource;
  pageMeta: PageMeta | null ;
  displayedColumns: string[];
  includeParam = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private rest: RestService,
              ) {
    this.displayedColumns = [
      'generic_name', 'name', 'formula', 'mol_weight', 'alogp', 'hba', 'hbd',
      'rtb', 'psa', 'drug_status', 'drugbank_id', 'uniprotinfo_set'
    ]
  }

  ngOnInit() {
    console.log('product list init');
    this._getProductList();
  }

  goUniprotByCid(id: any) {
    this.router.navigate(['/uniprot-by-cid',id])
  }

  private _getProductList(page?, perPage?): void {
    this.rest.getProductList(this.includeParam, page, perPage)
      .subscribe( data => {
        this.productList = data['products'];
        this.productListDataSource = new ProductListDataSource(this.productList);
        this.pageMeta = data['meta'];
      })
  }

  pageChange(event) {
    this._getProductList(event.pageIndex, event.pageSize)
  }

}
