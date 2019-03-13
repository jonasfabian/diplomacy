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

  private api = 'http://localhost:8080/api/country/getCountry';

  getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.api);
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
