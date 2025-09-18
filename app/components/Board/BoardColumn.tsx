"use client";
import { BoardColumnProps } from "./Board.types";

const columnColors: Record<string, string> = {
  todo: "bg-blue-100 text-blue-700",
  inprogress: "bg-yellow-100 text-yellow-700",
  done: "bg-pink-100 text-pink-700",
};

export default function BoardColumn({ title, status, tasks, onMove, onDelete }: BoardColumnProps) {
  return (
    <div className="rounded-xl shadow-lg p-8 bg-white min-w-[320px] max-w-[380px] mx-auto">
      <h2
        className={`font-bold text-xl mb-6 px-4 py-2 rounded-lg inline-block ${columnColors[status]}`}
      >
        {title}
      </h2>
      <div className="space-y-5 min-h-[220px]">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border border-gray-200 rounded-xl shadow flex flex-col gap-3 p-5 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold text-gray-900 text-base break-words w-full pr-2">{task.title}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 hover:text-red-700 text-lg font-bold rounded-full p-1 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-200"
                title="Eliminar"
              >
                ✕
              </button>
            </div>
            {task.description && (
              <div className="text-gray-600 text-sm whitespace-pre-line break-words mb-1">
                {task.description}
              </div>
            )}
            <div className="flex flex-row flex-wrap gap-4 mt-1">
              {status !== "todo" && (
                <button
                  onClick={() => onMove(task.id, "todo")}
                  className="px-5 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-lg shadow-sm border border-blue-200 hover:bg-blue-200 transition-all"
                  title="Mover a To Do"
                >
                  To Do
                </button>
              )}
              {status !== "inprogress" && (
                <button
                  onClick={() => onMove(task.id, "inprogress")}
                  className="px-5 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-lg shadow-sm border border-yellow-200 hover:bg-yellow-200 transition-all"
                  title="Mover a In Progress"
                >
                  In Progress
                </button>
              )}
              {status !== "done" && (
                <button
                  onClick={() => onMove(task.id, "done")}
                  className="px-5 py-1 text-sm font-medium bg-pink-100 text-pink-700 rounded-lg shadow-sm border border-pink-200 hover:bg-pink-200 transition-all"
                  title="Mover a Done"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        ))}
        {tasks.length === 0 && (
          <p className="text-gray-400 text-center text-base">No tasks here</p>
        )}
      </div>
    </div>
  );
}
