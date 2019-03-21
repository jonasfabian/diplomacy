import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {CountryService} from './country.service';
import {Relation} from '../models/relation';
import {Country} from '../models/country';
import {RelationNamed} from '../models/relation-named';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private countryService: CountryService
  ) {
  }

  country1Name = '';
  relationArray: Array<Relation> = [];
  relationNamedArray: Array<RelationNamed> = [];
  countryRelationsArray: Array<Relation> = [];
  countryRelationsArray1: Array<Relation> = [];
  countryRelationsArray2: Array<Relation> = [];

  currentView: any = CurrentReleationViewEnum.RELATIONDETAIL;

  getRelations(): void {
    this.apiService.getRelations().subscribe(value => {
      this.relationArray = value;
    });
  }

  getRelationsNamed(id: number): void {
    this.apiService.getRelationsNamed(id).subscribe(value => {
      this.relationNamedArray = value;
    });
  }

  displayCountryName(countryId: number): String {
    return this.countryService.countryArray.find(c => c.id === countryId).name;
  }

  /*  1 == Alliance
  *   2 == War
  *   3 == Non-Aggression-Pact
  *   4 == Trading
  */

  displayRelationType(relation: number): String {
    if (relation === 1) {
      return 'Alliance';
    } else if (relation === 2) {
      return 'War';
    } else if (relation === 3) {
      return 'Non-Aggression-Pact';
    } else if (relation === 4) {
      return 'Trading';
    }
  }

  displayCountryRelations(country: Country): void {
    const c = this.countryService.countryArray.find(val => {
      return val.id === country.id;
    });
    this.country1Name = c.name;
    this.countryRelationsArray1 = this.relationArray.filter(val => val.countryId1 === c.id);
    this.countryRelationsArray2 = this.relationArray.filter(val => val.countryId2 === c.id);
    this.countryRelationsArray = this.countryRelationsArray1.concat(this.countryRelationsArray2);
  }

  createRelation(relation: Relation): void {
    this.apiService.createRelation(relation).subscribe(val => {
      this.getRelations();
    });
  }
}

export enum CurrentReleationViewEnum {
  RELATIONDETAIL,
  RELATIONCREATE
}
