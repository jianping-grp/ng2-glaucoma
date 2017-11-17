import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule, MatSelectModule, MatSidenavModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {GlobalService} from "./service/global/global.service";

import {DatabaseBrowseComponent} from "./side-panel/database-browse/database-browse.component"
import {RestService} from "./service/rest/rest.service";
import {AppRoutingModule} from "./app-routing.module";

import {CompoundListComponent} from "./main-content/compound/compound-list/compound-list.component"
import {UniprotListComponent} from "./main-content/uniprot/uniprot-list/uniprot-list.component";
import {ProductListComponent} from "./main-content/product/product-list/product-list.component"
import {UniprotByCidComponent} from "./main-content/uniprot/uniprot-by-cid/uniprot-by-cid.component";
import {CompoundByUidComponent} from "./main-content/compound/compound-by-uid/compound-by-uid.component";
import {JsmeModule} from "./jsme/jsme.module";
import {KeywordSearchComponent} from "./side-panel/keyword-search/keyword-search.component";
import {ProductByNameComponent} from "./main-content/product/product-by-name/product-by-name.component";
import {StructureSearchComponent} from "./side-panel/structure-search/structure-search.component"
import {CompoundBySmilesComponent} from "./main-content/compound/compound-by-smiles/compound-by-smiles.component";
import {UniprotAllPathwayComponent} from "./main-content/uniprot-all-pathways/uniprot-all-pathway.component";
import {UniprotDbCompoundComponent} from "./main-content/uniprot-db-compound/uniprot-db-compound.component";

@NgModule({
  declarations: [
    AppComponent,
    DatabaseBrowseComponent,
    KeywordSearchComponent,
    StructureSearchComponent,
    CompoundListComponent,
    UniprotListComponent,
    ProductListComponent,
    UniprotByCidComponent,
    CompoundByUidComponent,
    ProductByNameComponent,
    CompoundBySmilesComponent,
    UniprotAllPathwayComponent,
    UniprotDbCompoundComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    JsmeModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
  ],
  providers: [GlobalService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
