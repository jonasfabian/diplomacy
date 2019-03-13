import { Injectable } from '@angular/core';
import {ApiService, Country} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private apiService: ApiService
  ) { }

  country: Country = new Country(-1, 'No Country Name yet', 'No details yet');
  currentView: any = CurrentViewEnum.COUNTRYDETAIL;
  countryArray: Array<Country> = [];

  getCountries(): void {
    this.apiService.getCountries().subscribe(value => {
      this.countryArray = value;
    });
  }
}

export enum CurrentViewEnum {
  COUNTRYDETAIL,
  COUNTRYEDIT,
  COUNTRYCREATE
}
