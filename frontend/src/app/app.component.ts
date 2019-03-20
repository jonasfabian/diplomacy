import { Component } from '@angular/core';
import {CountryService, CurrentCountryViewEnum} from './services/country.service';
import {Country} from './models/country';
import {RelationService} from './services/relation.service';
import {CombatService} from './services/combat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public countryService: CountryService,
    private relationService: RelationService,
    private combatService: CombatService,
  ) {
  }

  viewCountryEnum: any = CurrentCountryViewEnum;

  showCountryDetails(country: Country): void {
    this.relationService.displayCountryRelations(country);
    this.countryService.country = country;
    this.relationService.getRelationsNamed(this.countryService.country.id);
    this.countryService.calculateNumberOfCurrencyUsers();
    this.countryService.getManpower(country.id);
    this.combatService.getModifiersForCountry();
    this.countryService.currentView = this.viewCountryEnum.COUNTRYDETAIL;
  }
}
