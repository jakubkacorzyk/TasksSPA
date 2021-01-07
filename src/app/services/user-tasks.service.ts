import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserTask } from '../models/UserTask';

@Injectable({
  providedIn: 'root'
})
export class UserTasksService {

  endpoint = "UserTasks";

  constructor(private httpClient: HttpClient) { }

  createUserTask(userTask){
    return this.httpClient.post<UserTask>(environment.apiUrl + "/" + this.endpoint, userTask);
  }

  deleteUserTask(id): Observable<UserTask> {
    return this.httpClient.delete<UserTask>(environment.apiUrl + "/" + this.endpoint + "/" + id);
  }
}
