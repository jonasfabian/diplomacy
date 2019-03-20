export class Modifier {
  modifierId: number;
  modifierName: string;
  modifierValue: number;

  constructor(modifierId: number, modifierName: string, modifierValue: number) {
    this.modifierId = modifierId;
    this.modifierName = modifierName;
    this.modifierValue = modifierValue;
  }
}
