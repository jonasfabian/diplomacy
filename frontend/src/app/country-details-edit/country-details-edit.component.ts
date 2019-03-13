import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService, Country} from '../api.service';
import {CountryService} from '../country.service';

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
  @Input() country: Country;

  ngOnInit() {
    this.editCountryForm = this.fb.group({
      'name': [this.country.name, [Validators.required]],
      'details': [this.country.details, Validators.required]
    });
  }

  save() {
    if (this.editCountryForm.valid) {
      this.country.name = this.editCountryForm.controls.name.value;
      this.country.details = this.editCountryForm.controls.details.value;
      this.apiService.updateCountry(new Country(this.country.id, this.country.name, this.country.details));
      this.countryService.edit = false;
    }
  }

}
