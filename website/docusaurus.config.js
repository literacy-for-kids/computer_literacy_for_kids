// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const footerConfig = require('literacy-site-theme/footerConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Computer Literacy Curriculum for Kids',
  tagline: 'A free, open 18-week curriculum teaching ages 8–12 how computers and the internet actually work',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://literacy-for-kids.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it should match your repo name
  baseUrl: '/computer_literacy_for_kids/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'literacy-for-kids', // Usually your GitHub org/user name.
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

  themes: ['literacy-site-theme'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/literacy-for-kids/computer_literacy_for_kids/tree/main/website/',
        },
        blog: false,
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
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {
            type: 'dropdown',
            label: 'Literacy for Kids',
            position: 'left',
            items: [
              {
                label: 'Decision',
                href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
              },
              {
                label: 'Computer',
                href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
              },
              {
                label: 'Media',
                href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
              },
              {
                label: 'Financial',
                href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
              },
              {
                label: 'Civic',
                href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
              },
            ],
          },
          {
            href: 'https://github.com/literacy-for-kids/computer_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
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
