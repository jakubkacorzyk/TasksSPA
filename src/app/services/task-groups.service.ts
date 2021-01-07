import { TaskGroup } from '../models/TaskGroup';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsService {

  endpoint = "TaskGroups";

  constructor(private httpClient: HttpClient) { }

  getTaskGroups(): Observable<TaskGroup[]> {
    return this.httpClient.get<TaskGroup[]>(environment.apiUrl + "/" + this.endpoint);
  }

  getTaskGroup(id): Observable<TaskGroup> {
    return this.httpClient.get<TaskGroup>(environment.apiUrl + "/" + this.endpoint + "/" + id);
  }

  deleteTaskGroup(id): Observable<TaskGroup> {
    return this.httpClient.delete<TaskGroup>(environment.apiUrl + "/" + this.endpoint + "/" + id);
  }

  createTaskGroup(taskGroup): Observable<TaskGroup> {
    return this.httpClient.post<TaskGroup>(environment.apiUrl + "/" + this.endpoint, taskGroup);
  }

  updateTaskGroup(taskGroup): Observable<TaskGroup> {
    return this.httpClient.put<TaskGroup>(environment.apiUrl + "/" + this.endpoint + "/" + taskGroup.id, taskGroup);
  }
}
