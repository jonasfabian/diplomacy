export class ModifiersForCountry {
  countryId: number;
  countryName: string;
  manpowerId: number;
  manpowerInfantryNumber: number;
  manpowerCavalryNumber: number;
  manpowerArtilleryNumber: number;
  modifierId: number;
  modifierName: string;
  modifierValue: number;

  constructor(countryId: number, countryName: string, manpowerId: number, manpowerInfantryNumber: number, manpowerCavalryNumber: number, manpowerArtilleryNumber: number, modifierId: number, modifierName: string, modifierValue: number) {
    this.countryId = countryId;
    this.countryName = countryName;
    this.manpowerId = manpowerId;
    this.manpowerInfantryNumber = manpowerInfantryNumber;
    this.manpowerCavalryNumber = manpowerCavalryNumber;
    this.manpowerArtilleryNumber = manpowerArtilleryNumber;
    this.modifierId = modifierId;
    this.modifierName = modifierName;
    this.modifierValue = modifierValue;
  }
}
