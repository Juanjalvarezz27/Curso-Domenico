import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// Instanciamos Prisma directo aquí (sin singletons, como pediste)
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Por favor ingresa usuario y contraseña");
        }

        // Buscamos al usuario en la BD de Neon
        const user = await prisma.user.findUnique({
          where: { username: credentials.username }
        });

        if (!user) {
          throw new Error("No existe un usuario con esas credenciales");
        }

        // Comparamos el hash de la contraseña
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);

        if (!passwordMatch) {
          throw new Error("Contraseña incorrecta");
        }

        // Si todo está bien, retornamos el usuario
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          plan: user.plan
        };
      }
    })
  ],
  callbacks: {
    // 1. Metemos el rol y el plan en el Token JWT
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
        token.plan = user.plan;
      }
      return token;
    },
    // 2. Pasamos el Token a la Sesión para poder usarlo en el frontend
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.username = token.username;
        session.user.plan = token.plan;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login', // Aquí es donde NextAuth redirigirá si alguien no está logueado
  },
  session: {
    strategy: "jwt", // Obligatorio al usar Credentials
    maxAge: 30 * 24 * 60 * 60, // 30 días de sesión
  },
  secret: process.env.NEXTAUTH_SECRET, // Asegúrate de tener esto en tu .env
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };