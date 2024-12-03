export type postUser = {
    username:         string;
    email:            string;
    password:         string;
    first_name:       string;
    last_name:        string;
}

export type Teacher = {
    id_teacher: number;
    subjects:   Subject[];
    user:       User;
    specialty:  string;
}

export type Subject = {
    id_subject: number;
    name:       string;
    course:     CourseClass;
}

export type TeacherClass = {
    id_teacher: number;
    specialty:  string;
    user:       number;
}

export type User = {
    id:               number;
    groups:           string[];
    teacher:          number;
    last_login:       null;
    is_superuser:     boolean;
    first_name:       string;
    last_name:        string;
    is_staff:         boolean;
    is_active:        boolean;
    email:            string;
    user_permissions: any[];
}

export type Course = {
    id_course:    number;
    enrollments:  Enrollment[];
    attendances:  Attendance[];
    evaluations:  Evaluation[];
    name:         string;
    weekly_hours: number;
    curriculum:   Curriculum;
}

export type Attendance = {
    id_attendance: number;
    date:          Date;
    status:        string;
    student:       Attendance;
    course:        CourseClass;
}

export type CourseClass = {
    id_course:    number;
    name:         string;
    weekly_hours: number;
    curriculum:   number;
}

export type Curriculum = {
    id_curriculum: number;
    name:          string;
    year:          number;
    status:        string;
    school_year:   number;
}

export type Enrollment = {
    id_enrollment:   number;
    student:         Student;
    enrollment_date: Date;
    status:          string;
    curriculum:      number;
    courses:         number[];
}

export type Student = {
    id_student:      number;
    parent:          Parent;
    first_name:      string;
    last_name:       string;
    dni:             string;
    birth_date:      Date;
    enrollment_date: Date;
    address:         string;
}

export type Parent = {
    id_parent:    number;
    dni:          string;
    first_name:   string;
    last_name:    string;
    phone_number: string;
    address:      string;
}

export type Evaluation = {
    id_evaluation: number;
    type:          string;
    grade:         number;
    date:          Date;
    course:        CourseClass;
}