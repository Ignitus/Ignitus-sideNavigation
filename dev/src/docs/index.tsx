import React from 'react';

import { ThemeWrapperProps } from '../../../src/components/sideNavigation/component';
import { NavigationHeading as Heading } from '../../../src/components/sideNavigation/styles';

import { Emoji } from './components/Emoji';
import { Column, Input, MediumHeading, Row, Table } from './styles';

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
        <Column glow>Background Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#000"
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
            placeholder="#000"
            value={theme.theme.listItemHeadingColor}
            onChange={e => {
              updateTheme({
                ...theme,
                theme: {
                  ...theme.theme,
                  listItemHeadingColor: e.target.value,
                },
              });
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Home Link Color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#000"
            value={theme.theme.homeLinkColor}
            onChange={e => {
              updateTheme({
                ...theme,
                theme: {
                  ...theme.theme,
                  homeLinkColor: e.target.value,
                },
              });
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Sub List Item Text :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#000"
            value={theme.theme.subListItemTextColor}
            onChange={e => {
              updateTheme({
                ...theme,
                theme: {
                  ...theme.theme,
                  subListItemTextColor: e.target.value,
                  hover: {
                    ...theme.theme.hover,
                  },
                },
              });
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Hover text color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#000"
            value={theme.theme.hover.navItemTextColor}
            onChange={e => {
              updateTheme({
                ...theme,
                theme: {
                  ...theme.theme,
                  hover: {
                    ...theme.theme.hover,
                    navItemTextColor: e.target.value,
                  },
                },
              });
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Hover heading color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#000"
            value={theme.theme.hover.headingColor}
            onChange={e => {
              updateTheme({
                ...theme,
                theme: {
                  ...theme.theme,
                  hover: {
                    ...theme.theme.hover,
                    headingColor: e.target.value,
                  },
                },
              });
            }}
          />
        </Column>
      </Row>
      <br />
      <Row>
        <Column glow>Arrow Icon color :</Column>
        <Column>
          <Input
            type="text"
            placeholder="#000"
            value={theme.theme.arrowIconColor}
            onChange={e => {
              updateTheme({
                ...theme,
                theme: {
                  ...theme.theme,
                  arrowIconColor: e.target.value,
                },
              });
            }}
          />
        </Column>
      </Row>
    </Table>
  </React.Fragment>
);
