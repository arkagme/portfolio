// src/routes/api/github-latest/+server.ts
import type { RequestHandler } from './$types';
import { GITHUB_TOKEN } from '$env/static/private';

export const GET: RequestHandler = async () => {
  try {
    const res = await fetch(
      'https://katib.jasoncameron.dev/v2/commits/latest?username=arkagme',
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`
        }
      }
    );

    if (!res.ok) {
      return new Response(null, { status: 204 }); // no update
    }

    const json = await res.json();

    return new Response(JSON.stringify(json), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      }
    });
  } catch {
    return new Response(null, { status: 204 });
  }
};
