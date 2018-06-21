import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aero-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  searchResult: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  transmit(result) {
    this.searchResult = result;
  }

}
