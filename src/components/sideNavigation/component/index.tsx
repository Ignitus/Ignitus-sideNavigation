import React, { useContext, useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import { ExtensionProps, LayersProps, NavigationLayerProps, SideNavigationProps, navbarTheme } from '../types';
import {
  Divider,
  Heading,
  HeadingArrowContainer,
  ListItem,
  NavigationContainer,
  NavigationHeading,
  NavigationLayersContainer,
  RightArrow,
  UnorderedList,
  Arrow,
} from '../styles';
import { breakPoint, RightRow } from '../../../styles';
import { useToggle } from '../../../helpers/hooks/toogleHook';

import { defaultTheme } from '../../../constants';

export interface ThemeWrapperProps {
  navBackground: string;
  theme: navbarTheme;
}

const ThemeWrapper = React.createContext({} as ThemeWrapperProps);

export const SideNavigation: React.FC<SideNavigationProps> = ({
  heading = {
    title: 'Home 👋',
    route: '/',
  },
  navBackground = defaultTheme.navBackground,
  navItems,
  theme = defaultTheme.theme,
}) => {
  // TO MAKE NAVIGATION OPEN ON (SCREENS > breakPoint) on initial render
  const [isExpanded, toggleExpansion] = useState(window.innerWidth > breakPoint);

  return (
    <BrowserRouter>
      <ThemeWrapper.Provider value={{ navBackground, theme }}>
        <RightRow background={navBackground}>
          <NavigationContainer>
            <NavigationHeading theme={theme}>
              <Link to={heading.route}>{heading.title}</Link>
              <RightArrow isExpanded={isExpanded} onClick={() => toggleExpansion(!isExpanded)} />
            </NavigationHeading>
            <NavigationLayersContainer isExpanded={isExpanded}>
              <Divider />
              <NavigationLayers navItems={navItems} level={0} />
            </NavigationLayersContainer>
          </NavigationContainer>
        </RightRow>
      </ThemeWrapper.Provider>
    </BrowserRouter>
  );
};

const NavigationLayers: React.FC<NavigationLayerProps> = ({ navItems, nesting, level }) => (
  <React.Fragment>
    {navItems.map((navItem, index) => (
      <Layers key={`${navItem.title}_${index}`} navItem={navItem} nesting={nesting} level={level} />
    ))}
  </React.Fragment>
);

const Layers: React.FC<LayersProps> = ({ navItem, nesting, level }) => {
  const [isExpanded, toggleExpansion] = useToggle(level === 0);

  const { theme } = useContext(ThemeWrapper);

  return (
    <React.Fragment>
      {!!navItem.children && (
        <HeadingArrowContainer theme={theme} onClick={toggleExpansion} nesting={nesting} level={level}>
          {' '}
          <Heading theme={theme} nesting={nesting}>
            {navItem.title}
          </Heading>{' '}
          <Arrow theme={theme} isExpanded={isExpanded} nesting={nesting} />
        </HeadingArrowContainer>
      )}

      <Extension isExpanded={isExpanded} navItem={navItem} level={level} nesting={nesting} />
    </React.Fragment>
  );
};

const Extension: React.FC<ExtensionProps> = ({ navItem, isExpanded, level, nesting }) => {
  const { theme } = useContext(ThemeWrapper);

  if (navItem.route) {
    return (
      <Link to={navItem.route}>
        <ListItem theme={theme} nesting={nesting} level={level}>
          {navItem.title}
        </ListItem>
      </Link>
    );
  }
  return (
    navItem.children && (
      <UnorderedList isExpanded={isExpanded} theme={theme}>
        <NavigationLayers navItems={navItem.children} level={level + 1} nesting />
      </UnorderedList>
    )
  );
};
