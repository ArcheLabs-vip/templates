import type { APIRoute } from 'astro';
import { site } from '../data/site';
export const GET: APIRoute = () => new Response(
  site.demo ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site.url)}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
