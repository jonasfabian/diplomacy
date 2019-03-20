import { Injectable } from '@angular/core';
import {ModifiersForCountry} from '../models/modifiers-for-country';
import {CountryService} from './country.service';
import {ApiService} from './api.service';
import {Modifier} from '../models/modifier';

@Injectable({
  providedIn: 'root'
})
export class CombatService {

  constructor(
    private countryService: CountryService,
    private apiService: ApiService
  ) { }


  countryStatsArray: Array<ModifiersForCountry> = [];
  modifierArray: Array<Modifier> = [];

  getModifiersForCountry() {
    this.countryStatsArray = [];
    this.apiService.getModifiersForCountry(this.countryService.country.id).subscribe(val => {
      this.countryStatsArray = val;
    });
  }

  getModifiers() {
    this.apiService.getModifier().subscribe(val => {
      this.modifierArray = val;
      console.log(val);
    });
  }
}
