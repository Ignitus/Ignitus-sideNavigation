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
} from '../styles';

import { useToggle } from '../../../helpers/hooks/toogleHook';

export const SideNavigation: React.FC<SideNavigationProps> = ({ navItems }) => (
  <NavigationContainer>
    <NavigationHeading>
      <Link to="/">Home</Link>
    </NavigationHeading>
    <Divider />
    <NavigationLayers navItems={navItems} level={0} />
  </NavigationContainer>
);

const NavigationLayers: React.FC<NavigationLayerProps> = ({ navItems, nesting, level }) => (
  <>
    {navItems.map(navItem => (
      <Layers navItem={navItem} key={navItem.title} nesting={nesting} level={level} />
    ))}
  </>
);

const Layers: React.FC<LayersProps> = ({ navItem, nesting, level }) => {
  const [isExpanded, toggleExpansion] = useToggle(false);

  return (
    <>
      {!!navItem.children && (
        <HeadingArrowContainer onClick={toggleExpansion} nesting={nesting} level={level}>
          {' '}
          <Heading nesting={nesting}>{navItem.title}</Heading>{' '}
        </HeadingArrowContainer>
      )}

      <Extension isExpanded={isExpanded} navItem={navItem} level={level} nesting={nesting} />
    </>
  );
};

const Extension: React.FC<ExtensionProps> = ({ navItem, isExpanded, level, nesting }) =>
  navItem.route ? (
    <Link to={navItem.route}>
      <ListItem level={level}>{navItem.title}</ListItem>
    </Link>
  ) : (
    !!navItem.children && (
      <UnorderedList isexpanded={isExpanded}>
        <NavigationLayers navItems={navItem.children} nesting={nesting} level={level + 1} />
      </UnorderedList>
    )
  );
