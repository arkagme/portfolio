import type { PageLoad } from './$types';
import experienceData from '$lib/data/experience.json';

export const load: PageLoad = async ({ data }) => {
  // Load projects
  const projectModules = import.meta.glob('../projects/*.md');
  const projects = [];
  
  for (const path in projectModules) {
    const module = await projectModules[path]();
    const slug = path.split('/').pop()?.replace('.md', '');
    if (module && typeof module === 'object' && 'metadata' in module) {
      const metadata = module.metadata as any;
      if (metadata.pinned) {
        projects.push({
          slug,
          ...metadata
        });
      }
    }
  }

  // Load latest 2 blog posts
  const postModules = import.meta.glob('../posts/*.md');
  const posts = [];

  for (const path in postModules) {
    const module = await postModules[path]();
    const slug = path.split('/').pop()?.replace('.md', '');
    if (module && typeof module === 'object' && 'metadata' in module) {
      posts.push({
        slug,
        meta: module.metadata as any
      });
    }
  }

  // Sort posts by date (newest first) and take top 2
  const latestPosts = posts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  }).slice(0, 2);

  // Sort projects by date if needed, or keep as is
  // Limit to top 2
  const pinnedProjects = projects.slice(0, 2);
  
  return {
    experience: experienceData,
    projects: pinnedProjects,
    posts: latestPosts,
    github: data?.github // Pass through server data
  };
};
