import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Country} from '../models/country';
import {Currency} from '../models/currency';
import {Manpower} from '../models/manpower';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private apiService: ApiService
  ) {
  }

  country: Country = new Country(-1, 'No Country Name yet', 'No details yet', 'None', 0, 0);
  currentView: any = CurrentCountryViewEnum.COUNTRYDETAIL;
  countryArray: Array<Country> = [];
  currencyArray: Array<Currency> = [];
  manpowerArray: Array<Manpower> = [];
  currArray: Array<Currency> = [];
  numberOfCurrencyUser = 0;
  currency = '';

  getCountries(): void {
    this.apiService.getCountries().subscribe(value => {
      this.countryArray = value;
    });
  }

  getManpower(id: number): void {
    this.apiService.getManpower(id).subscribe(value => {
      this.manpowerArray = value;
    });
  }

  getCurrencies(): void {
    this.apiService.getCurrencies().subscribe(val => {
      this.currencyArray = val;
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

  calculateNumberOfCurrencyUsers() {
    this.apiService.getCountryByCurrency(this.country.currencyId).subscribe(val => {
      this.currArray = val;
      this.numberOfCurrencyUser = val.length;
      val.map(res => {
        this.currency = res.currencyName;
      });
    });
  }
}

export enum CurrentCountryViewEnum {
  COUNTRYDETAIL,
  COUNTRYEDIT,
  COUNTRYCREATE
}
