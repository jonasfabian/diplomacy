import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  private api = 'http://localhost:8080/api/country/getCountry';

  getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.api);
  }

  createCountry(country: Country): Observable<any> {
    return this.http.post('http://localhost:8080/api/country/createCountry', country);
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
