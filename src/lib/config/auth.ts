import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Role } from "@/lib/enum/role.enum";


export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.access_token = token.access_token;
        session.user.refresh_token = token.refresh_token;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.role = user.role;
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "password", type: "password" },
        name: { label: "name", type: "text", placeholder: "name" },
        confirmPassword: { label: "confirmPassword", type: "password" },
        signup: { label: "", type: "boolean" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          if (credentials.signup) {
            const createdUser = await fetch(`${process.env.API_URL}/user`, {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            });
            await createdUser.json();
          } else {
            const res = await fetch(`${process.env.API_URL}/user/signin`, {
              method: "POST",
              body: JSON.stringify({email: credentials.email, password: credentials.password}),
              headers: { "Content-Type": "application/json" },
            });
            const user = await res.json();
            if (res.ok && user) {
              return user;
            }
          }
        }
        return null;
      },
    }),
  ],
};
