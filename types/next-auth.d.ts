import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & { role?: string | null };
  }

  interface User {
    role?: string | null;
  }
}