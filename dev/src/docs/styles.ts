import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { maximumWidthQuery } from '../../../src/styles';
import { DarkBlue, Grey, GreyLight, WhiteLilac } from '../../../src/helpers/colors';

export const MediumHeading = styled.h3`
  color: ${Grey};
`;

export const Glow = css`
  color: ${DarkBlue};
  margin: 2rem 0;
`;

export const Input = styled.input`
  background-color: ${WhiteLilac};
  border: 1px solid ${GreyLight};
  padding: 1rem;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  /* ${maximumWidthQuery[3]} {
    flex-direction: column;
  } */
`;

export const Row = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  padding-right: 3rem;
  ${maximumWidthQuery[4]} {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0;
  }
`;

export const Column = styled.div<{ glow?: boolean }>`
  ${props => props.glow && Glow}
  ${props =>
    !props.glow
      ? `
    margin-left: auto;
    ${maximumWidthQuery[3]} {
      margin-left: 0;
    }
  `
      : ''}
`;
