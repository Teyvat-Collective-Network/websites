import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    console.log(await request.json());
    console.log(request.headers);

    return new Response();
};
