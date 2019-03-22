import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../services/country.service';
import {ApiService} from '../../services/api.service';
import {Currency} from '../../models/currency';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor(
    public countryService: CountryService,
    private apiService: ApiService
  ) { }

  currency: Currency = new Currency(-1 , '');

  ngOnInit(): void {
    this.apiService.getCurrencies().subscribe(c => {
      this.currency = c.find(v => v.currencyId === this.countryService.country.currencyId);
    });
    this.apiService.getModifiersForCountry(this.countryService.country.id).subscribe(val => {
    });
    this.countryService.getStats();
  }

}
