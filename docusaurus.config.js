/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ICP开发文档',
  tagline: 'NnsDao,一个开放的去中心化组织',
  url: 'https://docs.nnsdao.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'dfinity-sdk-docs-cn', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ICP开发文档',
      logo: {
        alt: 'ICP开发文档',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/NnsDao/dfinity-sdk-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Notion',
              href: 'https://www.notion.so/ICP-d8a2eb5486fa4915ad192c828bbfffbd',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/nnsdaos',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/NnsDaos',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NnsDao',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NNSDAO, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
