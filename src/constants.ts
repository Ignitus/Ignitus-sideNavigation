import { DarkBlue, Black, Grey, White, WhiteLilac } from './helpers/colors';
import { ThemeWrapperProps } from './components/sideNavigation/component';

export const defaultTheme: ThemeWrapperProps = {
  navBackground: WhiteLilac,
  theme: {
    homeLinkColor: Black,
    listItemHeadingColor: DarkBlue,
    arrowIconColor: Grey,
    subListItemTextColor: Black,
    subListItemHeadingColor: Black,
    hover: {
      headingColor: Grey,
      navItemTextColor: White,
    },
  },
};
