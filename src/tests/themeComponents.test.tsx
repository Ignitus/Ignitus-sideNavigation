import React from 'react';
import renderer from 'react-test-renderer';
import emotionSerializer, { matchers } from 'jest-emotion';

import { defaultTheme } from '../constants';
import { Arrow, Heading, ListItem, NavigationHeading } from '../components/sideNavigation/styles';
import { RightRow } from '../styles';

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

test('Side Navigation Background', () => {
  const tree = renderer.create(<RightRow background={defaultTheme.navBackground}>Content</RightRow>).toJSON();

  expect(tree).toHaveStyleRule('background-color', defaultTheme.navBackground);
});

test('Navigation Home Link Color', () => {
  const tree = renderer.create(<NavigationHeading theme={defaultTheme.theme}>Heading</NavigationHeading>).toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.homeLinkColor, { target: /a$/ });
});

test('List Item Heading Arrow Color', () => {
  const tree = renderer.create(<Arrow theme={defaultTheme.theme} isExpanded />).toJSON();

  expect(tree).toHaveStyleRule('fill', defaultTheme.theme.listItemHeadingArrowColor);
});

test('Sub List Item Heading Arrow Color', () => {
  const tree = renderer.create(<Arrow theme={defaultTheme.theme} nesting isExpanded />).toJSON();

  expect(tree).toHaveStyleRule('fill', defaultTheme.theme.subListItemHeadingArrowColor);
});

test('List Item Heading Color', () => {
  const tree = renderer.create(<Heading theme={defaultTheme.theme}>Heading</Heading>).toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.listItemHeadingColor);
});

test('Sub List Item Heading Color', () => {
  const tree = renderer
    .create(
      <Heading theme={defaultTheme.theme} nesting>
        Heading
      </Heading>,
    )
    .toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.subListItemHeadingColor);
});

test('List Item background color on hover', () => {
  const tree = renderer.create(<ListItem theme={defaultTheme.theme}>Item</ListItem>).toJSON();

  expect(tree).toHaveStyleRule('background-color', defaultTheme.theme.hover.subListItemBackgroundOnHover, {
    target: ':hover',
  });
});

test('List Item text color on hover', () => {
  const tree = renderer.create(<ListItem theme={defaultTheme.theme}>Item</ListItem>).toJSON();

  expect(tree).toHaveStyleRule('color', defaultTheme.theme.hover.subListItemColorOnHover, { target: ':hover' });
});
