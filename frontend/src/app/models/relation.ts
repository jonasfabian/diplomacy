export class Relation {
  id: number;
  countryId1: number;
  countryId2: number;
  relationType: number;

  constructor(id: number, countryId1: number, countryId2: number, relationType: number) {
    this.id = id;
    this.countryId1 = countryId1;
    this.countryId2 = countryId2;
    this.relationType = relationType;
  }
}
