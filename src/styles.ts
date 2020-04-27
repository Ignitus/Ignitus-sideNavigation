import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const GlobalStyle = css`
  * {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
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
`;

export const Reset = `
  @media (max-width: 420px) {
    height: auto;
    overflow: auto;
  }
`;

export const RightRow = styled.div`
  flex: 1.5;
  height: 100vh;
  // overflow-y: overlay;
  overflow-x: auto;
  background: #fafbfd;
  ${Reset}
  @media (min-width: 1466px) {
    flex: 1;
  }
`;

export const LeftRow = styled.div`
  flex: 5;
  height: 100vh;
  // overflow-y: scroll;
  overflow-x: hidden;
  ${Reset}
`;
