import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Redis } from "@upstash/redis";

const prisma = new PrismaClient();
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
          throw new Error("Credenciales incompletas");
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials.username }
        });

        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          throw new Error("Usuario o contraseña incorrectos");
        }

        // Generamos el ticket único de esta sesión
        const sessionId = crypto.randomUUID();
        
        // Guardamos en Redis: expira en 24h
        await redis.set(`session:${user.id}`, sessionId, { ex: 86400 });

        return {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          plan: user.plan,
          sessionId: sessionId // Importante: lo pasamos aquí
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      // Solo en el login inicial el objeto 'user' existe
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.plan = user.plan;
        token.sessionId = user.sessionId;
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
  pages: { signIn: '/login' },
  session: { strategy: "jwt", maxAge: 8 * 60 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };