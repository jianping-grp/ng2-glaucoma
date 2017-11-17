import { Compound } from "./compound"

export class Uniprot {
  constructor(
    public id?: any,
    public entry?: string,
    public entryname?: string,
    public kegg_name?: string,
    public uniprot_chembl_id?: string,
    public uniprot_descriptor?: string,
    public kegg_url?: string,
    public uniprot_type?: string,
    public compounds?: Compound[],
  ){}
}
