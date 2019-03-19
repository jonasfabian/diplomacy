import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Relation, RelationNamed} from './relation.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>('http://localhost:8080/api/country/getCountry');
  }

  getCurrency(id: number): Observable<Array<Currency>> {
    return this.http.get<Array<Currency>>(`http://localhost:8080/api/country/getCurrency?id=${id}`);
  }

  getRelations(): Observable<Array<Relation>> {
    return this.http.get<Array<Relation>>('http://localhost:8080/api/country/getRelation');
  }

  getRelationsNamed(id: number): Observable<Array<RelationNamed>> {
    return this.http.get<Array<RelationNamed>>(`http://localhost:8080/api/country/getRelationByName?id=${id}`);
  }

  createCountry(country: Country): Observable<any> {
    return this.http.post('http://localhost:8080/api/country/createCountry', country);
  }

  createRelation(relation: Relation): Observable<any> {
    return this.http.post('http://localhost:8080/api/country/createRelation', relation);
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

export class Currency {
  currencyId: number;
  currencyName: string;
  currencyCountryId: number;
  currencyCountryName: string;

  constructor(currencyId: number, currencyName: string, currencyCountryId: number, currencyCountryName: string) {
    this.currencyId = currencyId;
    this.currencyName = currencyName;
    this.currencyCountryId = currencyCountryId;
    this.currencyCountryName = currencyCountryName;
  }
}
