import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatSliderModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatIconModule,
  DateAdapter,
  NativeDateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS
} from '@angular/material';
import { NouisliderModule } from 'ng2-nouislider';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    NouisliderModule
  ],
  declarations: [],
  providers: [
    {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
  ]
})
export class MaterialsModule { }
