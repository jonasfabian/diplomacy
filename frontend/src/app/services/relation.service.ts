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
  countryName = '';
  relation: Relation = new Relation(-1, 0, 0, 0);
  relationArray: Array<Relation> = [];

  getRelations(): void {
    this.apiService.getRelations().subscribe(value => {
      this.relationArray = value;
    });
  }

  displayCountryName(country: Country) {
    const c = this.countryService.countryArray.find(val => {
      return val.id === country.id;
    });
    this.countryName = c.name;
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
