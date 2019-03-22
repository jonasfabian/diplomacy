import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CountryService, CurrentCountryViewEnum} from '../../services/country.service';
import {CurrentReleationViewEnum, RelationService} from '../../services/relation.service';
import {Country} from '../../models/country';
import {CombatService} from '../../services/combat.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private countryService: CountryService,
    private relationService: RelationService,
    private combatService: CombatService
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
      this.countryService.getCountries();
    });
  }

  showCountryDetails(country: Country): void {
    this.countryService.getCountries();
    this.countryService.country = country;
    this.countryService.getStats();
    this.relationService.displayCountryRelations(country);
    this.countryService.getManpower(country.id);
    this.relationService.getRelationsNamed(this.countryService.country.id);
    this.countryService.calculateNumberOfCurrencyUsers();
    this.combatService.getModifiersForCountry();
    this.combatService.getModifiers();
    this.combatService.fillAvailableCountriesArray();
    this.countryService.currentView = this.viewCountryEnum.COUNTRYDETAIL;
  }

  editCountryDetails(country: Country): void {
    this.countryService.country = country;
    this.countryService.currentView = this.viewCountryEnum.COUNTRYEDIT;
  }
}
