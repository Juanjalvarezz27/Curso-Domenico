import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// ACTUALIZAR USUARIO (PUT)
export async function PUT(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Await a los params (Regla de Next.js 15+)
    const { id } = await params;

    const body = await request.json();
    const { name, username, phone, plan, hasPaid, password } = body;

    // Preparamos los datos básicos a actualizar
    const updateData: any = {
      name,
      username,
      phone,
      plan,
      hasPaid: Boolean(hasPaid),
    };

    // Si escribió una nueva contraseña, la encriptamos
    if (password && password.trim() !== "") {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: "El username ya está en uso" }, { status: 400 });
    }
    return NextResponse.json({ error: "Error al actualizar el usuario" }, { status: 500 });
  }
}

// ELIMINAR USUARIO (DELETE)
export async function DELETE(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Await a los params
    const { id } = await params;

    await prisma.user.delete({
      where: { id },
    });
    
    return NextResponse.json({ message: "Usuario eliminado correctamente" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar el usuario" }, { status: 500 });
  }
}