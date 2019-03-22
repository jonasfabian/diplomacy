export class Manpower {
  manpowerId: number;
  manpowerType: number;
  manpowerNumber: number;
  countryId: number;

  constructor(manpowerId: number, manpowerType: number, manpowerNumber: number, countryId: number) {
    this.manpowerId = manpowerId;
    this.manpowerType = manpowerType;
    this.manpowerNumber = manpowerNumber;
    this.countryId = countryId;
  }
}
