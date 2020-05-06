import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import emotionSerializer, { matchers } from 'jest-emotion';
import renderer from 'react-test-renderer';

import { SideNavigation, ThemeWrapperProps } from '../index';
import { navItems } from './constants';

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

const mockColors = ['#000', '#fff', 'red', 'yellow', 'blue', 'green', 'grey'];

const theme: ThemeWrapperProps = {
  navBackground: mockColors[0],
  theme: {
    textColor: mockColors[1],
    headingColor: mockColors[2],
    arrowIconColor: mockColors[6],
    hover: {
      navItemBackground: mockColors[3],
      headingColor: mockColors[4],
      navItemTextColor: mockColors[5],
    },
  },
};

describe('<SideNavigation />', () => {
  it('should render', () => {
    const component = renderer.create(
      <Router>
        <SideNavigation navItems={navItems} />
      </Router>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with theme', () => {
    const component = renderer.create(
      <Router>
        <SideNavigation navItems={navItems} theme={theme.theme} />
      </Router>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
