import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MdDatepickerModule,
  MdInputModule,
  MdSliderModule,
  MdTabsModule,
  DateAdapter,
  MD_DATE_FORMATS,
  MdNativeDateModule
} from '@angular/material';

import { MyDateAdapter } from './my-date-adapter';
import { MY_DATE_FORMATS } from './MY_DATE_FORMATS';
import 'hammerjs';
import { CalculationInputComponent } from './components/calculation-input/calculation-input.component';

@NgModule({
  exports: [
    MdDatepickerModule,
    MdInputModule,
    MdSliderModule,
    MdTabsModule,
    MdNativeDateModule
  ]
})
export class CiggMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    CalculationInputComponent
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
    { provide: MD_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
