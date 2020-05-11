import React from 'react';

import { ThemeWrapperProps } from '../../../src/components/sideNavigation/component';
import { NavigationHeading as Heading } from '../../../src/components/sideNavigation/styles';

import { Emoji } from './components/Emoji';
import { Column, Input, MediumHeading, Row, Table } from './styles';
import { deepUpdateObject } from './helpers';

interface DocsProps {
  theme: ThemeWrapperProps;
  updateTheme: React.Dispatch<React.SetStateAction<ThemeWrapperProps>>;
}

export const Docs: React.FC<DocsProps> = ({ theme, updateTheme }) => (
  <React.Fragment>
    <Heading style={{ cursor: 'pointer' }}>
      <u>API</u>
      <Emoji emoji="🚀" label="teacher" />
    </Heading>
    <MediumHeading>{'<SideNavigation />'}</MediumHeading>

    <Table>
      <Row>
        <Column glow>Home Link Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.homeLinkColor}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'homeLinkColor'], e.target.value) as ThemeWrapperProps);
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Background Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.navBackground}
            onChange={e => {
              updateTheme({
                ...theme,
                navBackground: e.target.value,
              });
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>List Item Heading Color:</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.listItemHeadingColor}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'listItemHeadingColor'], e.target.value));
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>List Item Heading Arrow Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.listItemHeadingArrowColor}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'listItemHeadingArrowColor'], e.target.value));
              updateTheme({
                ...theme,
                theme: {
                  ...theme.theme,
                  listItemHeadingArrowColor: e.target.value,
                },
              });
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Sub List Item Text Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.subListItemTextColor}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'subListItemTextColor'], e.target.value));
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Sub List Item Heading Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.subListItemHeadingColor}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'subListItemHeadingColor'], e.target.value));
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Sub List Item Heading Arrow Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.subListItemHeadingArrowColor}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'subListItemHeadingArrowColor'], e.target.value));
            }}
          />
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column glow>Sub List Item Background on Hover :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.hover.subListItemBackgroundOnHover}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'hover', 'subListItemBackgroundOnHover'], e.target.value));
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Sub List Item Color On Hover :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#fff"
            value={theme.theme.hover.subListItemColorOnHover}
            onChange={e => {
              updateTheme(deepUpdateObject(theme, ['theme', 'hover', 'subListItemColorOnHover'], e.target.value));
            }}
          />
        </Column>
      </Row>
      <br />
    </Table>
  </React.Fragment>
);
