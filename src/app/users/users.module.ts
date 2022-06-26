import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import {InputClearableComponent} from './inputClearable/input-clearable.component';
import { UsersTabComponent } from './users-tab/users-tab.component'; 



@NgModule({
  declarations: [
    ToolbarComponent,
    UsersListComponent,
    UserCardComponent,
    InputClearableComponent,
    UsersTabComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    UsersTabComponent
  ]
})
export class UsersModule { }
