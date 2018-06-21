import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aero-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {
  @Input()
  flightData: any; 
  constructor() { }

  ngOnInit() {
  }

}
