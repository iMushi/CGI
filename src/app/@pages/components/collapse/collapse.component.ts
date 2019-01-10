import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Host, HostBinding, Input } from '@angular/core';
import { pgCollapsesetComponent } from './collapseset.component';

@Component({
  selector: 'pg-collapse',
  templateUrl: './collapse.component.html',
  animations: [
    trigger('collapseState', [
      state('inactive', style({
        opacity: '0',
        height: 0
      })),
      state('active', style({
        opacity: '1',
        height: '*'
      })),
      transition('inactive => active', animate('125ms ease-in')),
      transition('active => inactive', animate('125ms ease-out'))
    ])
  ],
  host: {
    '[class.card]': 'true',
    '[class.card-default]': 'true',
    '[class.m-b-0]': 'true'
  }
})

export class pgCollapseComponent {
  _active = false;
  _el;
  @Input() Title: string;
  private _disabled = false;

  constructor(@Host() private _collapseSet: pgCollapsesetComponent, private _elementRef: ElementRef) {
    this._el = this._elementRef.nativeElement;
    this._collapseSet.addTab(this);
  }

  get Disabled(): boolean {
    return this._disabled;
  }

  @Input()
  @HostBinding('class.disabled')
  set Disabled(value: boolean) {
    this._disabled = value;
  }

  get Active(): boolean {
    return this._active;
  }

  @Input()
  set Active(value: boolean) {
    const active = value;
    if (this._active === active) {
      return;
    }
    if (!this.Disabled) {
      this._active = active;
    }
  }

  clickHeader($event: MouseEvent): void {
    this.Active = !this.Active;
    /** trigger host collapseSet click event */
    this._collapseSet.pgClick(this);
  }
}
