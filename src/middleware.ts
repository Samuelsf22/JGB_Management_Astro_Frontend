import { defineMiddleware } from "astro/middleware";
import { getSession } from "auth-astro/server";

const PUBLIC_PATHS = [
  "/login",
  "/api/auth/callback/google",
  "/api/auth/csrf",
  "/api/auth/signin/google",
];

const AUTHORIZED_PATHS = ["/"];

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await getSession(context.request);

  if (!session && !PUBLIC_PATHS.includes(context.url.pathname)) {
    return context.redirect("/login");
  }

  if (session && context.url.pathname === "/login") {
    return context.redirect("/");
  }

  if (session && AUTHORIZED_PATHS.includes(context.url.pathname)) {
    return next();
  }

  return next();
});
