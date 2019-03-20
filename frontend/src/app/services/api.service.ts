import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Currency} from '../models/currency';
import {Country} from '../models/country';
import {Manpower} from '../models/manpower';
import {Relation} from '../models/relation';
import {RelationNamed} from '../models/relation-named';
import {ModifiersForCountry} from '../models/modifiers-for-country';

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

  getModifiersForCountry(id: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(`http://localhost:8080/api/country/getModifiersForCountry?id=${id}`);
  }

  getManpower(id: number): Observable<Array<Manpower>> {
    return this.http.get<Array<Manpower>>(`http://localhost:8080/api/country/getManpower?id=${id}`);
  }

  deleteCountry(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/api/country/deleteCountry?id=${id}`);
  }

  getCountryByCurrency(id: number): Observable<Array<Currency>> {
    return this.http.get<Array<Currency>>(`http://localhost:8080/api/country/getCurrency?id=${id}`);
  }

  getCurrencies(): Observable<Array<Currency>> {
    return this.http.get<Array<Currency>>('http://localhost:8080/api/country/getCurrencies');
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
