export class RelationNamed {
  relationId: number;
  countryName1: String;
  countryName2: String;
  relationType: number;

  constructor(id: number, countryName1: String, countryName2: String, relationType: number) {
    this.relationId = id;
    this.countryName1 = countryName1;
    this.countryName2 = countryName2;
    this.relationType = relationType;
  }
}
