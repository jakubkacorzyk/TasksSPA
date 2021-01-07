import { TaskGroup } from './../models/TaskGroup';
import { TaskGroupsService } from '../services/task-groups.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {

  constructor(private taskGroupService: TaskGroupsService) { }

  taskGroups: TaskGroup[];

  ngOnInit(): void {
    this.getTaskGroups();
  }

  getTaskGroups(){
    this.taskGroupService.getTaskGroups().subscribe(groups => {
      this.taskGroups = groups;
    });
  }

  deleteTaskGroup(id: number) {
    this.taskGroupService.deleteTaskGroup(id).subscribe(() => {
      this.getTaskGroups();
    })
  }


}
