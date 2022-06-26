import { Component, OnInit, Input } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent implements OnInit {

  @Input() user: IUser;

  constructor() { 
    this.user = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      avatar: ""
    }
  }

  ngOnInit(): void {
  }

}
