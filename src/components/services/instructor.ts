import type { Teacher } from "../types/api";

export const getTeacherById = async (id: number) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${id}`);
  const teacher: Teacher = await response.json();
  return teacher;
};

export const getTeachers = async () => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers`);
  const teachers: Teacher[] = await response.json();
  return teachers;
};