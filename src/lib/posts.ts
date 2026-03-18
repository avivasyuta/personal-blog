import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Post, PostsFilter, SimplePost } from '@/src/types';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getPostsByFilter(filter: PostsFilter): SimplePost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map<SimplePost>((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        isMdx: fileName.endsWith('.mdx'),
        complexity: data.complexity,
        tags: data.tags,
        original_url: data.original_url,
      };
    });

  return filterPosts(posts, filter)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  let fullPath = path.join(postsDirectory, `${slug}.mdx`);
  let isMdx = true;

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
    isMdx = false;
  }

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (isMdx) {
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      isMdx: true,
      original_url: data.original_url,
      tags: data.tags,
      complexity: data.complexity,
    };
  }

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content: contentHtml,
    isMdx: false,
    original_url: data.original_url,
  };
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''));
}

export function filterPosts(posts: SimplePost[], filter: PostsFilter): SimplePost[] {
  return posts.filter(({ title, excerpt, complexity, tags = [] }) => {
    if (filter.query && (!title.toLowerCase().includes(filter.query.toLowerCase()) && !excerpt.toLowerCase().includes(filter.query.toLowerCase()))) {
      return false;
    }

    if (filter.complexity && complexity !== filter.complexity) {
      return false;
    }

    if (filter.tags && filter.tags.length > 0) {
      const hasMatchingTag = tags.some((tag) => filter.tags?.includes(tag));
      if (!hasMatchingTag) {
        return false;
      }
    }

    return true;
  });
}