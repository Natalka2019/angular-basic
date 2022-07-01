import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './IUser';

@Injectable()
export class DataService {
  private userSource = new BehaviorSubject<IUser>({
    id: 0,
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    avatar: '',
    isSelected: false,
  });
  currentUser = this.userSource.asObservable();

  constructor() {}

  addUserToList(user: IUser) {
    this.userSource.next(user);
  }
}
