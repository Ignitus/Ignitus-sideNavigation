A side navigation package we make use at @ignitus-DesignSystem.

> Easy, responsive & flexible side navigation library.

## Getting Started
### Installation

```npm install our-package-name react-router-dom```

### Basic Setup

```javascript
import React from 'react';
import { BrowserRouter as Router } from  'react-router-dom';
import {
  Container,
  Content,
  SideNavigation
} from 'our-package-name';

export default () => (
  <Router>
    <Container>
      <SideNavigation navItems={navItems} />

      <Content>
        Content
      </Content>
    </Container>
  </Router>
);

```

```javascript
const navItems = [
  {
    title: 'Item 1',
    children: [
      {
        title: 'Item 1.1',
        route: '/foo',
      },
      {
        title: 'Item 1.2',
        route: '/bar',
      }
    ],
  },
  {
    title: 'Item 2',
    children: [
      {
        title: 'Item 2.1',
        children: [
          {
            title: 'Item 2.1.1',
            route: '/baz',
          }
        ],
      },
    ],
  }
];
```

### Customize SideNavigation

```javascript
<SideNavigation
  heading={{
    title: 'Home',
    route: '/home',
  }}
  navItems={navItems}
  navBackground=""
  theme={{
    homeLinkColor: '',
    listItemHeadingColor: '',
    listItemHeadingArrowColor: '',
    subListItemTextColor: '',
    subListItemHeadingColor: '',
    subListItemHeadingArrowColor: '',
    hover: {
      subListItemBackgroundOnHover: '',
      subListItemColorOnHover: '',
    },
  }}
/>
```

All props are optional and acquire default values except ```navItems```.

### Fonts

Default font is ```'Roboto', sans-serif```. To use different fonts.

```javascript
<Container
  fontFace={{
    name: `'Open Sans', sans-serif`,
    url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap',
  }}
>
</Container>
```

### Playground

Checkout & Play with props of ```SideNavigation``` on here(INSERT LINK).

<div align="center">
  <br>
    <img src="https://media.giphy.com/media/l46ChKeGsmsfE3Un6/giphy.gif" alt="Workflow">
  <br>
  <h3>Happy Coding ☘️.</h3>
</div>
