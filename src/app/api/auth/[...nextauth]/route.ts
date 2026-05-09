import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Redis } from "@upstash/redis";

const prisma = new PrismaClient();

// Conectamos Redis para guardar el ticket de sesión
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

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

        const user = await prisma.user.findUnique({
          where: { username: credentials.username }
        });

        if (!user) {
          throw new Error("No existe un usuario con esas credenciales");
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.password);

        if (!passwordMatch) {
          throw new Error("Contraseña incorrecta");
        }

        // ==========================================
        // GENERACIÓN DE SESIÓN ÚNICA (Anti-piratería)
        // ==========================================
        const sessionId = crypto.randomUUID(); // Ticket único
        
        // Guardamos el ticket en Redis. Expira en 8 horas (igual que el JWT)
        await redis.set(`session:${user.id}`, sessionId, { ex: 8 * 60 * 60 });

        return {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          plan: user.plan,
          sessionId: sessionId // Pasamos el ticket al token
        } as any; // Usamos 'any' para evitar que TS se queje de los campos extra
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.plan = user.plan;
        token.sessionId = user.sessionId; // Guardamos el ticket en la galleta
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.username = token.username;
        session.user.plan = token.plan;
        session.user.sessionId = token.sessionId;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 horas
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };