export type User = {
    id:               number;
    password:         string;
    last_login:       Date | null;
    is_superuser:     boolean;
    username:         string;
    first_name:       string;
    last_name:        string;
    email:            string;
    is_staff:         boolean;
    is_active:        boolean;
    date_joined:      Date;
    groups:           number[];
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


export type PostCourse = {
    name:        string;
    weekly_hours: number;
    curriculum:    number;
    school_year:   number;
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
    school_year:  number;
}

export type Curriculum = {
    id_curriculum: number;
    name:          string;
    year:          number;
    status:        string;
}

export type Enrollment = {
    student:         Student;
    enrollment_date: Date;
    status:          string;
    curriculum:      number;
    courses:         number[];
}

export type PostEnrollment = {
    student:         number;
    enrollment_date: string;
    status:          string;
    curriculum:      number;
    school_year:     number;
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


export type Schedule = {
    course: number,
    day: String,
    classroom: number,
    start_time: String,
    end_time: String
}

export type ScheduleS = {
    id_schedule:       number;
    classroom:         number;
    classroom_details: ClassroomDetails;
    course:            number | null;
    course_details:    CourseDetails | null;
    teacher:           TeacherS | null;
    day:               string;
    start_time:        null | string;
    end_time:          null | string;
}

export type ClassroomDetails = {
    id_classroom: number;
    name:         string;
    capacity:     number;
}

export type CourseDetails = {
    id_course:    number;
    curriculum:   number;
    name:         string;
    weekly_hours: number;
    school_year:  number | null;
}

export type TeacherS = {
    id_teacher: number;
    name:       string;
    specialty:  string;
}
