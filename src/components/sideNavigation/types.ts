export interface ExtensionProps extends LayersProps {
  isExpanded: boolean;
}

export type ArrowProps = {
  isExpanded: boolean;
  nesting?: boolean;
};

export type SubNestingProps = {
  nesting?: boolean;
  level?: number;
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
  navItems: navItem[];
}
