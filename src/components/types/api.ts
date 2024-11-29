export type postUser = {
    username:         string;
    email:            string;
    password:         string;
    first_name:       string;
    last_name:        string;
}

export type Teacher = {
    id:        number;
    materias:  Materia[];
    specialty: string;
    user:      User;
}

export type Materia = {
    id_materia: number;
    name:       string;
    id_course:  IDCurso;
    id_teacher: IDTeacher;
}

export type IDTeacher = {
    id:        number;
    specialty: string;
    user:      number;
}

export type User = {
    id:               number;
    password:         string;
    last_login:       null;
    is_superuser:     boolean;
    username:         string;
    first_name:       string;
    last_name:        string;
    is_staff:         boolean;
    is_active:        boolean;
    date_joined:      Date;
    email:            string;
    groups:           number[];
    user_permissions: any[];
}

export type Course = {
    id_curso:        number;
    asistencias:     Asistencia[];
    evaluaciones:    any[];
    nombre:          string;
    horas_semanales: number;
    id_curriculo:    number;
}

export type Asistencia = {
    id_asistencia: number;
    fecha:         Date;
    estado:        string;
    id_alumno:     IDAlumno;
    id_curso:      IDCurso;
}

export type IDAlumno = {
    id_alumno:         number;
    nombre:            string;
    apellido:          string;
    dni:               string;
    fecha_nacimiento:  Date;
    fecha_inscripcion: Date;
    direccion:         string;
    id_representante:  number;
}

export type IDCurso = {
    id_curso:        number;
    nombre:          string;
    horas_semanales: number;
    id_curriculo:    number;
}