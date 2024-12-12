import type { Classroom } from "../types/api";

export async function getClassroomList(): Promise<Classroom[]> {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/classrooms/`);
    
    if (!response.ok) {
      throw new Error('No se pudieron cargar las aulas');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener la lista de aulas:', error);
    return []; 
  }
}
