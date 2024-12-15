import { getUserByEmail } from "@/components/services/user";
import type { Course, Teacher } from "@/components/types/api";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const GET: APIRoute = async ({ request }) => {
  const session = await getSession(request);
  const url = new URL(request.url);
  const type = url.searchParams.get("type");

  switch (type) {
    case "courses": {
      const user = await getUserByEmail(session?.user?.email as string);
      const response = await fetch(
        `${import.meta.env.SERVER_URL}/teachers/${user.teacher}`
      );
      const teacher: Teacher = await response.json();
      const courses: Course[] = teacher.subjects.map(
        (subject) => subject.course_details
      );
      return new Response(JSON.stringify(courses), { status: 200 });
    }
    case "students": {
      const response = await fetch(`${import.meta.env.SERVER_URL}/students`);
      const students = await response.json();
      return new Response(JSON.stringify(students), { status: 200 });
    }
    case "teachers": {
      const response = await fetch(`${import.meta.env.SERVER_URL}/teachers`);
      const teachers = await response.json();
      return new Response(JSON.stringify(teachers), { status: 200 });
    }
    default: {
      return new Response(
        JSON.stringify({ error: `Invalid type parameter: ${type}` }),
        { status: 400 }
      );
    }
  }
};