import { CardTable } from "@/components/ui/CardTable";
import { columns } from "./columns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import type { Course } from "@/components/types/api";
import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface Props {
  showActions?: boolean;
}

export function StudentTable({ showActions = false }: Props) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseId, setCourseId] = useState<number>(0);

  useEffect(() => {
    fetch("/api/instructor/data?type=courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCourseChange = (value: string) => {
    const selectedCourse = courses.find((course) => course.name === value);
    if (selectedCourse) {
      setCourseId(selectedCourse.id_course);
    }
  };

  return (
    <>
      <Card className="mb-4">
        <CardHeader>
          <CardDescription>
            <form className="flex items-center gap-4" action="submit">
              <Label htmlFor="course">Select a course</Label>
              <Select onValueChange={handleCourseChange}>
                <SelectTrigger className="w-96">
                  <SelectValue placeholder="Courses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Courses</SelectLabel>
                    {courses.map((course) => (
                      <SelectItem key={course.id_course} value={course.name}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </CardDescription>
        </CardHeader>
      </Card>
      {courseId !== 0 && (
        <CardTable
          title="Students List"
          url={`/api/instructor/data?type=students&&course_id=${courseId}`}
          columns={columns({ showActions })}
          key={courseId}
        />
      )}
    </>
  );
}
