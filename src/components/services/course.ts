import type { Course, Teacher } from "../types/api";

export const getCourses = async () => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses`);
  const courses: Course[] = await response.json();
  return courses;
};

export const getCoursesByTeacherId = async (id: string) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${id}`);
  const teacher: Teacher = await response.json();
  const courses: Course[] = teacher.subjects.map((subject) => subject.course);
  return courses;
};

export const getCourseById = async (id: string) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/${id}`);
  const course: Course = await response.json();
  return course;
}
