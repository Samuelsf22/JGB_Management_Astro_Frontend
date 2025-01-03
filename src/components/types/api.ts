export type postUser = {
    username:         string;
    email:            string;
    password:         string;
    first_name:       string;
    last_name:        string;
    group_name:     string;
}

export type Teacher = {
    id_teacher: number;
    subjects:   Subject[];
    user:       User;
    specialty:  string;
}

export type Subject = {
    id_subject:     number;
    name:           string;
    course_details: Course;
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
    name:         string;
    weekly_hours: number;
    curriculum:   number;
    school_year:  number;
}

export type Attendance = {
    id_attendance: number;
    date:          Date;
    status:        string;
    student:       Attendance;
}

export type Enrollment = {
    id_enrollment:   number;
    student_details: Student;
    enrollment_date: Date;
    status:          string;
    curriculum:      number;
    courses:         number[];
}


export type Evaluation = {
    id_evaluation: number;
    type:          string;
    grade:         number;
    date:          Date;
}


export type PostCourse = {
    name:        string;
    weekly_hours: number;
    curriculum:    number;
    school_year:   number;
}


export type Curriculum = {
    id_curriculum: number;
    name:          string;
    year:          number;
    status:        string;
}


export type PostEnrollment = {
    id_enrollment:   number;
    student:         number;
    enrollment_date: string;
    status:          string;
    curriculum:      number;
    school_year:     number;
}


export type Student = {
    id_student:      number;
    parent_details:          Parent;
    first_name:      string;
    last_name:       string;
    dni:             string;
    birth_date:      Date;
    enrollment_date: Date;
    address:         string;
}

export type PostStudent = {
    parent:          number;
    first_name:      string;
    last_name:       string;
    dni:             string;
    birth_date:      string;
    enrollment_date: string;
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

export type Schedule = {
    id_schedule: number,
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

export type GetEnrollment = {
    id_enrollment:    number;
    student:          StudentDetails;
    curriculum:       Curriculum;
    enrollment_date:  String;
    status:           string;
    enrolled_courses: EnrolledCourse[];
}


export type EnrolledCourse = {
    id_course:    number;
    curriculum:   number;
    name:         string;
    weekly_hours: number;
    school_year:  number;
}

export type StudentDetails = {
    id_student:      number;
    first_name:      string;
    last_name:       string;
    dni:             string;
    birth_date:      Date;
    enrollment_date: Date;
    address:         string;
    parent:          number;
}
