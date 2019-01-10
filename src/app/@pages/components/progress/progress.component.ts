import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() type: string;
  @Input() color: string;
  @Input() thick: boolean;
  @Input() indeterminate: boolean;

  constructor() {
  }

  private _value: number;

  get value() {
    return this._value;
  }

  @Input() set value(value: number) {
    if (this.type == "circle") {
      this._value = (value / 100) * 360;
      if (this.value >= 50) {
        this._value2 = true;
      }
    } else
      this._value = value
  }

  private _value2: any;

  get value2() {
    return this._value2;
  }
}
