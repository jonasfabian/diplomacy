import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CountryService, CurrentCountryViewEnum} from '../services/country.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService, Country, Currency} from '../services/api.service';
import * as countryCodes from '../country-codes';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.scss']
})
export class CountryCreateComponent implements OnInit {

  constructor(
    private countryService: CountryService,
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
  }

  currentView: CurrentCountryViewEnum;
  createCountryForm: FormGroup;
  country: Country = new Country(-1, '', '', '', -1);
  viewEnum: any = CurrentCountryViewEnum;
  countryCodes = new countryCodes.CountryCodes();
  selectedCountry: Country = new Country(-1, '', '', '', -1);
  selectedCurrency: Currency = new Currency(-1, '');
  filteredCountries = [];
  currArray: Array<Currency> = [];
  @ViewChild('searchCountry') searchCountry: ElementRef;

  ngOnInit() {
    this.initForm();
    this.apiService.getCurrencies().subscribe(c => {
      this.currArray = c;
    });
  }

  initForm() {
    console.log(this.selectedCountry);
    this.createCountryForm = this.fb.group({
      'name': [this.selectedCountry.name, [Validators.required]],
      'details': ['', [Validators.maxLength(100)]],
      'countryCode': [this.selectedCountry.countryCode, [Validators.required, Validators.minLength(2)]]
    });
  }

  save(): void {
    if (this.createCountryForm.valid) {
      this.country.name = this.createCountryForm.controls.name.value;
      this.country.details = this.createCountryForm.controls.details.value;
      this.country.countryCode = this.createCountryForm.controls.countryCode.value;
      this.country.currencyId = this.selectedCurrency.currencyId;
      this.countryService.createCountry(
        new Country(this.country.id, this.country.name, this.country.details, this.country.countryCode, this.country.currencyId
        ));
      this.countryService.currentView = this.viewEnum.COUNTRYDETAIL;
    }
  }

  selectCountry(country: any): void {
    this.selectedCountry = country;
    this.initForm();
    this.searchCountry.nativeElement.value = '';
    this.filteredCountries = [];
  }

  filterCountries(filteringText: string) {
    if (filteringText !== '') {
      this.filteredCountries = this.countryCodes.countries.filter(
        item => item.name.toLowerCase().indexOf(filteringText.toLowerCase()) > -1
      );
    } else {
      this.filteredCountries = [];
    }
  }
}
