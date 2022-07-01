import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { IUser } from '../../IUser';
import { mockAvatars } from '../../mockAvatars';
import { Task2Service } from '../../task2.service';
import { DataService } from '../../data.service';
import { AddFormComponent } from '../add-form/add-form.component';
import { StatusMessageComponent } from '../status-message/status-message.component';

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
  isLoading: boolean = false;
  errorMessage: string = '';
  modalOpen: boolean = false;
  successMessage: string = '';

  constructor(private usersService: Task2Service, private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
    const dataSub = this.dataService.currentUser.subscribe((user) => this.users.unshift(user));
    this.subscriptions.push(dataSub);
  }

  getUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const getUsersSub = this.usersService.getUsers().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.users = response.map((user, index) => {
          return {
            ...user,
            isSelected: false,
            avatar: mockAvatars[index],
          };
        });
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
        this.errorMessage = 'Oooops, something went wrong. Please try again later.';
      },
    });

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
    this.errorMessage = '';
    this.successMessage = '';

    this.users.forEach((user) => {
      if (user.isSelected) {
        const id = user.id;
        const deleteUserSub = this.usersService.deleteUser(id).subscribe({
          next: (response) => {
            const successMessage = `User with id: ${id} was successfully deleted.`;

            this.dialog.open(StatusMessageComponent, {
              data: { errorMessage: '', successMessage },
            });

            this.users = this.users.filter((user) => user.id !== id);
          },
          error: (error) => {
            console.log(error);

            const errorMessage = 'Oooops, something went wrong. Please try again later.';

            this.dialog.open(StatusMessageComponent, {
              data: { errorMessage, successMessage: '' },
            });
          },
        });

        this.subscriptions.push(deleteUserSub);

        //     {
        //       console.log(result);
        //       this.users = this.users.filter((user) => user.id !== id);
        //     });
        //     this.subscriptions.push(deleteUserSub);
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

  openDialog() {
    this.dialog.open(AddFormComponent);
  }

  addUserToList() {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
