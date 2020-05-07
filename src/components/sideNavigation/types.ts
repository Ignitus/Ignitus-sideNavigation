export type navbarTheme = {
  listItemHeadingColor: string;
  homeLinkColor: string;
  arrowIconColor: string;
  navItemBackground: string;
  hover: {
    navItemTextColor: string;
    headingColor: string;
  };
};

export interface ExtensionProps extends LayersProps {
  isExpanded: boolean;
}

export type ArrowProps = {
  isExpanded: boolean;
  nesting?: boolean;
  theme: navbarTheme;
};

export type SubNestingProps = {
  nesting?: boolean;
  level?: number;
  theme: navbarTheme;
};

export interface LayersProps {
  navItem: navItem;
  nesting?: boolean;
  level: number;
}

export interface NavigationLayerProps extends SideNavigationProps {
  nesting?: boolean;
  level: number;
}

export type navItem = {
  title: string;
  route?: string;
  children?: navItem[];
};

export interface SideNavigationProps {
  heading?: {
    title: string;
    route: string;
  };
  navItems: navItem[];
  theme?: navbarTheme;
  navBackground?: string;
}
