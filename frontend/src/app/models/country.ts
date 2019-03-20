export class Country {
  id: number;
  name: string;
  details: string;
  countryCode: string;
  currencyId: number;
  manpowerId: number;

  constructor(id: number, name: string, details: string, countryCode: string, currencyId: number, manpowerId: number) {
    this.id = id;
    this.name = name;
    this.details = details;
    this.countryCode = countryCode;
    this.currencyId = currencyId;
    this.manpowerId = manpowerId;
  }
}
