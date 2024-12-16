import type { Course, PostCourse } from "../../types/api";

export const registerCourse = async (courseData: PostCourse) => {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/courses/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(courseData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Complete error when registering course:', error);
    if (error instanceof TypeError) {
      console.error('Network or connection error:', error.message);
    }
    throw error;
  }
};


export const updateCourse = async (id: string, courseData: Partial<Course>) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/${id}`, {
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