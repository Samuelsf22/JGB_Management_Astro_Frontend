import { useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editSchedule } from "@components/services/schedule"
import type { ScheduleS } from "@components/types/api";

interface EditProps {
  schedule: ScheduleS;          
  onUpdate: () => void;
}

export function Edit({ schedule, onUpdate }: EditProps) {
  const [formData, setFormData] = useState({
    course: schedule.course || 0,
    day: schedule.day,
    classroom: schedule.classroom,
    start_time: schedule.start_time || '',
    end_time: schedule.end_time || ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'course' || name === 'classroom' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await editSchedule({
        ...schedule,
        ...formData
      });
      onUpdate();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error updating schedule');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Schedule</DialogTitle>
            <DialogDescription>
              Make changes to the schedule here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">Course</Label>
              <Input
                id="course"
                name="course"
                type="number"
                value={formData.course}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="day" className="text-right">Day</Label>
              <Input
                id="day"
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="classroom" className="text-right">Classroom</Label>
              <Input
                id="classroom"
                name="classroom"
                type="number"
                value={formData.classroom}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="start_time" className="text-right">Start Time</Label>
              <Input
                id="start_time"
                name="start_time"
                type="time"
                value={formData.start_time}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="end_time" className="text-right">End Time</Label>
              <Input
                id="end_time"
                name="end_time"
                type="time"
                value={formData.end_time}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save changes'}
              </Button>
            </DialogClose>              
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}