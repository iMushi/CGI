import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pgFormGroupDefault]'
})
export class FormGroupDefaultDirective implements OnInit {

  @HostBinding('class.focused') _isActive: boolean = false;

  constructor(private El: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click') onclick() {
    if (this._isActive) return;
    this._isActive = true;
    let inputEl = this.El.nativeElement.querySelector("input");
    if (inputEl) {
      inputEl.focus();
    }

  }

  ngOnInit() {
    let inputEl = this.El.nativeElement.querySelector("input");
    if (inputEl) {
      this.renderer.listen(inputEl, 'focus', (event) => {
        this._isActive = true
      });
      this.renderer.listen(inputEl, 'focusout', (event) => {
        this._isActive = false
      });
    }
  }
}
