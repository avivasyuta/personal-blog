import type { MetadataRoute } from 'next';
import { siteUrl } from '@/src/lib/constant';
import { getPostsByFilter } from '@/src/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/projects', '/projects/meetbell', '/projects/meetbell/privacy', '/projects/mockiato', '/blog'];

  const posts = getPostsByFilter({}).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...pages.map((page) => ({ url: `${siteUrl}${page}` })), ...posts];
}
