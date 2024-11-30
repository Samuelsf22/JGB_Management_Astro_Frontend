import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server";

const LOGIN_PATHS = ["/login", "/api"];

const AUTHORIZED_PATHS = ["/"];

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await getSession(context.request);
  let isLogIn = false;
  if (session) {
    isLogIn = await logIn(session!.user!.email as string);
  }

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

  if (session && !isLogIn) {
    context.cookies.delete("authjs.callback-url");
    context.cookies.delete("authjs.csrf-token");
    context.cookies.delete("authjs.session-token");
    context.cookies.set("auth","true", {
      domain: import.meta.env.DOMAIN,
      httpOnly: false,
      maxAge: 20,
      path: "/login",
      sameSite: "strict",
      secure: true,
      encode: (value: string) => value,
      expires: new Date(Date.now() + 20 * 1000),
    });
    return context.redirect("/login", 302);
  }

  if (session && isLogIn) {
    if (context.url.pathname === "/login") {
      return context.redirect("/", 302);
    }
    if (isPrivatePath) {
      return next();
    }
  }

  return next();
});

const logIn = async (email: string) => {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (data.message === "Successful login") {
      console.log("Successful login");
      return true;
    }
    console.log("Failed login");
    return false;
  } catch (error) {
    return false;
  }
};
