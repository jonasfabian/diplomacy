export class ModifiersForCountry {
  countryId: number;
  countryName: string;
  manpowerId: number;
  manpowerType: number;
  manpowerNumber: number;
  modifierId: number;
  modifierName: string;
  modifierValue: number;

  constructor(countryId: number, countryName: string, manpowerId: number, manpowerType: number, manpowerNumber: number,
              modifierId: number, modifierName: string, modifierValue: number) {
    this.countryId = countryId;
    this.countryName = countryName;
    this.manpowerId = manpowerId;
    this.manpowerType = manpowerType;
    this.manpowerNumber = manpowerNumber;
    this.modifierId = modifierId;
    this.modifierName = modifierName;
    this.modifierValue = modifierValue;
  }
}
