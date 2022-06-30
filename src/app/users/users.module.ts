import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { InputClearableComponent } from './components/inputClearable/input-clearable.component';
import { Task1TabComponent } from './components/task1-tab/task1-tab.component';
import { Task2TabComponent } from './components/task2-tab/task2-tab.component';
import { ButtonComponent } from './components/button/button.component';
import { AddFormComponent } from './components/add-form/add-form.component';

import { Task1Service } from './task1.service';
import { Task2Service } from './task2.service';

@NgModule({
  declarations: [
    ToolbarComponent,
    UsersListComponent,
    UserCardComponent,
    InputClearableComponent,
    Task1TabComponent,
    Task2TabComponent,
    ButtonComponent,
    AddFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [Task1TabComponent, Task2TabComponent],
  providers: [Task1Service, Task2Service],
})
export class UsersModule {}
