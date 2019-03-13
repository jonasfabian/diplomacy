import {Component, OnInit} from '@angular/core';
import {ApiService, Country} from '../api.service';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private countryService: CountryService
  ) {
  }

  countryArray: Array<Country> = [];

  ngOnInit(): void {
    this.apiService.getCountries().subscribe(value => {
      this.countryArray = value;
    });
  }

  createCountry(): void {
    this.apiService.createCountry(new Country(-1, 'Austria', 'Kaiser'));
  }

  updateCountry(): void {
    this.apiService.updateCountry(new Country(1, 'Germany', 'Currywurst'));
  }

  giveCountry(country: Country): void {
    this.countryService.country = country;
  }

}
