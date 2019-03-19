import { Component } from '@angular/core';
import {CountryService} from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(
    public countryService: CountryService
  ) {
  }
}
