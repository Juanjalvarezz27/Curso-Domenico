import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.username) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { username, password } = await req.json();
    const currentUsername = session.user.username;

    // Verificar si el nuevo username ya existe y no es el del usuario actual
    if (username && username !== currentUsername) {
      const existingUser = await prisma.user.findUnique({
        where: { username: username.toLowerCase() }
      });
      if (existingUser) {
        return NextResponse.json({ error: "Este usuario ya está en uso." }, { status: 400 });
      }
    }

    const dataToUpdate: any = {};
    
    if (username) dataToUpdate.username = username.toLowerCase();
    
    if (password && password.trim() !== "") {
      dataToUpdate.password = await bcrypt.hash(password, 10);
    }

    await prisma.user.update({
      where: { username: currentUsername },
      data: dataToUpdate,
    });

    return NextResponse.json({ message: "Perfil actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    return NextResponse.json({ error: "Ocurrió un error en el servidor" }, { status: 500 });
  }
}