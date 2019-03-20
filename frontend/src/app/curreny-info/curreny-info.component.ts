import {Component, OnInit} from '@angular/core';
import {CountryService} from '../services/country.service';

@Component({
  selector: 'app-curreny-info',
  templateUrl: './curreny-info.component.html',
  styleUrls: ['./curreny-info.component.scss']
})
export class CurrenyInfoComponent implements OnInit {

  constructor(
    public countryService: CountryService,
  ) {
  }

  ngOnInit(): void {
   this.countryService.calculateNumberOfCurrencyUsers();
  }
}
