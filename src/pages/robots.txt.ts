export function GET({ site }: { site: URL | undefined }) {
  const baseURL = site ?? new URL('http://localhost:4321');
  const sitemapURL = new URL('/sitemap-index.xml', baseURL);

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapURL}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
