import {Uniprot} from "./uniprot";

export class Compound {
  constructor(
    public id: any,
    public generic_name: string,
    public IUPAC_name: string,
    public image: string,
    public smiles: string,
    public mol_weight: number,
    public cas: string,
    public cid: string,
    public drugbank_id: string,
    public links: object,
    public uniprotinfo_set: Uniprot[],
  ){
}

}
