import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryService, CurrentCountryViewEnum} from '../../services/country.service';
import {Country} from '../../models/country';

@Component({
  selector: 'app-country-details-edit',
  templateUrl: './country-details-edit.component.html',
  styleUrls: ['./country-details-edit.component.scss']
})
export class CountryDetailsEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
  ) {
  }

  editCountryForm: FormGroup;
  viewEnum: any = CurrentCountryViewEnum;
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
      this.countryService.updateCountry(new Country(this.country.id, this.country.name,
        this.country.details, this.country.countryCode, this.country.currencyId, this.country.manpowerId));
      this.countryService.currentView = this.viewEnum.COUNTRYDETAIL;
    }
  }
}
