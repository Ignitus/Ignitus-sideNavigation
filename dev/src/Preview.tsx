import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/core';

import { SideNavigation, Container, GlobalStyle, LeftRow, RightRow, navItem } from '../../src';

const navItems: navItem[] = [
  {
    title: 'First',
    route: 'hell',
  },
  {
    title: 'Second',
    children: [
      {
        title: 'Second First',
        route: 'hi',
      },
    ],
  },
  {
    title: 'Third',
    route: 'b',
  },
  {
    title: 'Second',
    children: [
      {
        title: 'Second First',
        route: 'hi',
      },
      {
        title: 'Second',
        children: [
          {
            title: 'Second First',
            route: 'hi',
          },
        ],
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
      <LeftRow>hello</LeftRow>
    </Container>
  </Router>
);
