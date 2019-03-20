import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CountryService} from '../../services/country.service';
import {CurrentReleationViewEnum, RelationService} from '../../services/relation.service';
import {Country} from '../../models/country';

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

  country: Country = new Country(0, '', '', '', 0, 0);
  viewEnum: any = CurrentReleationViewEnum;


  ngOnInit() {
    this.relationService.getRelations();
  }

  createRealtion(): void {
    this.relationService.currentView = this.viewEnum.RELATIONCREATE;
  }
}
