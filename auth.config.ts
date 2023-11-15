import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // So this syntax is to know the truth of auth?.user,
      // so that instead of getting pretty much the result of auth.user,
      // it obtains whether auth.user does exist (true) or not (false).
      const protectedPaths = ["/dashboard", "/customers", "/invoices"];
      const isProtectedPath = protectedPaths.some((path) =>
        nextUrl.pathname.startsWith(path),
      );

      if (isProtectedPath) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
