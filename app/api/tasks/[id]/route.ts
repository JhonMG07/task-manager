import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Update task

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { completed, status } = await request.json();
  const { id } = await params;

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
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.task.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: "Task deleted" });
}
