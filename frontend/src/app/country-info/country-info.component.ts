import {Component, OnInit} from '@angular/core';
import {ApiService, Country} from '../services/api.service';
import {CountryService, CurrentCountryViewEnum} from '../services/country.service';
import {CurrentReleationViewEnum, RelationService} from '../services/relation.service';

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

  viewCountryEnum: any = CurrentCountryViewEnum;
  viewRelationEnum: any = CurrentReleationViewEnum;

  ngOnInit(): void {
    this.countryService.getCountries();
  }

  createCountry(): void {
    this.countryService.currentView = this.viewCountryEnum.COUNTRYCREATE;
  }

  deleteCountry(id: number): void {
    this.apiService.deleteCountry(id).subscribe(val => {
    });
  }

  showCountryDetails(country: Country): void {
    this.relationService.displayCountryRelations(country);
    this.countryService.country = country;
    this.relationService.getRelationsNamed(this.countryService.country.id);
    this.countryService.calculateNumberOfCurrencyUsers();
    this.countryService.currentView = this.viewCountryEnum.COUNTRYDETAIL;
  }

  editCountryDetails(country: Country): void {
    this.countryService.country = country;
    this.countryService.currentView = this.viewCountryEnum.COUNTRYEDIT;
  }
}
