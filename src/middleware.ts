import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server";

const LOGIN_PATHS = ["/login", "/api"];

const AUTHORIZED_PATHS = ["/"];

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await getSession(context.request);

  if (context.url.pathname.startsWith("/_image")) {
    return next();
  }

  const isLogInPath = LOGIN_PATHS.some((prefix) =>
    context.url.pathname.startsWith(prefix)
  );
  const isPrivatePath = AUTHORIZED_PATHS.some((prefix) =>
    context.url.pathname.startsWith(prefix)
  );

  if (!session && !isLogInPath) {
    return context.redirect("/login", 302);
  }

  if (session && context.url.pathname === "/login") {
    return context.redirect("/", 302);
  }

  if (session && isPrivatePath) {
    return next();
  }

  return next();
});
