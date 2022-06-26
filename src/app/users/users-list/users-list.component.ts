import { Component, OnInit, Input } from '@angular/core';
import {IUser} from "../IUser";
import {mockUsers} from "../mockUsers";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() usersList: IUser[] = [];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
