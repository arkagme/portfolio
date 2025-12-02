// src/routes/rss.xml/+server.ts
import type { RequestHandler } from './$types';

export const prerender = true;

async function getPosts() {
  const modules = import.meta.glob('../../posts/*.md');
  const posts: { slug: string; meta: any }[] = [];

  for (const path in modules) {
    const mod: any = await modules[path]();
    const slug = path.split('/').pop()!.replace('.md', '');
    if (mod?.metadata) {
      posts.push({
        slug,
        meta: mod.metadata
      });
    }
  }

  // newest first
  posts.sort(
    (a, b) =>
      new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return posts;
}

function renderRss(posts: { slug: string; meta: any }[]) {
  const site = 'https://your-domain.com'; // change to your real URL

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Arkaprava Gaine</title>
    <link>${site}</link>
    <description>Personal blog and projects</description>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.meta.title}]]></title>
      <link>${site}/blog/${post.slug}</link>
      <guid>${site}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.meta.description || ''}]]></description>
    </item>`
      )
      .join('')}
  </channel>
</rss>`.trim();
}

export const GET: RequestHandler = async () => {
  const posts = await getPosts();
  const body = renderRss(posts);

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
