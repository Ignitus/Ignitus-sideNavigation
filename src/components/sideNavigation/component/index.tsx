import React from 'react';
import { Link } from 'react-router-dom';

import { ExtensionProps, LayersProps, NavigationLayerProps, SideNavigationProps } from '../types';
import {
  Divider,
  Heading,
  HeadingArrowContainer,
  ListItem,
  NavigationContainer,
  NavigationHeading,
  UnorderedList,
  Arrow,
} from '../styles';

import { useToggle } from '../../../helpers/hooks/toogleHook';

export const SideNavigation: React.FC<SideNavigationProps> = ({ navItems }) => (
  <NavigationContainer>
    <NavigationHeading>
      <Link to="/">Home 👋</Link>
    </NavigationHeading>
    <Divider />
    <NavigationLayers navItems={navItems} level={0} />
  </NavigationContainer>
);

const NavigationLayers: React.FC<NavigationLayerProps> = ({ navItems, nesting, level }) => (
  <React.Fragment>
    {navItems.map(navItem => (
      <Layers navItem={navItem} key={navItem.title} nesting={nesting} level={level} />
    ))}
  </React.Fragment>
);

const Layers: React.FC<LayersProps> = ({ navItem, nesting, level }) => {
  const [isExpanded, toggleExpansion] = useToggle(false);

  return (
    <React.Fragment>
      {!!navItem.children && (
        <HeadingArrowContainer onClick={toggleExpansion} nesting={nesting} level={level}>
          {' '}
          <Heading nesting={nesting}>{navItem.title}</Heading> <Arrow isExpanded={isExpanded} nesting={nesting} />
        </HeadingArrowContainer>
      )}

      <Extension isExpanded={isExpanded} navItem={navItem} level={level} nesting={nesting} />
    </React.Fragment>
  );
};

const Extension: React.FC<ExtensionProps> = ({ navItem, isExpanded, level, nesting }) => {
  if (navItem.route) {
    return (
      <Link to={navItem.route}>
        <ListItem nesting={nesting} level={level}>{navItem.title}</ListItem>
      </Link>
    );
  }
  return (
    navItem.children && (
      <UnorderedList isExpanded={isExpanded}>
        <NavigationLayers navItems={navItem.children} nesting={true} level={level + 1} />
      </UnorderedList>
    )
  );
};
