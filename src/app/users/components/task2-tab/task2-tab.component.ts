import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IUser } from '../../IUser';
import { mockAvatars } from '../../mockAvatars';
import { Task2Service } from '../../task2.service';

@Component({
  selector: 'app-task2-tab',
  templateUrl: './task2-tab.component.html',
  styleUrls: ['./task2-tab.component.scss'],
})
export class Task2TabComponent implements OnInit, OnDestroy {
  searchValue: string = '';
  users: IUser[] = [];
  sortingAsc: boolean = true;
  sortIcon: string = 'expand_less';
  subscriptions: Subscription[] = [];
  addUserButtonTitle: string = 'Add user';

  constructor(private usersService: Task2Service, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    const getUsersSub = this.usersService.getUsers().subscribe(
      (users) =>
        (this.users = users.map((user, index) => {
          return {
            ...user,
            isSelected: false,
            avatar: mockAvatars[index],
          };
        }))
    );

    this.subscriptions.push(getUsersSub);
  }

  onSearchInput(value: string) {
    this.searchValue = value;
    this.users = [...this.users].filter((user) => {
      const search = value.toLowerCase();
      return user.name ? user.name.toLowerCase().includes(search) : '';
    });

    if (value === '') {
      this.getUsers();
    }
  }

  onClearSearchInput() {
    this.searchValue = '';
    this.getUsers();
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
    this.users.forEach((user) => {
      if (user.isSelected) {
        const id = user.id;
        const deleteUserSub = this.usersService.deleteUser(id).subscribe((result) => {
          console.log(result);
          this.users = this.users.filter((user) => user.id !== id);
        });
        this.subscriptions.push(deleteUserSub);
      }
    });
  }

  getName(user: IUser) {
    return user.name || '';
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

  onAdd() {
    this.router.navigate(['/addUser']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
