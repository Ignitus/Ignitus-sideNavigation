import { DarkBlue, Grey, White, WhiteLilac } from './helpers/colors';
import { ThemeWrapperProps } from './components/sideNavigation/component';


export const defaultTheme: ThemeWrapperProps = {
  navBackground: WhiteLilac,
  theme: {
    homeLinkColor: DarkBlue,
    listItemHeadingColor: Grey,
    arrowIconColor: Grey,
    subListItemTextColor: DarkBlue,
    hover: {
      headingColor: Grey,
      navItemTextColor: White,
    },
  },
};
