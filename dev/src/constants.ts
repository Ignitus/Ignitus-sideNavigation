export const navItems = [
  {
    title: 'List Item Heading 1',
    children: [
      {
        title: 'Sub List Item 1',
        route: '/SubListItem1',
      },
      {
        title: 'Sub List Item 2',
        route: '/SubListItem2',
      },
      {
        title: 'Sub List Item 3',
        children: [
          {
            title: 'Sub Sub List Item 1',
            route: '/SubSubListItem1',
          },
          {
            title: 'Sub Sub List Item 2',
            route: '/SubSubListItem2',
          },
        ],
      },
    ],
  },
  {
    title: 'List Item Heading 2',
    children: [
      {
        title: 'Sub List Item 1',
        route: '/SubListItem1',
      },
      {
        title: 'Sub List Item 2',
        route: '/SubListItem2',
      },
      {
        title: 'Sub List Item 3',
        children: [
          {
            title: 'Sub Sub List Item 1',
            route: '/SubSubListItem1',
          },
          {
            title: 'Sub Sub List Item 2',
            route: '/SubSubListItem2',
          },
          {
            title: 'Sub Sub List Item 3',
            children: [
              {
                title: 'Sub Sub Sub List Item 1',
                route: '/SubSubSubListItem1',
              },
              {
                title: 'Sub Sub Sub List Item 2',
                route: '/SubSubSubListItem2',
              },
            ],
          },
        ],
      },
    ],
  },
];
