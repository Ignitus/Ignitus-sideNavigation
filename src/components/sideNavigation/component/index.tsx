import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

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
import { DarkBlue, Grey, White, WhiteLilac } from '../../../helpers/colors';

import { useToggle } from '../../../helpers/hooks/toogleHook';

interface ThemeWrapperProps {
  navBackground: string;
  theme: navbarTheme;
}

const ThemeWrapper = React.createContext({} as ThemeWrapperProps);

export const SideNavigation: React.FC<SideNavigationProps> = ({
  heading = {
    title: 'Home 👋',
    route: '/',
  },
  navBackground = WhiteLilac,
  navItems,
  theme = {
    textColor: Grey,
    hover: {
      navItemBackground: DarkBlue,
      navItemTextColor: White,
    },
  },
}) => {
  // TO MAKE NAVIGATION OPEN ON (SCREENS > breakPoint) on initial render
  const [isExpanded, toggleExpansion] = useState(window.innerWidth > breakPoint);

  return (
    <ThemeWrapper.Provider value={{ navBackground, theme }}>
      <RightRow background={navBackground}>
        <NavigationContainer>
          <NavigationHeading>
            <Link to={heading.route}>{heading.title}</Link>
            <RightArrow isExpanded={isExpanded} onClick={() => toggleExpansion(!isExpanded)} />
          </NavigationHeading>
          {isExpanded && (
            <NavigationLayersContainer>
              <Divider />
              <NavigationLayers navItems={navItems} level={0} />
            </NavigationLayersContainer>
          )}
        </NavigationContainer>
      </RightRow>
    </ThemeWrapper.Provider>
  );
};

const NavigationLayers: React.FC<NavigationLayerProps> = ({ navItems, nesting, level }) => (
  <React.Fragment>
    {navItems.map((navItem, ind) => (
      <Layers key={`${navItem.title}_${ind}`} navItem={navItem} nesting={nesting} level={level} />
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
          <Arrow isExpanded={isExpanded} nesting={nesting} />
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
