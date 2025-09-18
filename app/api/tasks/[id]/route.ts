import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Update task

export async function PUT(
  request: Request,
  context?: { params: { id: string } }
) {
  const { completed, status } = await request.json();
  const id = context?.params?.id;

  const updated = await prisma.task.update({
    where: { id: Number(id) },
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
  context?: { params: { id: string } }
) {
  const id = context?.params?.id;
  await prisma.task.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: "Task deleted" });
}
