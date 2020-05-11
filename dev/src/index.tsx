import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/core';

import { ThemeWrapperProps } from '../../src/components/sideNavigation/component';
import { defaultTheme } from '../../src/constants';
import { SideNavigation, Container, GlobalStyle } from '../../src';

import { Docs } from './API';
import { StyledContent } from './styles';
import { navItems } from './constants';

export const Preview: React.FC = () => {
  const [theme, updateTheme] = useState<ThemeWrapperProps>(defaultTheme);

  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Container>
        <SideNavigation navItems={navItems} navBackground={theme.navBackground} theme={theme.theme} />
        <StyledContent>
          <Docs updateTheme={updateTheme} theme={theme} />
        </StyledContent>
      </Container>
    </Router>
  );
};

ReactDOM.render(<Preview />, document.getElementById('root'));
