"use client";
import TaskItem from "../TaskItem/TaskItem";
import { TaskListProps } from "./TaskList.types";

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet 🚀</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
