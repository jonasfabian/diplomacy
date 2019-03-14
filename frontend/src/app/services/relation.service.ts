import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService, Country} from './api.service';
import {CountryService} from './country.service';

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

  relationType = '';
  country1Name = '';
  relation: Relation = new Relation(-1, 0, 0, 0);
  relationArray: Array<Relation> = [];
  countryRelationsArray: Array<Relation> = [];
  countryRelationsArray1: Array<Relation> = [];
  countryRelationsArray2: Array<Relation> = [];

  getRelations(): void {
    this.apiService.getRelations().subscribe(value => {
      this.relationArray = value;
    });
  }

  displayCountryName(country: Country) {
    this.countryRelationsArray1 = [];
    this.countryRelationsArray2 = [];
    const c = this.countryService.countryArray.find(val => {
      return val.id === country.id;
    });
    this.country1Name = c.name;
    this.countryRelationsArray1 = this.relationArray.filter(val => val.countryId1 === c.id);
    this.countryRelationsArray2 = this.relationArray.filter(val => val.countryId2 === c.id);
    this.countryRelationsArray = this.countryRelationsArray1.concat(this.countryRelationsArray2);
  }

  displayRelationType(relation: Relation) {
    if (relation.relationType === 1) {
      this.relationType = 'Alliance';
    } else if (relation.relationType === 2) {
      this.relationType = 'War';
    } else if (relation.relationType === 3) {
      this.relationType = 'Non-Aggression-Pact';
    } else if (relation.relationType === 4) {
      this.relationType = 'Trading';
    }
  }
}

export class Relation {
  id: number;
  countryId1: number;
  countryId2: number;
  relationType: number;

  constructor(id: number, countryId1: number, countryId2: number, relationType: number) {
    this.id = id;
    this.countryId1 = countryId1;
    this.countryId2 = countryId2;
    this.relationType = relationType;
  }
}
