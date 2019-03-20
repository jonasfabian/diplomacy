import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {CountryService} from '../services/country.service';
import {CurrentReleationViewEnum, RelationService} from '../services/relation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Relation} from '../models/relation';

@Component({
  selector: 'app-relation-create',
  templateUrl: './relation-create.component.html',
  styleUrls: ['./relation-create.component.scss']
})
export class RelationCreateComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private countryService: CountryService,
    private relationService: RelationService,
    private fb: FormBuilder
  ) { }

  relation: Relation = new Relation(-1, 0, 0, 0);
  createRelationForm: FormGroup;
  viewEnum: any = CurrentReleationViewEnum;

  ngOnInit() {
    this.createRelationForm = this.fb.group({
      'country1': ['', [Validators.required]],
      'country2': ['', [Validators.required]],
      'relationType': ['', [Validators.required]],
    });
  }

  save(): void {
    if (this.createRelationForm.valid) {
      this.relation.countryId1 = this.createRelationForm.controls.country1.value;
      this.relation.countryId2 = this.createRelationForm.controls.country2.value;
      this.relation.relationType = this.createRelationForm.controls.relationType.value;
      this.relationService.createRelation(this.relation);
      this.relationService.displayCountryName(this.countryService.country.id);
      this.relationService.currentView = this.viewEnum.RELATIONDETAIL;
    }
  }
}
