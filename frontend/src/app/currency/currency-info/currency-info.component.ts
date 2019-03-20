import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-curreny-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss']
})
export class CurrencyInfoComponent implements OnInit {

  constructor(
    public countryService: CountryService,
  ) {
  }

  ngOnInit(): void {
   this.countryService.calculateNumberOfCurrencyUsers();
  }
}
