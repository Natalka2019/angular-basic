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
  @Output() onSelectAll = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onSort = new EventEmitter();

  selectAllButtonTitle: string = "SelectAll";
  deleteButtonTitle: string = "Delete";
  sortButtonTitle: string = "Sort";

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

  onSelectAllButtonClick() {
    this.onSelectAll.emit();
  }

  onDeleteButtonClick() {
    this.onDelete.emit();
  }

  onSortButtonClick() {
    this.onSort.emit();
  }

}
