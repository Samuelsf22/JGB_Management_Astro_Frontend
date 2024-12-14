import type { ScheduleS, Schedule } from "../../types/api";

export const editSchedule = async (schedule: Schedule) => {
    const response = await fetch(`${import.meta.env.SERVER_URL}/schedules/${schedule.id_schedule}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(schedule),
    });
    const data: ScheduleS = await response.json();
    return data;
};

export const deleteSchedule = async (id: string) => {
    const response = await fetch(`${import.meta.env.SERVER_URL}/schedules/${id}`, {
        method: "DELETE",
    });
    return response;
}