import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    role?: string;
    username?: string;
    plan?: string;
  }
  interface Session {
    user: User & {
      role?: string;
      username?: string;
      plan?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    username?: string;
    plan?: string;
  }
}