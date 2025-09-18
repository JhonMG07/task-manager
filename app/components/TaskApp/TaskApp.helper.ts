import { Task } from "./TaskApp.types";

/**
 * Ordena tareas por fecha de creación (más recientes primero).
 */
export function sortTasksByDate(tasks: Task[]): Task[] {
  return [...tasks].sort(
    (a, b) =>
      new Date(b.createdAt ?? "").getTime() -
      new Date(a.createdAt ?? "").getTime()
  );
}

/**
 * Filtra solo las tareas completadas.
 */
export function filterCompleted(tasks: Task[]): Task[] {
  return tasks.filter((t) => t.completed);
}

/**
 * Filtra solo las tareas pendientes.
 */
export function filterPending(tasks: Task[]): Task[] {
  return tasks.filter((t) => !t.completed);
}
