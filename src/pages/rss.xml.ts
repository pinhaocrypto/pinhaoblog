import { getCollection } from 'astro:content';

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    };
    return entities[character];
  });

export async function GET({ site }: { site: URL | undefined }) {
  const baseURL = site ?? new URL('http://localhost:4321');
  const posts = (await getCollection('pensieve'))
    .filter((post) => !post.data.draft)
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));

  const items = posts.map((post) => {
    const link = new URL(`/pensieve/${post.slug}/`, baseURL).toString();
    const description = post.data.description ?? `閱讀 ${post.data.title}`;
    const published = post.data.date?.toUTCString();

    return `
      <item>
        <title>${escapeXml(post.data.title ?? post.slug)}</title>
        <link>${escapeXml(link)}</link>
        <guid>${escapeXml(link)}</guid>
        <description>${escapeXml(description)}</description>
        ${published ? `<pubDate>${published}</pubDate>` : ''}
      </item>`;
  }).join('');

  const channelURL = new URL('/pensieve/', baseURL).toString();
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Pin Hao</title>
        <link>${escapeXml(channelURL)}</link>
        <description>Notes, essays, questions, memories, and things I may understand differently later.</description>
        <language>zh-TW</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
