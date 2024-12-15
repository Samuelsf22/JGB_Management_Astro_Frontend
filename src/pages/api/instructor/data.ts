import { getUserByEmail } from "@/components/services/user";
import type {
  Course,
  Enrollment,
  Student,
  Teacher,
} from "@/components/types/api";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const GET: APIRoute = async ({ request }) => {
  const session = await getSession(request);
  const url = new URL(request.url);
  const type = url.searchParams.get("type");

  switch (type) {
    case "courses":
      return getCourse(session?.user?.email as string);
    case "students":
      return getStudentsByCourseId(url);
    default: {
      return new Response(
        JSON.stringify({ error: `Invalid type parameter: ${type}` }),
        { status: 400 }
      );
    }
  }
};

const getCourse = async (email: string) => {
  const user = await getUserByEmail(email);
  const response = await fetch(
    `${import.meta.env.SERVER_URL}/teachers/${user.teacher}`
  );
  const teacher: Teacher = await response.json();
  const courses: Course[] = teacher.subjects.map(
    (subject) => subject.course_details
  );
  return new Response(JSON.stringify(courses), { status: 200 });
};

export const getStudentsByCourseId = async (url: URL) => {
  const course_id = url.searchParams.get("course_id");
  if (!course_id) {
    return new Response(
      JSON.stringify({ error: "Missing course_id parameter" }),
      { status: 400 }
    );
  }
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/${course_id}/enrollments`);
  const enrollments: Enrollment[] = await response.json();
  const students: Student[] = enrollments.map((enrollment) => enrollment.student_details);
  return new Response(JSON.stringify(students), { status: 200 });
};
