import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/core';

import { SideNavigation, Container, GlobalStyle, LeftRow, RightRow, navItem } from '../../src';

const navItems: navItem[] = [
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
];

export const Preview: React.FC = () => (
  <Router>
    <Global styles={GlobalStyle} />
    <Container>
      <RightRow>
        <SideNavigation navItems={navItems} />
      </RightRow>
      <LeftRow></LeftRow>
    </Container>
  </Router>
);
