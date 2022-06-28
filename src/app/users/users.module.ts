import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {InputClearableComponent} from './components/inputClearable/input-clearable.component';
import { UsersTabComponent } from './components/users-tab/users-tab.component';
import { ButtonComponent } from './components/button/button.component'; 



@NgModule({
  declarations: [
    ToolbarComponent,
    UsersListComponent,
    UserCardComponent,
    InputClearableComponent,
    UsersTabComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    UsersTabComponent
  ]
})
export class UsersModule { }
