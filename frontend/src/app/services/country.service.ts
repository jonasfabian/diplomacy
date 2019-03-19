import {Injectable} from '@angular/core';
import {ApiService, Country, Currency} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private apiService: ApiService
  ) {
  }

  country: Country = new Country(-1, 'No Country Name yet', 'No details yet', 'None', 0);
  currentView: any = CurrentCountryViewEnum.COUNTRYDETAIL;
  countryArray: Array<Country> = [];
  currencyArray: Array<Currency> = [];
  currArray: Array<Currency> = [];
  numberOfCurrencyUser = 0;
  currency = '';

  getCountries(): void {
    this.apiService.getCountries().subscribe(value => {
      this.countryArray = value;
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

  showCurrencyUsers() {
    this.apiService.getCountryByCurrency(this.country.id).subscribe(val => {
      console.log(this.country.id);
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
