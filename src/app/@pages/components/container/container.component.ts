import { Component, Input, OnInit } from '@angular/core';

declare var pg: any;

@Component({
  selector: 'pg-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  _enableHorizontalContainer: boolean = false;

  constructor() {
  }

  _extraClass: string = "";

  @Input()
  set extraClass(value) {
    this._extraClass = value
  }

  _extraHorizontalClass: string = "";

  @Input()
  set extraHorizontalClass(value) {
    this._extraHorizontalClass = value
  }

  ngOnInit() {
    this._enableHorizontalContainer = pg.isHorizontalLayout
  }

}
