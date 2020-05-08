import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import emotionSerializer, { matchers } from 'jest-emotion';
import renderer from 'react-test-renderer';

import { SideNavigation, ThemeWrapperProps } from '../index';
import { navItems } from './constants';

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

const mockColors = ['#000', '#fff', '#ff0000', '#000066', '#2D2D2D'];

const theme: ThemeWrapperProps = {
  navBackground: mockColors[0],
  theme: {
    homeLinkColor: mockColors[0],
    listItemHeadingColor: mockColors[3],
    listItemHeadingArrowColor: mockColors[3],
    subListItemTextColor: mockColors[0],
    subListItemHeadingColor: mockColors[0],
    subListItemHeadingArrowColor: mockColors[2],
    hover: {
      subListItemBackgroundOnHover: mockColors[3],
      subListItemColorOnHover: mockColors[1],
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
