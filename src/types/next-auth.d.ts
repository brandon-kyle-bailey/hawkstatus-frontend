import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Role } from "../lib/enum/role.enum";

/**
 * The shape of the user object returned in the OAuth providers' `profile` callback,
 * or the second parameter of the `session` callback, when using a database.
 */
interface IUser extends DefaultUser {
  role?: Role;
  access_token?: string;
  refresh_token?: string;
}

/**
 * Usually contains information about the provider being used
 * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
 */
interface Account {}

/** The OAuth profile returned from your provider */
interface Profile {}

declare module "next-auth" {
  interface User extends IUser {}
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends IUser {}
}
