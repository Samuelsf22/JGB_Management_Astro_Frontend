import type { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  const response = await fetch(`${import.meta.env.SERVER_URL}/courses/${id}/`, {
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
    return new Response(
      JSON.stringify({
        success: false,
        error: errorData?.message || "No se pudo eliminar el curso.",
      }),
      { status: response.status || 500 }
    );
  }
};
