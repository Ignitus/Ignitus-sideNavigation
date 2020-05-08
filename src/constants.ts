import { DarkBlue, Black, White, WhiteLilac, Red } from './helpers/colors';
import { ThemeWrapperProps } from './components/sideNavigation/component';

export const defaultTheme: ThemeWrapperProps = {
  navBackground: WhiteLilac,
  theme: {
    homeLinkColor: Black,
    listItemHeadingColor: DarkBlue,
    listItemHeadingArrowColor: DarkBlue,
    subListItemTextColor: Black,
    subListItemHeadingColor: Black,
    subListItemHeadingArrowColor: Red,
    hover: {
      subListItemBackgroundOnHover: DarkBlue,
      subListItemColorOnHover: White,
    },
  },
};
