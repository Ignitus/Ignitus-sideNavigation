import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeWrapperProps } from '../../src/components/sideNavigation/component';
import { defaultTheme } from '../../src/constants';
import { SideNavigation, Container } from '../../src';

import { Docs } from './API';
import { StyledContent as Content} from './styles';
import { navItems } from './constants';

export const Preview: React.FC = () => {
  const [theme, updateTheme] = useState<ThemeWrapperProps>(defaultTheme);

  return (
    <Router>
      <Container>
        <SideNavigation navItems={navItems} navBackground={theme.navBackground} theme={theme.theme} />
        <Content>
          <Docs updateTheme={updateTheme} theme={theme} />
        </Content>
      </Container>
    </Router>
  );
};

ReactDOM.render(<Preview />, document.getElementById('root'));
