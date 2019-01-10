import { Component, ContentChild, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { toBoolean } from '../util/convert';
import { pgSelectFXComponent } from './select.component';

@Component({
  selector: 'pg-selectfx-option',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: []
})
export class pgOptionComponent implements OnDestroy, OnInit {
  _value: string;
  _label: string;
  @ContentChild('OptionTemplate') OptionTemplate;
  private _disabled = false;

  constructor(private _Select: pgSelectFXComponent) {
  }

  get Value(): string {
    return this._value;
  }

  @Input()
  set Value(value: string) {
    if (this._value === value) {
      return;
    }
    this._value = value;
  }

  get Label(): string {
    return this._label;
  }

  @Input()
  set Label(value: string) {
    if (this._label === value) {
      return;
    }
    this._label = value;
  }

  get Disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set Disabled(value: boolean) {
    this._disabled = toBoolean(value);
  }

  ngOnInit(): void {
    this._Select.addOption(this);
  }

  ngOnDestroy(): void {
    this._Select.removeOption(this);
  }
}
