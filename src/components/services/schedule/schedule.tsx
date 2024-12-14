import type { ScheduleS } from "../../types/api";

export const getSchedule = async () => {
    const response = await fetch(`${import.meta.env.SERVER_URL}/schedules`);
    const schedule: ScheduleS[] = await response.json();
    return schedule;
}