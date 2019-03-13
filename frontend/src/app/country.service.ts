import { Injectable } from '@angular/core';
import {Country} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  country: Country = new Country(-1, 'No Country Name yet', 'No details yet');
  edit = false;
}
