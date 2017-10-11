import {RouterModule, Routes} from "@angular/router";
import {CompoundListComponent} from "./main-content/compound/compound-list/compound-list.component"
import {NgModule} from "@angular/core";
import {UniprotListComponent} from "./main-content/uniprot/uniprot-list/uniprot-list.component";
import {ProductListComponent} from "./main-content/product/product-list/product-list.component";
import {UniprotDetailComponent} from "./main-content/uniprot/uniprot-detail/uniprot-detail.component";
import {CompoundDetailByUidComponent} from "./main-content/compound/compound-detail-byUid/compound-detail-by-uid.component";
import {ProductByNameComponent} from "./main-content/product/product-by-name/product-by-name.component";
import {CompoundBySmilesComponent} from "./main-content/compound/compound-by-smiles/compound-by-smiles.component"

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'compound-list', pathMatch: 'full',
  // },
  {
    path: 'compound-list', component: CompoundListComponent,
  },
  {
    path: 'uniprot-list', component: UniprotListComponent,
  },
  {
    path: 'product-list', component: ProductListComponent,
  },
  {
    path: 'uniprot-detail/:id', component: UniprotDetailComponent,
  },
  {
    path: 'compound-detail-uid', component: CompoundDetailByUidComponent,
  },
  {
    path: 'product-by-name', component: ProductByNameComponent,
  },
  {
    path: 'compound-by-smiles/:smiles', component: CompoundBySmilesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
