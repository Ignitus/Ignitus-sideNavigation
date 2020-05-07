import { DarkBlue, Grey, White, WhiteLilac } from './helpers/colors';

import { ThemeWrapperProps } from './components/sideNavigation/component';

export const defaultTheme: ThemeWrapperProps = {
  navBackground: WhiteLilac,
  theme: {
    headingColor: DarkBlue,
    textColor: Grey,
    arrowIconColor: Grey,
    navItemBackground: DarkBlue,
    hover: {
      headingColor: Grey,
      navItemTextColor: White,
    },
  },
};
