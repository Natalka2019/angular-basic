import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../IUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() usersList: IUser[] = [];
  @Output() onSelect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCheck(event: any) {
    this.onSelect.emit(event);
  }
}
