import {Component, OnInit} from '@angular/core';
import {ApiService, Country} from '../api.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {
  }

  country = new Country(0, 'hello', 'there');

  ngOnInit() {
    this.apiService.getCountries().subscribe(value => {
      this.country = value;
    });
  }

}
