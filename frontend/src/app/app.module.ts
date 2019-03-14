import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { RelationInfoComponent } from './relation-info/relation-info.component';
import { CountryDetailsEditComponent } from './country-details-edit/country-details-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CountryCreateComponent } from './country-create/country-create.component';
import { RelationCreateComponent } from './relation-create/relation-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryInfoComponent,
    CountryDetailsComponent,
    RelationInfoComponent,
    CountryDetailsEditComponent,
    CountryCreateComponent,
    RelationCreateComponent,
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
