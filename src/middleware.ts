import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server";

const AUTH_PATHS = "/api/auth";
const LOGIN_PATHS = ["/login"];
const ROLE_TEACHER_PATHS = ["/instructor", "/api/instructor"];
const ROLE_MANAGEMENT_PATHS = ["/management", "/api"];

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname.startsWith("/_image")) {
    return next();
  }
  
  if (context.url.pathname.startsWith(AUTH_PATHS)) {
    return next();
  }

  const isLogInPath = LOGIN_PATHS.some((prefix) =>
    context.url.pathname.startsWith(prefix)
  );

  const session = await getSession(context.request);

  if (session) {
    const { success, role } = await logIn(session.user!.email as string);
    if (!success) {
      context.cookies.delete("__Host-authjs.csrf-token", {
        path: "/",
        secure: true,
      });
      context.cookies.delete("__Secure-authjs.callback-url", {
        path: "/",
        secure: true,
      });
      context.cookies.delete("__Secure-authjs.session-token", {
        path: "/",
        secure: true,
      });

      context.cookies.delete("authjs.csrf-token");
      context.cookies.delete("authjs.callback-url");
      context.cookies.delete("authjs.session-token");

      context.cookies.set("auth", "true", {
        domain: import.meta.env.DOMAIN,
        httpOnly: true,
        maxAge: 10,
        path: "/login",
        sameSite: "lax",
        secure: true,
        encode: (value: string) => value,
        expires: new Date(Date.now() + 10 * 1000),
      });
      return context.redirect("/login", 302);
    }
    if (success) {
      const isTeacher = role.includes("Teacher");
      const isManagement = role.includes("Management");

      if (context.url.pathname === "/login") {
        return context.redirect(isTeacher ? "/instructor" : "/management", 302);
      }

      const currentPath = context.url.pathname;
      const isTeacherPath = ROLE_TEACHER_PATHS.some((path) =>
        currentPath.startsWith(path)
      );
      const isManagementPath = ROLE_MANAGEMENT_PATHS.some((path) =>
        currentPath.startsWith(path)
      );

      if (isTeacher && isTeacherPath) {
        return next();
      }
      if (isManagement && isManagementPath) {
        return next();
      }
      if (isManagement && isTeacherPath) {
        return context.redirect("/management", 302);
      }
      if (isTeacher && isManagementPath) {
        return context.redirect("/instructor", 302);
      }
    }
  }

  if (!session && !isLogInPath) {
    return context.redirect("/login", 302);
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
      console.log(data.user.groups);
      return { success: true, role: data.user.groups };
    }
    console.log("Failed login");
    return { success: false };
  } catch (error) {
    return { success: false };
  }
};
