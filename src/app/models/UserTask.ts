import { User } from './User';

export interface UserTask {
  id: number;
  name: string;
  deadline: Date;
  user: User;
  status: number;
}

export interface UserTaskForCreation{
  name: string;
  deadline: Date;
  userId: number;
  taskGroupId: number;
  status: number;
}
