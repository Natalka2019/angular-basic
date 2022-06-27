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
  users: IUser[] = mockUsers.map(user => {
    return {
      ...user,
      isSelected: false
    }
  });

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

  onSelect(event: any) {
    const id = event.source.id;

    const index = this.users.findIndex(user => user.id === id);

    if(index !== -1) {
      this.users[index] = {
        ...this.users[index],
        isSelected: event.checked
      };
    };

  }

  onSelectAll() {
    this.users = this.users.map(user => {
      return {
        ...user,
        isSelected: true
      }
    });
  }

  onDelete() {
    this.users = this.users.filter(user => !user.isSelected);
  }

  onSort() {

    const newArr = [...this.users].sort((a, b) => a.lastName.localeCompare(b.lastName))

    this.users = newArr;
  }

}
