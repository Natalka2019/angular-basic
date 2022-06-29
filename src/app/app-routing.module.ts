import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFormComponent } from './users/components/add-form/add-form.component';
import { Task1TabComponent } from './users/components/task1-tab/task1-tab.component';
import { Task2TabComponent } from './users/components/task2-tab/task2-tab.component';

const routes: Routes = [
  { path: '', component: Task1TabComponent },
  { path: 'addForm', component: AddFormComponent },
  { path: 'task1', component: Task1TabComponent },
  { path: 'task2', component: Task2TabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
