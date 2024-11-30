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
    course:     Course;
    teacher:    TeacherClass;
}

export type TeacherClass = {
    id_teacher: number;
    specialty:  string;
    user:       number;
}

export type User = {
    id:               number;
    groups:           string[];
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
    attendances:  Attendance[];
    evaluations:  Evaluation[];
    name:         string;
    weekly_hours: number;
    curriculum:   number;
}

export type Attendance = {
    id_attendance: number;
    date:          Date;
    status:        string;
    student:       Student;
    course:        CourseClass;
}

export type CourseClass = {
    id_course:    number;
    name:         string;
    weekly_hours: number;
    curriculum:   number;
}

export type Student = {
    id_student:      number;
    first_name:      string;
    last_name:       string;
    dni:             string;
    birth_date:      Date;
    enrollment_date: Date;
    address:         string;
    parent:          number;
}

export type Evaluation = {
    id_evaluation: number;
    type:          string;
    grade:         number;
    date:          Date;
    student:       Student;
    course:        CourseClass;
}
