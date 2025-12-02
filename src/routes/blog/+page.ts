import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const modules = import.meta.glob('../../posts/*.md');
  const posts: { slug: string | undefined; meta: any }[] = [];

  for (const path in modules) {
    const module = await modules[path]();
    const slug = path.split('/').pop()?.replace('.md', '');
    if (module && typeof module === 'object' && 'metadata' in module) {
      posts.push({
        slug,
        meta: module.metadata as any
      });
    }
  }

  // sort newest first
  posts.sort(
    (a, b) =>
      new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return { posts };
};
