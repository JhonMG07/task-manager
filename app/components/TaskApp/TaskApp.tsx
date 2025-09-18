"use client";
import { useState, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm";
import Board from "../Board/Board";
import { Task, TaskStatus } from "./TaskApp.types";

export default function TaskApp() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  const addTask = async (title: string, description: string) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description, status: "todo" }),
      headers: { "Content-Type": "application/json" },
    });
    const newTask: Task = await res.json();
    setTasks([...tasks, newTask]);
  };

  const moveTask = async (id: number, newStatus: TaskStatus) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status: newStatus }),
      headers: { "Content-Type": "application/json" },
    });
    const updated: Task = await res.json();
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  const deleteTask = async (id: number) => {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <TaskForm onAdd={addTask} />
      <Board tasks={tasks} onMove={moveTask} onDelete={deleteTask} />
    </>
  );
}
