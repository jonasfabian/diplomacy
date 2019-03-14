import {Component, OnInit} from '@angular/core';
import {ApiService, Country} from '../services/api.service';
import {CountryService, CurrentViewEnum} from '../services/country.service';
import {RelationService} from '../services/relation.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private countryService: CountryService,
    private relationService: RelationService
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
    this.relationService.displayCountryRelations(country);
    this.countryService.country = country;
    this.countryService.currentView = this.viewEnum.COUNTRYDETAIL;
  }

  editCountryDetails(country: Country): void {
    this.countryService.country = country;
    this.countryService.currentView = this.viewEnum.COUNTRYEDIT;
  }
}
