import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'input-clearable',
  templateUrl: './input-clearable.component.html',
  styleUrls: ['./input-clearable.component.scss'],
})
export class InputClearableComponent {
  @Input() value: string = '';
  @Output() onInput = new EventEmitter<string>();
  @Output() onClearInput = new EventEmitter();

  constructor() { 

  }

  ngOnInit(): void {
  }

  onInputChange(): void {
    this.onInput.emit(this.value);
  }

  onClear(): void {
    this.onClearInput.emit();
  }

}