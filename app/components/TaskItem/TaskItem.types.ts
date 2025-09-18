import { Task } from "../TaskApp/TaskApp.types";

export interface TaskItemProps {
  task: Task;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
