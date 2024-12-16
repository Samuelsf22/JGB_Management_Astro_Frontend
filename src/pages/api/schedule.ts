import type { ScheduleS } from "@/components/types/api";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const response = await fetch(`${import.meta.env.SERVER_URL}/schedules`);
  const schedules: ScheduleS[] = await response.json();
  return new Response(JSON.stringify(schedules), { status: 200 });
};

export const DELETE: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  const response = await fetch(`${import.meta.env.SERVER_URL}/schedules/${id}/`, {
    method: "DELETE",
  });
  if (response.ok) {
    if (response.status === 204) {
      return new Response(
        JSON.stringify({
          success: true,
        }),
        { status: 200 }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    const errorData = await response.json().catch(() => null);
    console.log(errorData);
    return new Response(
      JSON.stringify({
        success: false,
        error: errorData?.detail || "An error occurred",
      }),
      { status: response.status || 500 }
    );
  }
};
