import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { GreyLightS1, GreyLightS2, GreyLight } from './helpers/colors';

export const breakPoint = 768;

export const GlobalStyle = css`
  * {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: ${GreyLight};
  }
  ::-webkit-scrollbar-thumb {
    background: ${GreyLightS1};
    border-radius: 120px;
  }
`;

export const flexibleColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const flexibleRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  @media (max-width: ${breakPoint}px) {
    flex-direction: column;
  }
`;

export const Reset = `
  @media (max-width: 420px) {
    height: auto;
    overflow: auto;
  }
`;

export const RightRow = styled.div`
  flex: 2;
  height: 100vh;
  overflow-y: auto;
  overflow-x: auto;
  background: ${GreyLightS2};
  ${Reset}
  @media (min-width: 1024px) {
    flex: 1.5;
  }
  @media (min-width: 1466px) {
    flex: 1;
  }
`;

export const LeftRow = styled.div`
  flex: 5;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  ${Reset}
  @media (max-width: ${breakPoint}px) {
    padding-top: 5rem;
  }
`;
