import {Component, OnInit} from '@angular/core';
import {ApiService, Country} from '../services/api.service';
import {CountryService} from '../services/country.service';
import {Relation, RelationService} from '../services/relation.service';

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
  ) { }

  relation: Relation = new Relation(-1, 0, 0, 0);
  country: Country = new Country(0, '', '', '');
  relationArray: Array<Relation> = [];

  ngOnInit() {
    this.relationService.getRelations();
  }

}
