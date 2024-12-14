import type { PostEnrollment } from "../types/api";

export const registerEnrollment = async (enrollmentData: PostEnrollment) => {
    try {
        const response = await fetch(`${import.meta.env.SERVER_URL}/enrollments/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(enrollmentData)
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
        console.error('Error completo al registrar la matrícula:', error);
        
        // Si es un error de red u otro tipo
        if (error instanceof TypeError) {
        console.error('Error de red o conexión:', error.message);
        }
    
        throw error;
    }
};