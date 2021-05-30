
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','278'),
  exact: true,
},
{
  path: '/blog/dfinity-Canistore',
  component: ComponentCreator('/blog/dfinity-Canistore','c26'),
  exact: true,
},
{
  path: '/blog/dfinity-SailFash',
  component: ComponentCreator('/blog/dfinity-SailFash','507'),
  exact: true,
},
{
  path: '/blog/icp-intro',
  component: ComponentCreator('/blog/icp-intro','417'),
  exact: true,
},
{
  path: '/blog/icp-intro-Ecology',
  component: ComponentCreator('/blog/icp-intro-Ecology','4af'),
  exact: true,
},
{
  path: '/blog/okex-icp-fund',
  component: ComponentCreator('/blog/okex-icp-fund','d78'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','abc'),
  exact: true,
},
{
  path: '/blog/tags/canistore',
  component: ComponentCreator('/blog/tags/canistore','ef4'),
  exact: true,
},
{
  path: '/blog/tags/dfinity',
  component: ComponentCreator('/blog/tags/dfinity','4ba'),
  exact: true,
},
{
  path: '/blog/tags/icp',
  component: ComponentCreator('/blog/tags/icp','b07'),
  exact: true,
},
{
  path: '/blog/tags/nnsdao',
  component: ComponentCreator('/blog/tags/nnsdao','93f'),
  exact: true,
},
{
  path: '/blog/tags/sail-fash',
  component: ComponentCreator('/blog/tags/sail-fash','e85'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','44f'),
  
  routes: [
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/docs/tutorial-basics/create-a-document','f0d'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/docs/tutorial-basics/create-a-page','ca5'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/canisters-code',
  component: ComponentCreator('/docs/tutorial-extras/canisters-code','4b0'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/data-centers',
  component: ComponentCreator('/docs/tutorial-extras/data-centers','527'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/governance',
  component: ComponentCreator('/docs/tutorial-extras/governance','9f7'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','d64'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/tokens-cycles',
  component: ComponentCreator('/docs/tutorial-extras/tokens-cycles','881'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/docs/tutorial-extras/translate-your-site','16a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
