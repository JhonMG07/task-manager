import { Task } from "../TaskApp/TaskApp.types";

export interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
