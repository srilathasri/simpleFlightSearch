import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import * as data from '../../../assets/mock/airports-mock.json';
// import * as cities from '../../../assets/mock/cities.mock.json';
import { FlightInfo } from '../../model/flightInfo.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDatepicker, NativeDateAdapter } from '@angular/material';
import { FormUtilsService } from '../../services/form-utils.service';
import { VALID } from '@angular/forms/src/model';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'aero-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() tripType: 'oneway' | 'return';
  @Output() searchResult = new EventEmitter<Array<any>>();
  searchForm: FormGroup;
  airportData = data;
  cities: any = [];
  filteredCitiesOrigin: Observable<any[]>;
  filteredCitiesDest: Observable<any[]>;
  constructor(private formBuilder: FormBuilder,
    private _http: Http,
    private _formUtil: FormUtilsService) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrow = new Date(today);
    this.searchForm = this.formBuilder.group({
      origin: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      departure: new FormControl(new Date(), Validators.required),
      passengers: new FormControl('', Validators.required),
      pricerange: new FormControl([0, 4500], Validators.required),
      return: new FormControl(tomorrow, Validators.required)
    });
    this.getCities();
  }

  isReturnJourney() {
    return this.tripType === 'return';
  }

  displayFn(city: any): string {
    return city ? city.name : city;
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) => {
      this._formUtil.syncFormValue = value;
    });
  }

  syncFormValue() {
    if (!!this._formUtil.syncFormValue) {
      this.searchForm.setValue(this._formUtil.syncFormValue);
    }
  }

  filterCities(name: string, value) {
    console.log(value);
    return this.cities.filter(
      state => {
        return (this.isNotSelectedBefore(state.code, value) && state.city.toLowerCase().indexOf(name.toLowerCase()) !== -1);
      }
    );
  }

  isNotSelectedBefore(cityCode, value) {
    return value.split('~').length === 1 || !(!!value && value.split('~')[1].trim().toUpperCase() === cityCode.toUpperCase());
  }

  search() {
    let results = [];
    const value = this.searchForm.value;
    const origin = !!value.origin && value.origin.split(' ~ ').length > 1 && value.origin.split(' ~ ')[1].trim();
    const dest = !!value.dest && value.dest.split(' ~ ').length > 1 && value.dest.split(' ~ ')[1].trim();
    const doj = new Date(value.departure);
    this._http.get(`http://localhost:8882/searchFlights?ori=${origin}&des=${dest}&d=${doj.getUTCFullYear()}-${doj.getUTCMonth() + 1}-${doj.getUTCDate() + 1}`)
      .pipe(
        map(resp => resp.json())
      )
      .subscribe((resp) => {
        console.log('==>', resp);
        resp.forEach(flight => {
          results.push({
            price: Math.floor(Math.random()*Math.floor(1200)), carrier: `${flight.carrier}(${flight.aircraft})`, to: {
              code: `${flight.carrier}(${flight.aircraft})`, path: flight.origin + ' > '
                + flight.destination, dep: flight.departure, arr: flight.arrival
            }
          });
        });
      });
    this.searchResult.emit(results);

  }

  getCities() {
    this._http.get('/assets/mock/cities.mock.json')
      .pipe(map(resp => resp.json()))
      .subscribe((resp: Array<any>) => {
        this.cities = resp.slice(7000, 8000);
        const obs = this.searchForm.controls.origin.valueChanges.pipe(
          startWith(''),
          map((city, index) => {
            if (!!city) {
              return this.filterCities(city, this.searchForm.controls.destination.value);
            } else {
              return this.cities;
            }
          })
        );
        obs.subscribe((res) => {
          this.filteredCitiesOrigin = res;
        });
        const destObs = this.searchForm.controls.destination.valueChanges.pipe(
          startWith(''),
          map((city, index) => {
            if (!!city) {
              return this.filterCities(city, this.searchForm.controls.origin.value);
            } else {
              // console.log(this.cities.slice());
              return this.cities;
            }
          })
        );
        destObs.subscribe((res) => {
          this.filteredCitiesDest = res;
        });
      })
  }

  getDate(action: string, _days: number) {
    return !!action && !isNaN(_days) ? new Date(new Date().getDate() + _days) : new Date();
  }
}
