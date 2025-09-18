import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Update task

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const { completed, status } = await request.json();
  const params = await context.params;

  const updated = await prisma.task.update({
    where: { id: Number(params.id) },
    data: {
      ...(completed !== undefined ? { completed } : {}),
      ...(status ? { status } : {}),
    },
  });

  return NextResponse.json(updated);
}

// Delete task

export async function DELETE(
  _request: Request,
  context: { params: { id: string } }
) {
  const params = await context.params;
  await prisma.task.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ message: "Task deleted" });
}
