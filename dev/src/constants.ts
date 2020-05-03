import { navItem } from '../../src';

export const navItems: navItem[] = [
  {
    title: 'Atoms',
    children: [
      {
        title: 'Color Palette',
        route: '/colors',
      },
      {
        title: 'Iconography',
        route: '/icons',
      },
      {
        title: 'Input Fields',
        children: [
          {
            title: 'Search',
            route: '/interface/searchInput',
          },
          {
            title: 'Primary',
            route: '/interface/primaryInput',
          },
        ],
      },
    ],
  },
  {
    title: 'Molecules',
    children: [
      {
        title: 'Overlay',
        route: '/overlay',
      },
      {
        title: 'Banners',
        route: '/interface/banner',
      },
    ],
  },
  {
    title: 'Atoms',
    children: [
      {
        title: 'Color Palette',
        route: '/colors',
      },
      {
        title: 'Iconography',
        route: '/icons',
      },
      {
        title: 'Input Fields',
        children: [
          {
            title: 'Search',
            route: '/interface/searchInput',
          },
          {
            title: 'Primary',
            route: '/interface/primaryInput',
          },
        ],
      },
    ],
  },
  {
    title: 'Molecules',
    children: [
      {
        title: 'Overlay',
        route: '/overlay',
      },
      {
        title: 'Banners',
        route: '/interface/banner',
      },
    ],
  },
  {
    title: 'Atoms',
    children: [
      {
        title: 'Color Palette',
        route: '/colors',
      },
      {
        title: 'Iconography',
        route: '/icons',
      },
      {
        title: 'Input Fields',
        children: [
          {
            title: 'Search',
            route: '/interface/searchInput',
          },
          {
            title: 'Primary',
            route: '/interface/primaryInput',
          },
          {
            title: 'Molecules',
            children: [
              {
                title: 'Overlay',
                route: '/overlay',
              },
              {
                title: 'Banners',
                route: '/interface/banner',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Molecules',
    children: [
      {
        title: 'Overlay',
        route: '/overlay',
      },
      {
        title: 'Banners',
        route: '/interface/banner',
      },
    ],
  },
];
