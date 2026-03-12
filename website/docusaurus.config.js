// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Computer Literacy Curriculum for Kids',
  tagline: 'A comprehensive 18-week program to introduce young learners to essential digital skills',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zcohen-nerd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it should match your repo name
  baseUrl: '/computer_literacy_for_kids/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zcohen-nerd', // Usually your GitHub org/user name.
  projectName: 'computer_literacy_for_kids', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zcohen-nerd/computer_literacy_for_kids/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zcohen-nerd/computer_literacy_for_kids/tree/main/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hero-image.png',
      navbar: {
        title: 'Computer Literacy for Kids',
        logo: {
          alt: 'Computer Literacy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/zcohen-nerd/computer_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Curriculum',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'Week 1: Internet Playground',
                to: '/docs/week01-week-1-internet-playground',
              },
              {
                label: 'License',
                to: '/docs/license',
              },
            ],
          },
          {
            title: 'License',
            items: [
              {
                label: 'CC BY-NC-SA 4.0',
                href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
              },
              {
                label: 'License Summary',
                to: '/docs/license',
              },
              {
                label: 'Source Repository',
                href: 'https://github.com/zcohen-nerd/computer_literacy_for_kids',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/zcohen-nerd/computer_literacy_for_kids/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/zcohen-nerd/computer_literacy_for_kids/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zachary Cohen. Curriculum content is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. See the <a href="/computer_literacy_for_kids/docs/license">license page</a> for attribution, sharing, and adaptation details.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;