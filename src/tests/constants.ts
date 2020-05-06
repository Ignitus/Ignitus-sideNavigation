import { navItem } from '../index';

export const navItems: navItem[] = [
  {
    title: 'H1',
    route: '/',
  },
  {
    title: 'H2',
    children: [
      {
        title: 'H2.1',
        route: '/h2',
      },
      {
        title: 'H2.2',
        children: [
          {
            title: 'H2.2.1',
            route: '/h21',
          },
        ],
      },
    ],
  },
];
