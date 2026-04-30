import type { PageServerLoad } from './$types';
import experienceData from '$lib/data/experience.json';

export const load: PageServerLoad = async ({ setHeaders }) => {
    setHeaders({ 'Cache-Control': 'public, max-age=3600' });

    // Projects
    let pinnedProjects: any[] = [];
    try {
        const projectModules = import.meta.glob('/src/projects/*.md');
        const projects: any[] = [];
        for (const path in projectModules) {
            const module: any = await projectModules[path]();
            const slug = path.split('/').pop()?.replace('.md', '');
            if (module?.metadata?.pinned) {
                projects.push({ slug, ...module.metadata });
            }
        }
        pinnedProjects = projects.slice(0, 2);
    } catch (e) {
        console.error('projects load failed:', e);
    }

    // Posts
    let latestPosts: any[] = [];
    try {
        const postModules = import.meta.glob('/src/posts/*.md');
        const posts: any[] = [];
        for (const path in postModules) {
            const module: any = await postModules[path]();
            const slug = path.split('/').pop()?.replace('.md', '');
            if (module?.metadata) {
                posts.push({ slug, meta: module.metadata });
            }
        }
        latestPosts = posts
            .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
            .slice(0, 2);
    } catch (e) {
        console.error('posts load failed:', e);
    }

    return {
        experience: experienceData,
        projects: pinnedProjects,
        posts: latestPosts,
        github: {
            commits: [
                {
                    repo: 'arkagme/portfolio-svelte',
                    additions: 161,
                    deletions: 44,
                    commitUrl: 'https://github.com/arkagme/portfolio-svelte/commit/2353fd7fb4076927d2dc8838d9fd7dc2693cfd54',
                    committedDate: '2025-11-29T08:26:53Z',
                    oid: '2353fd7',
                    messageHeadline: 'home screen UI changes',
                    messageBody: ''
                }
                // ...rest of your fallback commits
            ],
            languages: [
                { size: 382007, name: 'JavaScript', color: '#f1e05a' }
                // ...rest of your fallback languages
            ]
        }
    };
};