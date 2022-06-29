import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../IUser';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser = {
    id: 0,
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    avatar: '',
    isSelected: false,
  };

  @Output() onCheck = new EventEmitter();

  haveName: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.haveName = this.user.name !== undefined;
  }

  onSelect(event: any) {
    this.onCheck.emit(event);
  }
}
