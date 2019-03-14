import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
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

  alliance = 1;
  war = 2;
  nonAggressionPact = 3;
  Trade = 4;
  countryName = '';
  relation: Relation = new Relation(-1, 0, 0, 0);

  createRelation(relation: Relation): void {
    this.http.post('http://localhost:8080/api/country/createRelation', relation).subscribe(val => {
    });
  }

  displayCountryName(countryId: number) {
    const c = this.countryService.countryArray.find(val => {
      return val.id === countryId;
    });
    this.countryName = c.name;
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
