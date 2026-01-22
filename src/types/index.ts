export type Location = {
  city: string;
  country: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

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
};
