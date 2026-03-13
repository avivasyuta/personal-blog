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
};

export type SimplePost = Omit<Post, 'content'>;

export type WorkExperience = {
  company: string;
  companyLogoPath: string;
  companyLink: string;
  position: string;
  startDate: string;
  endDate: string;
  description?: string;
  bullets?: Array<string>;
  skills?: Array<string>;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  logoPath: string;
  logoPlacement: 'left' | 'right';
  openSource?: boolean;
};

export type PostsFilter = {
  query?: string;
  complexity?: Complexity;
  tags?: string[];
};