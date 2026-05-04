import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-outfit font-black text-texto-principal mb-2">
        Tus <span className="text-acento-naranja">Cursos</span>
      </h1>
      <p className="text-gray-500 font-medium">Hola {session?.user?.username}. Este es tu espacio de aprendizaje.</p>
    </main>
  );
}