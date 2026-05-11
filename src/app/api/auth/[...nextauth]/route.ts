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

        // Ya NO generamos el ticket aquí para evitar el bug de la doble llamada de NextAuth.
        // Solo devolvemos la info del usuario.
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          plan: user.plan,
        } as any;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      // El objeto 'user' solo existe la PRIMERA vez que se crea el token (al iniciar sesión).
      // ¡Este es el lugar perfecto y seguro para generar el ticket único!
      if (user) {
        const sessionId = crypto.randomUUID();
        
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.plan = user.plan;
        token.sessionId = sessionId;

        // Guardamos el ticket en Redis por 24 horas
        await redis.set(`session:${user.id}`, sessionId, { ex: 86400 });
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