import styled from '@emotion/styled';

import { flexibleRowDiv } from '../styles';

type ArrowProps = {
  isexpanded: boolean;
  nesting?: boolean;
};

type SubNestingProps = {
  nesting?: boolean;
  level?: number;
};

const margin = '1rem';
const smallTextColor = '#69707d';

export const NavigationContainer = styled.nav`
  width: 100%;
  padding-left: 2rem;
  a {
    color: black;
    text-decoration: none;
    color: ${smallTextColor};
  }
`;

export const NavigationHeading = styled.h1``;

export const Divider = styled.hr`
  opacity: 0.2;
  margin: ${margin} 0;
`;

export const Heading = styled.h5<SubNestingProps>`
  font-size: ${props => (props.nesting ? '16px' : '20px')};
  color: ${props => (props.nesting ? smallTextColor : 'blue')};
  font-weight: ${props => (props.nesting ? 'lighter' : 'bold')};
  padding: ${props => (props.nesting ? '0.5rem' : '0')};
  margin: 0;
`;

export const UnorderedList = styled.ul<ArrowProps>`
  list-style: none;
  display: ${props => (props.isexpanded ? 'block' : 'none')};
  padding: 0;
`;

export const ListItem = styled.li<SubNestingProps>`
  list-style: none;
  margin: ${margin} 0;
  margin-left: ${props => (props.level ? `${props.level / 2}rem` : '0rem')};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeadingArrowContainer = styled(flexibleRowDiv)<SubNestingProps>`
  // margin-top: ${props => (props.nesting ? '0' : '1rem')};
  margin-left: ${props => (props.level ? `${props.level / 2}rem` : '0rem')};
  justify-content: unset;
  align-items: center;
  cursor: pointer;
`;
