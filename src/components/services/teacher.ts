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

export const getMaterialsByTeacherId = async (id: number) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${id}`);
  const teacher: Teacher = await response.json();
  const materials = teacher.materias.map((materia) => ({
    name: materia.name,
    course: materia.id_course.nombre,
  }));
  return materials;
};

export const getCoursesByTeacherId = async (id: number) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${id}`);
  const teacher: Teacher = await response.json();
  const courses = teacher.materias.map((materia) => ({
    name: materia.id_course.nombre,
    hours: materia.id_course.horas_semanales,
    curriculum: materia.id_course.id_curriculo,
  }));
  return courses;
};

export const getAssistanceByTeacherId = async (
  id_teacher: number,
  id_course: number
) => {
  // const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${id_teacher}`);
  // const teacher: Teacher = await response.json();
  // const courses = teacher.materias.map(materia => materia.id_course);
  return [];
};
