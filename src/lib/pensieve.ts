import type { CollectionEntry } from 'astro:content';

export type PensieveEntry = CollectionEntry<'pensieve'>;

export const visiblePensieveEntries = (entries: PensieveEntry[]) =>
  entries.filter((entry) => !import.meta.env.PROD || !entry.data.draft);

export const sortPensieveEntries = (entries: PensieveEntry[]) =>
  [...entries].sort(
    (a, b) => new Date(b.data.date || 0).getTime() - new Date(a.data.date || 0).getTime(),
  );

export const topicToSlug = (topic: string) =>
  topic
    .normalize('NFKC')
    .trim()
    .toLocaleLowerCase('en')
    .replace(/\s+/g, '-')
    .replace(/[^\p{Letter}\p{Number}-]/gu, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
