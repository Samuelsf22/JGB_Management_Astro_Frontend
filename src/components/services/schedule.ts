import type { Schedule, ScheduleS } from "../types/api";

export const registerSchule = async (scheduleData: Schedule) => {
    try {
        const response = await fetch(`${import.meta.env.SERVER_URL}/schedules/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(scheduleData)
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
        console.error('Error completo al registrar el horario:', error);
        
        // Si es un error de red u otro tipo
        if (error instanceof TypeError) {
        console.error('Error de red o conexión:', error.message);
        }
    
        throw error;
    }
}

export const getSchedules = async () => {
    const response = await fetch(`${import.meta.env.SERVER_URL}/schedules`);
    const schedules: ScheduleS[] = await response.json();
    return schedules;
}