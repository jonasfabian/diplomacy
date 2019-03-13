import {Component, OnInit} from '@angular/core';
import {ApiService, Country} from '../api.service';
import {CountryService, CurrentViewEnum} from '../country.service';

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

  viewEnum: any = CurrentViewEnum;

  ngOnInit(): void {
    this.countryService.getCountries();
  }

  createCountry(): void {
    this.countryService.currentView = this.viewEnum.COUNTRYCREATE;
  }

  showCountryDetails(country: Country): void {
    this.countryService.country = country;
    this.countryService.currentView = this.viewEnum.COUNTRYDETAIL;
  }

  editCountryDetails(country: Country): void {
    this.countryService.country = country;
    this.countryService.currentView = this.viewEnum.COUNTRYEDIT;
  }
}
