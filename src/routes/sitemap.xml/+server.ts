import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
    const postFiles = import.meta.glob('/src/posts/*.md');
    const projectFiles = import.meta.glob('/src/projects/*.md');

    const postSlugs = Object.keys(postFiles).map(
        (path) => path.split('/').pop()!.replace('.md', '')
    );
    // → ['rust', 'test']

    const projectSlugs = Object.keys(projectFiles).map(
        (path) => path.split('/').pop()!.replace('.md', '')
    );
    // → ['dynamicqrtool', 'geoar', 'inboxinsight', 'queryflowai', 'test']

    return await sitemap.response({
        origin: 'https://www.arkagme.com',
        paramValues: {
            '/blog/[slug]': postSlugs,       // src/routes/blog/[slug]
            '/projects/[slug]': projectSlugs, // src/routes/projects/[slug]
        },
    });
};