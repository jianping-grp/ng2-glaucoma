import { Compound} from "./compound"

export class Uniprot {
  constructor(
    public id: any,
    public entry: string,
    public entryname: string,
    public compounds: Compound[],
  ){}
}
