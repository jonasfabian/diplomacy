import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { RelationInfoComponent } from './relation-info/relation-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryInfoComponent,
    CountryDetailsComponent,
    RelationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
