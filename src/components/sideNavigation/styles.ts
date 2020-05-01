import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { breakPoint, flexibleRowDiv } from '../../styles';
import { Arrow as A } from '../Arrow';
import { Grey, GreyLightS2, DarkBlue, White } from '../../helpers/colors';
import { ArrowProps, SubNestingProps } from './types';
import { SM, XL, Bold, Medium } from '../../helpers/fonts';

const margin = '1rem';

export const NavigationContainer = styled.nav`
  width: 100%;
  padding-left: 2rem;
  @media (max-width: ${breakPoint}px) {
    position: fixed;
    overflow-y: auto;
    z-index: 1;
    background: ${GreyLightS2};
  }
`;

export const NavigationLayersContainer = styled.div`
  @media (max-width: ${breakPoint}px) {
    height: 100vh;
  }
`;

export const RightArrow = styled(A, { shouldForwardProp: isPropValid })<ArrowProps>`
  height: 2rem;
  margin-left: auto;
  margin-right: 2rem;
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;
  @media (min-width: ${breakPoint + 1}px) {
    display: none;
  }
`;

export const Arrow = styled(A, { shouldForwardProp: isPropValid })<ArrowProps>`
  height: ${props => (props.nesting ? '1.5rem' : '2rem')};
  fill: ${props => (props.nesting ? Grey : DarkBlue)};
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;
`;

export const NavigationHeading = styled.h1`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    color: ${Grey};
  }
`;

export const Divider = styled.hr`
  opacity: 0.2;
  margin: ${margin} 0;
`;

export const Heading = styled.h5<SubNestingProps>`
  font-size: ${props => (props.nesting ? SM : XL)};
  color: ${props => (props.nesting ? Grey : props.themeColor)};
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
    color: ${Grey};
  }
`;

export const ListItem = styled.li<SubNestingProps>`
  padding: 0.5rem;
  margin-left: ${props => (props.level ? `${props.level / 3}rem` : '0rem')};
  cursor: pointer;
  &:hover {
    background: ${props => props.themeColor};
    color: ${White};
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
