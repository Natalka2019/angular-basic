import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent implements OnInit {

  @Input() user: IUser = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    avatar: "",
    isSelected: false
  };


  @Output() onCheck = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect(event: any) {
    this.onCheck.emit(event);
  }

}
