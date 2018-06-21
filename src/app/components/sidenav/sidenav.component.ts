import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'aero-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output()
  searchResult = new EventEmitter<Array<any>>();
  constructor() { }

  ngOnInit() {
  }

  publishResult(results) {
    this.searchResult.emit(results);
  }

}
