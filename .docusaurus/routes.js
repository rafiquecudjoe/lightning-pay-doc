import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api',
    component: ComponentCreator('/api', '394'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f51'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ec6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'aa2'),
            routes: [
              {
                path: '/docs/authentication',
                component: ComponentCreator('/docs/authentication', 'cff'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/dev',
                component: ComponentCreator('/docs/dev', '16f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/errors',
                component: ComponentCreator('/docs/errors', 'ca7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/ip-whitelisting',
                component: ComponentCreator('/docs/ip-whitelisting', '060'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', '3eb'),
                exact: true
              },
              {
                path: '/docs/pagination',
                component: ComponentCreator('/docs/pagination', '546'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rate-limiting',
                component: ComponentCreator('/docs/rate-limiting', '3cf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/receiving-bitcoin-lightning',
                component: ComponentCreator('/docs/receiving-bitcoin-lightning', '9f6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/webhook',
                component: ComponentCreator('/docs/webhook', '96f'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
