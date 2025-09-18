"use client";
import { BoardProps } from "./Board.types";
import BoardColumn from "./BoardColumn";

export default function Board({ tasks, onMove, onDelete }: BoardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full max-w-[1400px] mx-auto px-2">
      <BoardColumn
        title="To Do"
        status="todo"
        tasks={tasks.filter((t) => t.status === "todo")}
        onMove={onMove}
        onDelete={onDelete}
      />
      <BoardColumn
        title="In Progress"
        status="inprogress"
        tasks={tasks.filter((t) => t.status === "inprogress")}
        onMove={onMove}
        onDelete={onDelete}
      />
      <BoardColumn
        title="Done"
        status="done"
        tasks={tasks.filter((t) => t.status === "done")}
        onMove={onMove}
        onDelete={onDelete}
      />
    </div>
  );
}
