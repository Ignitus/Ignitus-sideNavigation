import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Nobel, GreyLight } from './helpers/colors';

export const breakPoint = 768;

export const breakpoints: number[] = [0, 320, 576, 768, 992, 1200];
export const minimumWidthQuery: string[] = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
export const maximumWidthQuery: string[] = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const GlobalStyle = css`
  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${GreyLight};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Nobel};
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

interface ContainerProps {
  fontFace?: {
    name: string;
    url?: string;
  };
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  * {
    box-sizing: border-box;
    ${props =>
      !props.fontFace || props.fontFace.name === 'default'
        ? `
          font-family: 'Roboto', sans-serif;
          src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
        `
        : `
          ${
            props.fontFace.name !== 'none' &&
            `
              font-family: ${props.fontFace.name};
              ${
                props.fontFace.url &&
                `
                src: ${props.fontFace.url};
              `
              }
            `
          }
        `}
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

interface RightRowProps {
  background: string;
}

export const RightRow = styled.div<RightRowProps>`
  flex: 2;
  height: 100vh;
  overflow-y: auto;
  overflow-x: auto;
  background-color: ${props => props.background};
  nav {
    @media (max-width: ${breakPoint}px) {
      position: fixed;
      overflow-y: auto;
      z-index: 1;
      background-color: ${props => props.background};
      width: 100%;
    }
  }
  ${Reset}
  @media (min-width: 1024px) {
    flex: 1.5;
  }
  @media (min-width: 1466px) {
    flex: 1;
  }
`;

export const Content = styled.div`
  flex: 5;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  ${Reset}
  @media (max-width: ${breakPoint}px) {
    padding-top: 5rem;
  }
`;
