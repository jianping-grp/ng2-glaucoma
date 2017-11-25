import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {GlobalService} from "../global/global.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestService {
  private REST_HOST = 'http://localhost:8000/api';
  private PER_PAGE = 10;

  constructor(private http: HttpClient,
              private globalService: GlobalService) {

  }

  private fetchData(url: string, includeParams=''): any {
    this.globalService.setLoading(true);
    return this.http.get(`${this.REST_HOST}/${url}/${includeParams}`)
      .finally(() => this.globalService.setLoading(false))
  }

  private fetchDataList(url: string, includeParam='', page=0, perPage=this.PER_PAGE){
    page = +(page) + 1;
    this.globalService.setLoading(true);
    return this.http.get(`${this.REST_HOST}/${url}${includeParam}&page=${page}&per_page=${perPage}`)
      .finally(() => this.globalService.setLoading(false)); //stop loading when finished or an error occur
  }

  // private searchDataList(url: string, includeParam='', name: string, page=0, perPage=this.PER_PAGE) {
  //   page = +(page) + 1;
  //   this.globalService.setLoading(true);
  //   return this.http.get(`${this.REST_HOST}/${url}/${includeParam}&?{${name}.icontains}=Act&page=${page}&per_page=${perPage}`)
  //     .finally(() => this.globalService.setLoading(false));
  // }

  //search Structure by simialiarity
  postCompoundByStructure(smiles: string, similarity: number,includeParam='', page=0, perPage=this.PER_PAGE): Observable<any>{
    page= +(page) +1;
    const body= {smiles: smiles, similarity: similarity, substructure_search: 0};
    this.globalService.setLoading(true);
    console.log(body);
    return this.http.post(`${this.REST_HOST}/compounds/search/${includeParam}&page=${page}&per_page=${perPage}`, body)
      .finally(() => this.globalService.setLoading(false))
      .catch(this.handleError)
  }

  // search Substructure
  postCompoundBySubstructure(smiles:string,includeParam='', page=0, perPage=this.PER_PAGE): Observable<any> {
    page = +(page) + 1;
    const body={smiles: smiles, similarity: 0, substructure_search: 1};
    this.globalService.setLoading(true);
    console.log(body)
    return this.http.post(`${this.REST_HOST}/compounds/search/${includeParam}&page=${page}&per_page=${perPage}`, body)
      .finally(() => this.globalService.setLoading(false))
      .catch(this.handleError);
  }

  //target prediction
  postTargetPrediction(smiles: string, includeParam=''): Observable<any> {
    const body = {smiles: 'CC1CCCN(C1C)C(=O)c2csc(Nc3ccc(C)cc3)n2'};
    this.globalService.setLoading(true);
    return this.http.post(`${this.REST_HOST}/target-prediction/?${includeParam}`, body)
      .finally(() => this.globalService.setLoading(false))
      .catch(this.handleError);
  }

  getCompoundList(includeParam,page?, perPage?): Observable<any> {
    return this.fetchDataList(`compounds/`,includeParam, page, perPage)
      .catch(this.handleError);
  }

  getUniprotList(includeParam ,page?, perPage?): Observable<any> {
    return this.fetchDataList(`uniprot-info/`,includeParam, page, perPage)
      .catch(this.handleError)
  }

  getProductList(includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`products/?include[]=compound.*`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get uniprot  by compounds id
  getUniprotByCid(id: any, includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`uniprot-info/?filter{compounds.id}=${id}`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get compounds by uniprot id
  getCompoundsByUid(id: any, includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`compounds/?filter{uniprotinfo_set.id}=${id}`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get uniprot by uniprot_chembl_id
  getUniprotByChemblId(chemblId: any, includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`uniprot-info/?filter{uniprot_chembl_id}=${chemblId}`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get uniprot-db-compound by uniprot id
  getUniprotDbCompoundByUid(id: any, includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`uniprot-compound/?filter{uniprot_name.id}=${id}`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get uniprot-all-pathways by uniprot id
  getUniprotAllPathwaysByUid(id: any, includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`uniprot-pathway/?filter{uniprot_name.id}=${id}`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get Products by product name
  getProductsByName(name: string, includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`products/?filter{name.icontains}=${name}&include[]=compound.*`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get Uniprot by name
  getUniprotByName(name: string, includeParam, page?, perPage?): Observable<any> {
    return this.fetchDataList(`uniprot-info/?filter{uniprot_type.icontains}=${name}`, includeParam, page, perPage)
      .catch(this.handleError)
  }

  //get Compound detail by compound id
  getCompoundDetail(id: any, includeParam): Observable<any> {
    return this.fetchData(`compounds/${id}`, includeParam)
      .catch(this.handleError)
  }

  //get Uniprot detail by uniprot id
  getUniprotDetail(id: any, includeParam): Observable<any> {
    return this.fetchData(`uniprot-info/${id}`, includeParam)
      .catch(this.handleError)
  }

  getCompoundByid(id: any, includeParams): Observable<any> {
    return this.fetchData(`compounds/${id}`, includeParams)
      .catch(this.handleError)
  }

  // getUniportByCid(id: any, includeParams): Observable<any> {
  //   return this.fetchData(`compounds/${id}`, includeParams)
  //     .catch(this.handleError)
  // }


  private handleError(error: HttpErrorResponse | any ) {
    let errMsg: string;
      if(error instanceof HttpErrorResponse) {
      errMsg = `${error.status} - ${error.statusText || ''} ${error}`;
    }else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.log(errMsg);
    return Promise.reject(errMsg);
}
}

