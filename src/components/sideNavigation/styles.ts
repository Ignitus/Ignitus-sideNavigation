import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { breakPoint, flexibleRowDiv, maximumWidthQuery, minimumWidthQuery } from '../../styles';
import { Arrow as A } from '../Arrow';
import { Grey } from '../../helpers/colors';
import { ArrowProps, navbarTheme, SubNestingProps } from './types';
import { SM, XL, Bold, Medium } from '../../helpers/fonts';

const margin = '1rem';

export const NavigationContainer = styled.nav`
  width: 100%;
  padding-left: 2rem;
`;

export const NavigationLayersContainer = styled.div`
  display: ${(props: { isExpanded: boolean }) => (props.isExpanded ? 'block' : 'none')};
  ${maximumWidthQuery[3]} {
    height: 100vh;
  }
  ${minimumWidthQuery[3]} {
    display: block;
  }
`;

export const RightArrow = styled(A, { shouldForwardProp: isPropValid })<ArrowProps>`
  height: 2rem;
  margin-left: auto;
  display: none;
  margin-right: 2rem;
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;

  ${maximumWidthQuery[3]} {
    display: block;
  }
`;

export const Arrow = styled(A, { shouldForwardProp: isPropValid })<ArrowProps>`
  height: ${props => (props.nesting ? '1.5rem' : '2rem')};
  fill: ${props => (props.nesting ? props.theme.arrowIconColor : props.theme.hover.navItemBackground)};
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;
`;

export const NavigationHeading = styled.h1<{ theme?: navbarTheme }>`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    color: ${props => (props.theme ? props.theme.headingColor : Grey)};
    &:hover {
      color: ${props => (props.theme && props.theme.hover ? props.theme.hover.headingColor : '')};
    }
  }
`;

export const Divider = styled.hr`
  opacity: 0.5;
  margin: ${margin} 0;
`;

export const Heading = styled.h5<SubNestingProps>`
  font-size: ${props => (props.nesting ? SM : XL)};
  color: ${props => (props.nesting ? props.theme.textColor : props.theme.hover.navItemBackground)};
  font-weight: ${props => (props.nesting ? Bold : Medium)};
  padding: ${props => (props.nesting ? '0.5rem' : '0')};
  margin: 0;
`;

export const UnorderedList = styled.ul<ArrowProps>`
  list-style: none;
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }
`;

export const ListItem = styled.li<SubNestingProps>`
  padding: 0.5rem;
  margin-left: ${props => (props.level ? `${props.level / 3}rem` : '0rem')};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.hover.navItemBackground};
    color: ${props => props.theme.hover.navItemTextColor};
  }
`;

export const HeadingArrowContainer = styled(flexibleRowDiv)<SubNestingProps>`
  margin-top: ${props => (props.nesting ? '0' : '1rem')};
  margin-bottom: ${props => (props.nesting ? '0' : '0.5rem')};
  margin-left: ${props => (props.level ? `${props.level / 3}rem` : '0rem')};
  justify-content: unset;
  align-items: center;
  cursor: pointer;
`;
