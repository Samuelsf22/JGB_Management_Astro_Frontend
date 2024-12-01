import type { Course, Teacher } from "../types/api";

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

export const getSubjectsByTeacherId = async (id: string) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${id}`);
  const teacher: Teacher = await response.json();
  const subjects = teacher.subjects.map((subject) => ({
    name: subject.name,
    course: subject.course.name,
  }));
  return subjects;
};

export const getAttendanceByTeacherId = async (
  id_teacher: number,
  id_course: number
) => {
  const response = await fetch(
    `${import.meta.env.SERVER_URL}/teachers/${id_teacher}`
  );
  const teacher: Teacher = await response.json();
  const course = teacher.subjects.find(
    (subject) => subject.course.id_course === id_course
  );
  if (course) {
    const attendances = course.course.attendances.map((attendance) => ({
      date: attendance.date,
      status: attendance.status,
      student: attendance.student,
    }));
    return attendances;
  }
  return [];
};
