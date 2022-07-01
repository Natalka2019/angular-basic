import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task1TabComponent } from './users/components/task1-tab/task1-tab.component';
import { Task2TabComponent } from './users/components/task2-tab/task2-tab.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'task1', component: Task1TabComponent },
  { path: 'task2', component: Task2TabComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
