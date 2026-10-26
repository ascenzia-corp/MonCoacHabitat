import type { APIRoute } from 'astro';

export const prerender = true;

/** Trailing slashes match the canonical URLs produced by the static build. */
const paths = ['/', '/prestations/', '/academie/', '/demande/', '/mentions-legales/'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://www.moncoachhabitat.fr/').replace(/\/$/, '');
  const urls = paths.map((path) => `  <url><loc>${base}${path}</loc>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
