import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from './IUser';

@Injectable()
export class Task2Service {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  public deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  public addUser(user: IUser): Observable<IUser> {
    const httpOptions = {
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.http.post<IUser>(`https://jsonplaceholder.typicode.com/users/`, httpOptions);
  }
}
