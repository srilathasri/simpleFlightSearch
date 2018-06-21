import { Injectable } from '@angular/core';

@Injectable()
export class FormUtilsService {
  syncFormValue = {
    origin: '',
    destination: '',
    departure: '',
    passengers: '',
    pricerange: [0, 4500],
    return: '',
  };
  constructor() { }

}
