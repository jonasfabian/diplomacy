import {Component, OnInit} from '@angular/core';
import {CountryService, CurrentViewEnum} from '../country.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService, Country} from '../api.service';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.scss']
})
export class CountryCreateComponent implements OnInit {

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
  }

  currentView: CurrentViewEnum;
  createCountryForm: FormGroup;
  country: Country = new Country(-1, '', '', '');
  viewEnum: any = CurrentViewEnum;

  ngOnInit() {
    this.createCountryForm = this.fb.group({
      'name': ['', [Validators.required]],
      'details': ['', [Validators.maxLength(100)]],
      'countryCode': ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  save() {
    if (this.createCountryForm.valid) {
      this.country.name = this.createCountryForm.controls.name.value;
      this.country.details = this.createCountryForm.controls.details.value;
      this.country.countryCode = this.createCountryForm.controls.countryCode.value;
      this.countryService.createCountry(new Country(this.country.id, this.country.name, this.country.details, this.country.countryCode));
      this.countryService.currentView = this.viewEnum.COUNTRYDETAIL;
    }
  }
}
