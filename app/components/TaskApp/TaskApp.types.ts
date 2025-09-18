export type TaskStatus = "todo" | "inprogress" | "done";

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  status: TaskStatus;
  createdAt?: string;
}
