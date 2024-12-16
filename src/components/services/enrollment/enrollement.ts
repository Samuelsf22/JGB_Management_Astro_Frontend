import type { PostEnrollment } from "../../types/api";

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

export const editEnrollment = async (enrollmentData: PostEnrollment) => {
    try {
        const response = await fetch(`${import.meta.env.SERVER_URL}/enrollments/${enrollmentData.id_enrollment}/`, {
        method: 'PUT',
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
        console.error('Error completo al editar la matrícula:', error);
        
        // Si es un error de red u otro tipo
        if (error instanceof TypeError) {
        console.error('Error de red o conexión:', error.message);
        }
    
        throw error;
    }
};

export const deleteEnrollment = async (id: string) => {
    try {
        const response = await fetch(`${import.meta.env.SERVER_URL}/enrollments/${id}`, {
        method: 'DELETE'
        });
    
        // Obtener el texto de error para más detalles
        if (!response.ok) {
        const errorText = await response.text();
        console.error('Detalles del error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
    
        return response;
    } catch (error) {
        console.error('Error completo al eliminar la matrícula:', error);
        
        // Si es un error de red u otro tipo
        if (error instanceof TypeError) {
        console.error('Error de red o conexión:', error.message);
        }
    
        throw error;
    }
};

export const getEnrollment = async () => {
    try {
        const response = await fetch(`${import.meta.env.SERVER_URL}/enrollments`);
        const enrollments: PostEnrollment[] = await response.json();
        return enrollments;
    } catch (error) {
        console.error('Error completo al obtener las matrículas:', error);
        
        // Si es un error de red u otro tipo
        if (error instanceof TypeError) {
        console.error('Error de red o conexión:', error.message);
        }
    
        throw error;
    }
};


