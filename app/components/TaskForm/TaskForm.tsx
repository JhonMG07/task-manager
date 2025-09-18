"use client";

import { useState } from "react";
import { TaskFormProps } from "./TaskForm.types";


export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="flex flex-row h-[70px] gap-2 mb-4 w-[600px] p-4 bg-white rounded-lg shadow">
        <input
          className="border rounded-md p-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task..."
        />
        <input
          className="border rounded-md p-2 flex-1 resize-y"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md self-end"
        >
          Add
        </button>
      </div>
    </form>
  );
}
