import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { toBoolean } from '../util/convert';

@Directive({
  selector: '[pg-tab-label]',
  host: {
    '[class.nav-item]': 'true'
  }
})
export class pgTabLabelDirective {

  constructor(public elementRef: ElementRef) {
  }

  private _disabled = false;

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  @HostBinding('class.nav-item-disabled')
  set disabled(value: boolean) {
    this._disabled = toBoolean(value);
  }

  getOffsetLeft(): number {
    return this.elementRef.nativeElement.offsetLeft;
  }

  getOffsetWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }

  getOffsetTop(): number {
    return this.elementRef.nativeElement.offsetTop;
  }

  getOffsetHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
