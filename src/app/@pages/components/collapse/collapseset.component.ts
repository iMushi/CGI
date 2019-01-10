import { Component, Input, ViewEncapsulation } from '@angular/core';
import { pgCollapseComponent } from './collapse.component';

@Component({
  selector: 'pg-collapseset',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="card-group" [class.horizontal]="Horizontal">
      <ng-content></ng-content>
    </div>
  `
})
export class pgCollapsesetComponent {
  panels: pgCollapseComponent[] = [];
  private _accordion = false;
  private _horizontal = true;

  get Accordion(): boolean {
    return this._accordion;
  }

  @Input()
  set Accordion(value: boolean) {
    this._accordion = value;
  }

  get Horizontal(): boolean {
    return this._horizontal;
  }

  @Input()
  set Horizontal(value: boolean) {
    this._horizontal = value;
  }

  pgClick(collapse: pgCollapseComponent): void {
    if (this.Accordion) {
      this.panels.map((item, index) => {
        const curIndex = this.panels.indexOf(collapse);
        if (index !== curIndex) {
          item.Active = false;
        }
      });
    }
  }

  addTab(collapse: pgCollapseComponent): void {
    this.panels.push(collapse);
  }
}
