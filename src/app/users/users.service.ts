import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {IUser} from "./IUser";
import {mockUsers} from "./mockUsers";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers():Observable<IUser[]> {
    const users = of(mockUsers);
    return users;
  }
}
