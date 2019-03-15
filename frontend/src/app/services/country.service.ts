import {Injectable} from '@angular/core';
import {ApiService, Country} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private apiService: ApiService
  ) {
  }

  country: Country = new Country(-1, 'No Country Name yet', 'No details yet', 'None');
  currentView: any = CurrentCountryViewEnum.COUNTRYDETAIL;
  countryArray: Array<Country> = [];

  getCountries(): void {
    this.apiService.getCountries().subscribe(value => {
      this.countryArray = value;
    });
  }

  createCountry(country: Country): void {
    this.apiService.createCountry(country).subscribe(val => {
      this.getCountries();
    });
  }

  updateCountry(country: Country): void {
    this.apiService.updateCountry(country).subscribe(val => {
      this.getCountries();
    });
  }

  getFlag(s: String): String {
    return (s) ? 'flag-icon-' + s.toLowerCase() : '';
  }
}

export enum CurrentCountryViewEnum {
  COUNTRYDETAIL,
  COUNTRYEDIT,
  COUNTRYCREATE
}
