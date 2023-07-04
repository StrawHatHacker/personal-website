import { error } from "@sveltejs/kit";
import { projects } from "../../../data";
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const project = projects.find((p) => p.name.toLowerCase() === params['name']);
    if (!project) throw error(404, 'Project not found');

    return { project };
}) satisfies PageLoad;

