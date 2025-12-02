import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const modules = import.meta.glob('../../projects/*.md');
  const projects = [];
  
  for (const path in modules) {
    const module = await modules[path]();
    const slug = path.split('/').pop()?.replace('.md', '');
    if (module && typeof module === 'object' && 'metadata' in module) {
      projects.push({
        slug,
        ...module.metadata as any
      });
    }
  }
  
  return { projects };
};
