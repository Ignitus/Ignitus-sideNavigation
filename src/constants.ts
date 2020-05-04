import { DarkBlue, Grey, White, WhiteLilac } from './helpers/colors';

import { ThemeWrapperProps } from './components/sideNavigation/component';

export const defaultTheme: ThemeWrapperProps = {
  navBackground: WhiteLilac,
  theme: {
    headingColor: DarkBlue,
    textColor: Grey,
    hover: {
      headingColor: Grey,
      navItemBackground: DarkBlue,
      navItemTextColor: White,
    },
  },
};
