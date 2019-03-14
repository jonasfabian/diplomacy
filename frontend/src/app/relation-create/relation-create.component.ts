import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {CountryService} from '../services/country.service';
import {Relation, RelationService} from '../services/relation.service';

@Component({
  selector: 'app-relation-create',
  templateUrl: './relation-create.component.html',
  styleUrls: ['./relation-create.component.scss']
})
export class RelationCreateComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private countryService: CountryService,
    private relationService: RelationService
  ) { }

  relation: Relation = new Relation(-1, 0, 0, 0);

  ngOnInit() {
  }

  save() {
    this.relationService.createRelation(this.relation);
  }

}
