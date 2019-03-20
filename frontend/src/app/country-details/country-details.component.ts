import {Component, OnInit} from '@angular/core';
import {CountryService} from '../services/country.service';
import {ApiService, Currency, Manpower} from '../services/api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor(
    private countryService: CountryService,
    private apiService: ApiService
  ) { }

  currency: Currency = new Currency(-1 , '');
  manpowerNumber = 0;

  ngOnInit(): void {
    this.apiService.getCurrencies().subscribe(c => {
      this.currency = c.find(v => v.currencyId === this.countryService.country.currencyId);
    });
    this.apiService.getManpower(this.countryService.country.id).subscribe(res => {
      res.map(val => {
        this.manpowerNumber = val.manpowerNumber;
      });
    });
  }

}
