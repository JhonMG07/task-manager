import { Task, TaskStatus } from "../TaskApp/TaskApp.types";

export interface BoardProps {
  tasks: Task[];
  onMove: (id: number, newStatus: TaskStatus) => void;
  onDelete: (id: number) => void;
}

export interface BoardColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onMove: (id: number, newStatus: TaskStatus) => void;
  onDelete: (id: number) => void;
}
