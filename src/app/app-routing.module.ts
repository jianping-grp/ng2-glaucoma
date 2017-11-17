import {RouterModule, Routes} from "@angular/router";
import {CompoundListComponent} from "./main-content/compound/compound-list/compound-list.component"
import {NgModule} from "@angular/core";
import {UniprotListComponent} from "./main-content/uniprot/uniprot-list/uniprot-list.component";
import {ProductListComponent} from "./main-content/product/product-list/product-list.component";
import {UniprotByCidComponent} from "./main-content/uniprot/uniprot-by-cid/uniprot-by-cid.component";
import {CompoundByUidComponent} from "./main-content/compound/compound-by-uid/compound-by-uid.component";
import {ProductByNameComponent} from "./main-content/product/product-by-name/product-by-name.component";
import {CompoundBySmilesComponent} from "./main-content/compound/compound-by-smiles/compound-by-smiles.component"
import {UniprotAllPathwayComponent} from "./main-content/uniprot-all-pathways/uniprot-all-pathway.component";
import {UniprotDbCompoundComponent} from "./main-content/uniprot-db-compound/uniprot-db-compound.component";

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
    path: 'uniprot-by-cid/:id', component: UniprotByCidComponent,
  },
  {
    path: 'compound-by-uid/:id', component: CompoundByUidComponent,
  },
  {
    path: 'product-by-name', component: ProductByNameComponent,
  },
  {
    path: 'compound-by-smiles/:smiles', component: CompoundBySmilesComponent,
  },
  {
    path: 'uniprot-all-pathway/:id', component: UniprotAllPathwayComponent,
  },
  {
    path: 'uniprot-db-compound/:id', component: UniprotDbCompoundComponent,
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
