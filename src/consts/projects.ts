import { Project } from '@/src/types';

export const projects: Project[] = [
  {
    name: 'Mockiato',
    description: 'An open source Chrome extension for intercepting requests, creating real-time mocks, and auto-inserting headers for web development and API testing.',
    link: '/projects/mockiato',
    logoPath: '/logo/mockiato.png',
    logoPlacement: 'left',
    openSource: true,
  },
  {
    name: 'IMDB Random Movie',
    description: 'An open source Chrome extension that helps you discover new films by randomly selecting movies from IMDB watch list. Picks a random movie based on your preferences, making it easy to find your next watch. Perfect for movie nights when you can\'t decide what to watch.',
    link: '/projects/imdb-random-movie',
    logoPath: '/logo/imdb-random.png',
    logoPlacement: 'right',
    openSource: true,
  },
];
