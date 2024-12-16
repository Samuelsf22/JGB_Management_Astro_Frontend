import type { Student } from "@/components/types/api";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/students`);
  const students: Student[] = await response.json();
  return new Response(JSON.stringify(students), { status: 200 });
};
