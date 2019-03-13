import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

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

  createCountry(country: Country): Subscription {
    return this.http.post('http://localhost:8080/api/country/createCountry', country).subscribe(() => {
    }, () => {
    });
  }

  updateCountry(country: Country): Subscription {
    return this.http.post('http://localhost:8080/api/country/updateCountry', country).subscribe(() => {
    }, () => {
    });
  }
}

export class Country {
  id: number;
  name: string;
  details: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.details = description;
  }
}
