import { Component, OnInit } from '@angular/core';

import { IUser } from '../../IUser';
import { mockUsers } from '../../mockUsers';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.scss'],
})
export class UsersTabComponent implements OnInit {
  searchValue: string = '';
  users: IUser[] = [];
  sortingAsc: boolean = true;
  sortIcon: string = 'expand_less';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(
      (users) =>
        (this.users = users.map((user) => {
          return {
            ...user,
            isSelected: false,
          };
        }))
    );
  }

  onSearchInput(value: string) {
    this.searchValue = value;
    this.users = [...mockUsers].filter((user) => {
      const search = value.toLowerCase();
      return user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search);
    });
  }

  onClearSearchInput() {
    this.searchValue = '';
    this.users = mockUsers;
  }

  onSelect(event: any) {
    const id = event.source.id;

    const index = this.users.findIndex((user) => user.id === id);

    if (index !== -1) {
      this.users[index] = {
        ...this.users[index],
        isSelected: event.checked,
      };
    }
  }

  onSelectAll() {
    this.users.forEach((user) => (user.isSelected = true));
  }

  onDelete() {
    this.users = this.users.filter((user) => !user.isSelected);
  }

  getName(user: IUser) {
    return `${user.firstName}${user.lastName}`;
  }

  onSort() {
    this.sortingAsc = !this.sortingAsc;

    this.sortIcon = this.sortingAsc ? 'expand_less' : 'expand_more';

    if (this.sortingAsc) {
      this.users = [...this.users].sort((a, b) => this.getName(b).localeCompare(this.getName(a)));
    } else {
      this.users = [...this.users].sort((a, b) => this.getName(a).localeCompare(this.getName(b)));
    }
  }
}
