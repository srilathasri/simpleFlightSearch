import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aero-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {
  private results: Array<any>;
  @Input()
  set readResults(results: Array<any>) {
    this.results = results;
    this.resultsUpdated.emit(results);
  }
  get readResults() {
    return this.results;
  }
  @Output()
  resultsUpdated = new EventEmitter<Array<any>>();
  constructor() { }

  ngOnInit() {
  }

}
