import React from 'react';

import { ThemeWrapperProps } from '../../../src/components/sideNavigation/component';
import { NavigationHeading as Heading } from '../../../src/components/sideNavigation/styles';

import { Emoji } from './components/Emoji';
import { Input, ListItem, MediumHeading } from './styles';

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

    <ListItem>
      Background :
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
    </ListItem>

    <ListItem>
      Text color :
      <Input
        type="text"
        placeholder="#000"
        value={theme.theme.textColor}
        onChange={e => {
          updateTheme({
            ...theme,
            theme: {
              ...theme.theme,
              textColor: e.target.value,
            },
          });
        }}
      />
    </ListItem>

    <ListItem>
      Heading color :
      <Input
        type="text"
        placeholder="#000"
        value={theme.theme.headingColor}
        onChange={e => {
          updateTheme({
            ...theme,
            theme: {
              ...theme.theme,
              headingColor: e.target.value,
            },
          });
        }}
      />
    </ListItem>

    <ListItem>
      Hover background :
      <Input
        type="text"
        placeholder="#000"
        value={theme.theme.hover.navItemBackground}
        onChange={e => {
          updateTheme({
            ...theme,
            theme: {
              ...theme.theme,
              hover: {
                ...theme.theme.hover,
                navItemBackground: e.target.value,
              },
            },
          });
        }}
      />
    </ListItem>

    <ListItem>
      Hover text color :
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
    </ListItem>

    <ListItem>
      Hover heading color :
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
    </ListItem>
  </React.Fragment>
);
