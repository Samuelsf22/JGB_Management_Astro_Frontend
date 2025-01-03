import type { Course, Teacher, PostCourse } from "../types/api";
import { getUserByEmail } from "./user";

export const getCourses = async () => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses`);
  const courses: Course[] = await response.json();
  return courses;
};

export const getCoursesByTeacherId = async (email: string) => {
  const user = await getUserByEmail(email);
  const response = await fetch(`${import.meta.env.SERVER_URL}/teachers/${user.teacher}`);
  const teacher: Teacher = await response.json();
  const courses: Course[] = teacher.subjects.map((subject) => subject.course_details);
  return courses;
};

export const getCourseById = async (id: string) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/${id}`);
  const course: Course = await response.json();
  return course;
};

export const registerCourse = async (courseData: PostCourse) => {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/courses/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(courseData)
    });

    // Obtener el texto de error para más detalles
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Detalles del error:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    // Intentar parsear la respuesta como JSON
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error completo al registrar el curso:', error);
    
    // Si es un error de red u otro tipo
    if (error instanceof TypeError) {
      console.error('Error de red o conexión:', error.message);
    }

    throw error;
  }
};


export const editCourse = async (courseData: Course) => {
  const response = await fetch(`https://sga-api-render.onrender.com/api/courses/${courseData.id_course}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  });

  if (!response.ok) {
    throw new Error(`Failed to update course: ${response.statusText}`);
  }

  const course: Course = await response.json();
  return course;
};

export const getCoursesByCurriculumByYear = async (curriculumId: number, year: number) => { 
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/?school_year=${year}&curriculum=${curriculumId}`);
  const courses: Course[] = await response.json();
  return courses;
}