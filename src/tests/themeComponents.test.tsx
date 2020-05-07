import React from 'react';
import renderer from 'react-test-renderer';
import emotionSerializer, { matchers } from 'jest-emotion';

import { defaultTheme } from '../constants';
import { Arrow, Heading, ListItem, NavigationHeading } from '../components/sideNavigation/styles';
import { RightRow } from '../styles';

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

test('SideNavigation background', () => {
  const tree = renderer.create(<RightRow background={defaultTheme.navBackground}>Content</RightRow>).toJSON();

  expect(tree).toHaveStyleRule('background-color', defaultTheme.navBackground);
});

test('NavigationHeading color & hover color', () => {
  const tree = renderer.create(<NavigationHeading theme={defaultTheme.theme}>Heading</NavigationHeading>).toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.headingColor, { target: /a$/ });
});

test('Arrow Icon color for Headings', () => {
  const tree = renderer.create(<Arrow theme={defaultTheme.theme} isExpanded />).toJSON();

  expect(tree).toHaveStyleRule('fill', defaultTheme.theme.hover.subListItemTextColor);
});

test('Arrow Icon color for SubHeadings', () => {
  const tree = renderer.create(<Arrow theme={defaultTheme.theme} nesting isExpanded />).toJSON();

  expect(tree).toHaveStyleRule('fill', defaultTheme.theme.listItemHeadingArrowColor);
});

test('Nav Items Heading color', () => {
  const tree = renderer.create(<Heading theme={defaultTheme.theme}>Heading</Heading>).toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.hover.subListItemTextColor);
});

test('Nav Items Sub Heading color', () => {
  const tree = renderer
    .create(
      <Heading theme={defaultTheme.theme} nesting>
        Heading
      </Heading>,
    )
    .toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.listItemHeadingColor);
});

test('ListItem background color on hover', () => {
  const tree = renderer.create(<ListItem theme={defaultTheme.theme}>Item</ListItem>).toJSON();

  expect(tree).toHaveStyleRule('background-color', defaultTheme.theme.hover.subListItemTextColor, { target: ':hover' });
});

test('ListItem text color on hover', () => {
  const tree = renderer.create(<ListItem theme={defaultTheme.theme}>Item</ListItem>).toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.hover.navItemTextColor, { target: ':hover' });
});
