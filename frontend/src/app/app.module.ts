import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryInfoComponent } from './country/country-info/country-info.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryDetailsComponent } from './country/country-details/country-details.component';
import { RelationInfoComponent } from './relation/relation-info/relation-info.component';
import { CountryDetailsEditComponent } from './country/country-details-edit/country-details-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CountryCreateComponent } from './country/country-create/country-create.component';
import { RelationCreateComponent } from './relation/relation-create/relation-create.component';
import { CurrencyInfoComponent } from './currency/currency-info/currency-info.component';
import { CombatComponent } from './combat/combat-info/combat.component';
import { ModifiersComponent } from './combat/modifiers/modifiers.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryInfoComponent,
    CountryDetailsComponent,
    RelationInfoComponent,
    CountryDetailsEditComponent,
    CountryCreateComponent,
    RelationCreateComponent,
    CurrencyInfoComponent,
    CombatComponent,
    ModifiersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
