import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { flexibleRowDiv } from '../../styles';
import { Arrow as A } from '../Arrow';
import { Grey, DarkBlue, White } from '../../helpers/colors';
import { ArrowProps, SubNestingProps } from './types';
import { SM, XL, Normal, Medium } from '../../helpers/fonts';

const margin = '1rem';

export const NavigationContainer = styled.nav`
  width: 100%;
  padding-left: 2rem;
`;

export const Arrow = styled(A, { shouldForwardProp: isPropValid })<ArrowProps>`
  height: ${props => (props.nesting ? '1.5rem' : '2rem')};
  fill: ${props => (props.nesting ? Grey : DarkBlue)};
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;
`;

export const NavigationHeading = styled.h1`
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
  color: ${props => (props.nesting ? Grey : DarkBlue)};
  font-weight: ${props => (props.nesting ? Normal : Medium)};
  padding: ${props => (props.nesting ? '0.5rem' : '0')};
  margin: 0;
`;

export const UnorderedList = styled.ul<ArrowProps>`
  list-style: none;
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  padding: 0;
  a {
    text-decoration: none;
    color: ${Grey};
  }
`;

export const ListItem = styled.li<SubNestingProps>`
  padding: 0.5rem;
  margin-left: ${props => (props.level ? `${props.level / 2}rem` : '0rem')};
  cursor: pointer;
  &:hover {
    background: ${DarkBlue};
    color: ${White};
  }
`;

export const HeadingArrowContainer = styled(flexibleRowDiv)<SubNestingProps>`
  margin-top: ${props => (props.nesting ? '0' : '1rem')};
  margin-left: ${props => (props.level ? `${props.level / 2}rem` : '0rem')};
  justify-content: unset;
  align-items: center;
  cursor: pointer;
`;
