import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() searchValue: string ='';
  @Output() onSearchInput = new EventEmitter<string>();
  @Output() onClearSearchInput = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  onInput(valueFromInput: string) {
    this.onSearchInput.emit(valueFromInput);
  }

  onClearInput() {
    this.onClearSearchInput.emit();
  }

}
