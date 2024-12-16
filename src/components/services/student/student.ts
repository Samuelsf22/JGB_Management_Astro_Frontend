import type { Student, Parent, PostStudent } from "@components/types/api";

export const getStudents = async (): Promise<Student[]> => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/students`);
  const data = await response.json();
  return data;
};

export const getStudentById = async (id: string): Promise<Student> => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/students/${id}`);
  const data = await response.json();
  return data;
};

export const getParents = async (): Promise<Parent[]> => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/parents`);
  const data = await response.json();
  return data;
};

export const getParentById = async (id: string): Promise<Parent> => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/parents/${id}`);
  const data = await response.json();
  return data;
};

export const getStudentsByParentId = async (id: string): Promise<Student[]> => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/parents/${id}/students`);
  const data = await response.json();
  return data;
};

export const getParentsByStudentId = async (id: string): Promise<Parent[]> => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/students/${id}/parents`);
  const data = await response.json();
  return data;
};

export const registerStudent = async (studentData: PostStudent) => {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/students/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentData)
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
    console.error('Error completo al registrar el estudiante:', error);
    
    // Si es un error de red u otro tipo
    if (error instanceof TypeError) {
      console.error('Error de red o conexión:', error.message);
    }

    throw error;
  }
};

export const updateStudent = async (id: string, studentData: Partial<Student>) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/students/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  });

  if (!response.ok) {
    throw new Error(`Failed to update student: ${response.statusText}`);
  }

  const student: Student = await response.json();
  return student;
};

export const registerParent = async (parentData: Parent) => {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/parents/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parentData)
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
    console.error('Error completo al registrar el padre:', error);
    
    // Si es un error de red u otro tipo
    if (error instanceof TypeError) {
      console.error('Error de red o conexión:', error.message);
    }

    throw error;
  }
};  

export const updateParent = async (id: string, parentData: Partial<Parent>) => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/parents/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parentData),
  });

  if (!response.ok) {
    throw new Error(`Failed to update parent: ${response.statusText}`);
  }

  const parent: Parent = await response.json();
  return parent;
};  

