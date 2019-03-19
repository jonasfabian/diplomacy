import { Component, OnInit } from '@angular/core';
import {CountryService} from '../services/country.service';
import {ApiService, Currency} from '../services/api.service';

@Component({
  selector: 'app-curreny-info',
  templateUrl: './curreny-info.component.html',
  styleUrls: ['./curreny-info.component.scss']
})
export class CurrenyInfoComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private countryService: CountryService
  ) { }

  currencyArray: Array<Currency> = [];
  ngOnInit() {
  }

  showCurrency() {
    this.apiService.getCurrency(this.countryService.country.id).subscribe(val => {
      this.currencyArray = val;
      console.log(this.countryService.country.id);
      console.log(val);
    });
  }

}
