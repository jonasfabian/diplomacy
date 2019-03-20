import { Injectable } from '@angular/core';
import {ModifiersForCountry} from '../models/modifiers-for-country';
import {CountryService} from './country.service';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CombatService {

  constructor(
    private countryService: CountryService,
    private apiService: ApiService
  ) { }


  countryStatsArray: Array<ModifiersForCountry> = [];

  getModifiersForCountry() {
    this.countryStatsArray = [];
    this.apiService.getModifiersForCountry(this.countryService.country.id).subscribe(val => {
      this.countryStatsArray = val;
    });
  }
}
