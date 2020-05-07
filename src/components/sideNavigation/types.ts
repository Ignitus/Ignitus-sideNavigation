export type navbarTheme = {
  listItemHeadingColor: string;
  homeLinkColor: string;
  listItemHeadingArrowColor: string;
  subListItemTextColor: string;
  subListItemHeadingColor: string;
  subListItemArrowColor: string;

  hover: {
    subListItemColorOnHover: string;
    subListItemBackgroundOnHover: string;
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
