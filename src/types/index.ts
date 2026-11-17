import type { ReactNode } from 'react';

export type Location = {
  city: string;
  country: string;
};

export type Complexity = 'hard' | 'medium' | 'easy';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  isMdx?: boolean;
  complexity?: Complexity;
  tags?: string[];
  original_url?: string;
};

export type SimplePost = Omit<Post, 'content'>;

export type Position = {
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
  bullets?: Array<string>;
  skills?: Array<string>;
};

export type CompanyGroup = {
  company: string;
  companyDescription?: string;
  companyLogoPath: string;
  companyLink: string;
  positions: Position[];
};

export type Project = {
  name: string;
  description: string;
  tagline: string;
  platform: string;
  link: string;
  logoPath: string;
  accent: string;
  preview: ReactNode;
  // Classes for the preview's wrapper in a home card on a phone, where a wide preview shrinks too small to read:
  // they enlarge it and pick the part of it that stays in the card
  cardPreviewClassName?: string;
};

export type PostsFilter = {
  query?: string;
  complexity?: Complexity;
  tags?: string[];
};
