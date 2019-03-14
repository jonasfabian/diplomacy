import {Component, OnInit} from '@angular/core';
import {CountryService} from '../services/country.service';
import {Country} from '../services/api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

}
