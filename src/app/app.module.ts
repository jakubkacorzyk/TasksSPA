import { TaskGroupsService } from './services/task-groups.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksTableComponent,
    TasksDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CalendarModule,
    MenubarModule
  ],
  providers: [TaskGroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
