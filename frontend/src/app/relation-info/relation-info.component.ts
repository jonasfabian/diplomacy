import {Component, OnInit} from '@angular/core';
import {ApiService, Country} from '../services/api.service';
import {CountryService, CurrentCountryViewEnum} from '../services/country.service';
import {CurrentReleationViewEnum, RelationService} from '../services/relation.service';

@Component({
  selector: 'app-relation-info',
  templateUrl: './relation-info.component.html',
  styleUrls: ['./relation-info.component.scss']
})
export class RelationInfoComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private countryService: CountryService,
    private relationService: RelationService
  ) {
  }

  country: Country = new Country(0, '', '', '', 0);
  viewEnum: any = CurrentReleationViewEnum;


  ngOnInit() {
    this.relationService.getRelations();
  }

  createRealtion(): void {
    this.relationService.currentView = this.viewEnum.RELATIONCREATE;
  }
}
