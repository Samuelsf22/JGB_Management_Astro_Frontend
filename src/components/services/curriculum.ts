import type { Curriculum} from "../types/api";

export async function getCurriculumList(): Promise<Curriculum[]> {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/curriculums/`);
    
    if (!response.ok) {
      throw new Error('No se pudieron cargar los planes de estudio');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener la lista de planes de estudio:', error);
    return []; 
  }
}

export async function getCurriculumById(id: number): Promise<Curriculum | null> {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/curriculums/${id}/`);
    
    if (!response.ok) {
      throw new Error('No se pudo cargar el plan de estudio');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el plan de estudio:', error);
    return null; 
  }
}
export async function getCurriculumByIdByActive(id: number): Promise<Curriculum | null> {
  try {
    const response = await fetch(`${import.meta.env.SERVER_URL}/curriculums/${id}/`);
    
    if (!response.ok) {
      throw new Error('No se pudo cargar el plan de estudio');
    }
    
    const data = await response.json();
    // Filter to return only if the curriculum is active
    if (data && data.active) {
      return data;
    }
    return null;
  } catch (error) {
    console.error('Error al obtener el plan de estudio activo:', error);
    return null; 
  }
}