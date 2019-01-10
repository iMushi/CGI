import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pg-tag-control',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => pgTagControl),
      multi: true
    }
  ],
  templateUrl: "./tag.control.component.html",
  styleUrls: ["./tag.scss"]
})
export class pgTagControl implements OnInit, ControlValueAccessor {

  @ViewChild('wrapper') wrapper: ElementRef;
  _tags = [];
  inputValue = '';

  _placeholder = '';

  @Input()
  set placeholder(value: string) {
    this._placeholder = value
  }

  onChange: (value: string[]) => void = () => null;

  onTouched: () => void = () => null;

  handleClose(removedTag: any): void {
    this._tags = this._tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  handleInputConfirm(): void {
    if (this.inputValue) {
      this._tags.push(this.inputValue);
    }
    this.inputValue = '';
  }

  handleFocus(): void {
    this.wrapper.nativeElement.parentNode.parentNode.classList.add('focused');
  }

  handleFocusOut(): void {
    this.wrapper.nativeElement.parentNode.parentNode.classList.remove('focused');
  }

  handleInputBack(): void {
    if (!this.inputValue) {
      this._tags.splice(-1, 1);
    }
  }

  updateValue(value: string[]): void {
    this._tags = value;
  }

  writeValue(value: string[]): void {
    this.updateValue(value);
  }

  registerOnChange(fn: (_: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }
}