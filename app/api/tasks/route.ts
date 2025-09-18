import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// GET all tasks
export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(tasks);
}

// POST new task
export async function POST(request: Request) {
  const { title, status, description } = await request.json();

  if (!title || title.trim() === "") {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const task = await prisma.task.create({
    data: {
      title,
      status: status || "todo",
      completed: false,
      description: description || null,
    },
  });

  return NextResponse.json(task);
}
