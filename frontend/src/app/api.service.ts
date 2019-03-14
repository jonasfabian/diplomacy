import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  private getCountryApi = 'http://localhost:8080/api/country/getCountry';

  getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.getCountryApi);
  }

  createCountry(country: Country): Observable<any> {
    return this.http.post('http://localhost:8080/api/country/createCountry', country);
  }

  createRelation(relation: Relation): void {
    this.http.post('http://localhost:8080/api/country/createRelation', relation).subscribe(val => {
    });
  }

  updateCountry(country: Country): Observable<any> {
    return this.http.post('http://localhost:8080/api/country/updateCountry', country);
  }
}

export class Country {
  id: number;
  name: string;
  details: string;
  countryCode: string;

  constructor(id: number, name: string, details: string, countryCode: string) {
    this.id = id;
    this.name = name;
    this.details = details;
    this.countryCode = countryCode;
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
