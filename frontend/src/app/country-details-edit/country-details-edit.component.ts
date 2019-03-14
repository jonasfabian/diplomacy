import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService, Country} from '../services/api.service';
import {CountryService, CurrentViewEnum} from '../services/country.service';

@Component({
  selector: 'app-country-details-edit',
  templateUrl: './country-details-edit.component.html',
  styleUrls: ['./country-details-edit.component.scss']
})
export class CountryDetailsEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private apiService: ApiService
  ) {
  }

  editCountryForm: FormGroup;
  viewEnum: any = CurrentViewEnum;
  @Input() country: Country;

  ngOnInit() {
    this.editCountryForm = this.fb.group({
      'name': [this.country.name, [Validators.required]],
      'details': [this.country.details, [Validators.required]],
      'countryCode': [this.country.countryCode, [Validators.required, Validators.minLength(2)]]
    });
  }

  save() {
    if (this.editCountryForm.valid) {
      this.country.name = this.editCountryForm.controls.name.value;
      this.country.details = this.editCountryForm.controls.details.value;
      this.country.countryCode = this.editCountryForm.controls.countryCode.value;
      this.countryService.updateCountry(new Country(this.country.id, this.country.name, this.country.details, this.country.countryCode));
      this.countryService.currentView = this.viewEnum.COUNTRYDETAIL;
    }
  }
}
