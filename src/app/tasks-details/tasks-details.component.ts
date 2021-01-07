import { UserTaskForCreation } from './../models/UserTask';
import { UserTasksService } from './../services/user-tasks.service';
import { users } from './../models/User';
import { TaskGroupsService } from '../services/task-groups.service';
import { TaskGroup } from './../models/TaskGroup';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserTask } from '../models/UserTask';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css']
})
export class TasksDetailsComponent implements OnInit {
  groupId: number;
  taskGroup: TaskGroup;
  tasksLoaded = false;
  usersList = users;
  statuses = [{ name: "New", value: 0 }, { name: "InProgress", value: 1 }, { name: "Completed", value: 2 }];

  taskForm = new FormGroup({
    name: new FormControl(''),
    deadline: new FormControl(new Date),
    userId: new FormControl(1),
    status: new FormControl(0)
  });

  constructor(private route: ActivatedRoute, private taskGroupsService: TaskGroupsService, private userTasksService: UserTasksService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groupId = +params['id'];
      if (this.groupId !== 0) {
        this.getTaskGroup(this.groupId);
      }
      else {
        this.taskGroup = { id: 0, name: '', userTasks: [] }
        this.tasksLoaded = true;
      }
    });
    this.usersList.map(user => user.combinedName = user.firstName + " " + user.lastName);
  }

  getTaskGroup(id) {
    this.taskGroupsService.getTaskGroup(id).subscribe(task => {
      this.taskGroup = task;
      this.tasksLoaded = true;
    })
  }

  submit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      let newTask = this.taskForm.value as UserTaskForCreation;
      newTask.taskGroupId = this.groupId;
      console.log(newTask);
      this.userTasksService.createUserTask(newTask).subscribe(task => {
        this.getTaskGroup(this.groupId);
      })
    }
  }

  deleteUserTask(id) {
    this.userTasksService.deleteUserTask(id).subscribe(() => {
      this.getTaskGroup(this.groupId);
    });
  }

  createTaskGroup(){
    this.taskGroupsService.createTaskGroup(this.taskGroup).subscribe(x => {
      this.groupId = x.id;
      this.getTaskGroup(this.groupId);
    })
  }
  updateTaskGroup(){
    this.taskGroupsService.updateTaskGroup(this.taskGroup).subscribe(x => {
      this.groupId = x.id;
      this.getTaskGroup(this.groupId);
    })
  }
}
