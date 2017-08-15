import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationService } from './services/calculation.service';

import {
  MdDatepickerModule,
  MdInputModule,
  MdSliderModule,
  MdTabsModule,
  DateAdapter,
  MD_DATE_FORMATS,
  MdNativeDateModule,
  MdToolbarModule,
  MdButtonModule,
  MdIconModule
} from '@angular/material';

import { MyDateAdapter } from './my-date-adapter';
import { MY_DATE_FORMATS } from './MY_DATE_FORMATS';
import 'hammerjs';
import { CalculationInputComponent } from './components/calculation-input/calculation-input.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  exports: [
    MdDatepickerModule,
    MdInputModule,
    MdSliderModule,
    MdTabsModule,
    MdNativeDateModule,
    MdButtonModule,
    MdIconModule
  ]
})
export class CiggMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    CalculationInputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CiggMaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'sv-SE' },
    { provide: DateAdapter, useClass: MyDateAdapter },
    { provide: MD_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    CalculationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
