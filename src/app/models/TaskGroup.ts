import { UserTask } from "./UserTask";

export interface TaskGroup {
  id: number;
  name: string;
  userTasks: UserTask[]
}
