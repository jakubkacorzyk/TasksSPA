import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TasksTableComponent },
  { path: 'group/:id', component: TasksDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
