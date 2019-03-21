import { Injectable } from '@angular/core';
import {ModifiersForCountry} from '../models/modifiers-for-country';
import {CountryService} from './country.service';
import {ApiService} from './api.service';
import {Modifier} from '../models/modifier';
import {Country} from '../models/country';

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
  availableCountriesArray: Array<Country> = [];
  selectedCountryToAttack: Country = new Country(-1, '', '', '', 0, 0);

  getModifiersForCountry() {
    this.countryStatsArray = [];
    this.apiService.getModifiersForCountry(this.countryService.country.id).subscribe(val => {
      this.countryStatsArray = val;
    });
  }

  getModifiers() {
    this.apiService.getModifier().subscribe(val => {
      this.modifierArray = val;
    });
  }

  fillAvailableCountriesArray() {
    this.availableCountriesArray = [];
    this.countryService.countryArray.map(c => {
      if (this.countryService.country.id !== c.id) {
        this.availableCountriesArray.push(c);
      }
    });
  }

  updateManpower(country: Country): void {
    this.apiService.updateManpower(country).subscribe(val => {
    });
  }
}
