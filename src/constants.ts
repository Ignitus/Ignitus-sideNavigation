import { DarkBlue, Grey, White, WhiteLilac } from './helpers/colors';

import { ThemeWrapperProps } from './components/sideNavigation/component';

export const defaultTheme: ThemeWrapperProps = {
  navBackground: WhiteLilac,
  theme: {
    textColor: Grey,
    hover: {
      navItemBackground: DarkBlue,
      navItemTextColor: White,
    },
  },
};
