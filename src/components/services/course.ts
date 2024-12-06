import type { Course, Teacher, Enrollment, Student } from "../types/api";
import { getUserByEmail } from "./user";

export const getCourses = async () => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses`);
  const courses: Course[] = await response.json();
  return courses;
};

export const getCourseById = async (id: string) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/${id}`);
  const course: Course = await response.json();
  return course;
};

export const getCoursesByTeacherId = async (email: string) => {
  const user = await getUserByEmail(email);
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${user.teacher}`);
  const teacher: Teacher = await response.json();
  const courses: Course[] = teacher.subjects.map((subject) => subject.course_details);
  return courses;
};

export const getStudentsByCourseId = async (id: string) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/${id}/enrollments`);
  const enrollments: Enrollment[] = await response.json();
  const students: Student[] = enrollments.map((enrollment) => enrollment.student_details);
  return students;
};
