import { Component, OnInit, Input } from '@angular/core';
import {IUser} from "../IUser";
import {mockUsers} from "../mockUsers";

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.scss']
})
export class UsersTabComponent implements OnInit {

  searchValue: string = '';
  users: IUser[] = mockUsers;

  constructor() { 

  }

  ngOnInit(): void {
  }

  onSearchInput(value: string) {
    this.searchValue = value;
    this.users = [...mockUsers].filter(user => { 
      const search = value.toLowerCase();
      return user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)
    });
  }

  onClearSearchInput() {
    this.searchValue = '';
    this.users = mockUsers;
  }

}
