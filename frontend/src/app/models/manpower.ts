export class Manpower {
  manpowerId: number;
  manpowerInfantryNumber: number;
  manpowerCavalryNumber: number;
  manpowerArtilleryNumber: number;

  constructor(manpowerId: number, manpowerInfantryNumber: number, manpowerCavalryNumber: number, manpowerArtilleryNumber: number) {
    this.manpowerId = manpowerId;
    this.manpowerInfantryNumber = manpowerInfantryNumber;
    this.manpowerCavalryNumber = manpowerCavalryNumber;
    this.manpowerArtilleryNumber = manpowerArtilleryNumber;
  }
}
