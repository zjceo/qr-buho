import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Manual QR Buho',
  tagline: 'Manual de QR Buho',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://manual.qr-buho.uio.la',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zjceo', // Usually your GitHub org/user name.
  projectName: 'qr-buho', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      {
        docs: {
          //sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: "/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/zjceo/qr-buho/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "qr_api",
        docsPluginId: "classic",
        config: {
          integrations: {
            specPath: "api/integrations.yaml",
            outputDir: "docs/qr-devs/api/tenant/integrations",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          send_message: {
            specPath: "api/send_message.yaml",
            outputDir: "docs/qr-devs/api/tenant/send_message",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          call: {
            specPath: "api/call.yaml",
            outputDir: "docs/qr-devs/api/tenant/call",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          chat: {
            specPath: "api/chat.yaml",
            outputDir: "docs/qr-devs/api/tenant/chat",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          group: {
            specPath: "api/group.yaml",
            outputDir: "docs/qr-devs/api/tenant/group",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          label: {
            specPath: "api/label.yaml",
            outputDir: "docs/qr-devs/api/tenant/label",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          devices: {
            specPath: "api/devices.yaml",
            outputDir: "docs/qr-devs/api/tenant/devices",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          campaigns: {
            specPath: "api/campaigns.yaml",
            outputDir: "docs/qr-devs/api/tenant/campaigns",
            baseUrl: "/qr-devs/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          // Admin APIs
          reseller: {
            specPath: "api/reseller.yaml",
            outputDir: "docs/qr-devs/api/admin/reseller",
            baseUrl: "/qr-devs/api/admin",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          plans: {
            specPath: "api/plans.yaml",
            outputDir: "docs/qr-devs/api/admin/plans",
            baseUrl: "/qr-devs/api/admin",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          tenants: {
            specPath: "api/tenants.yaml",
            outputDir: "docs/qr-devs/api/admin/tenants",
            baseUrl: "/qr-devs/api/admin",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        }
      }
    ]
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Qr Buho',
      logo: {
        alt: 'Qr Buho Logo',
        src: 'img/logo.svg',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual',
        },*/
        //{to: '/blog', label: 'Blog', position: 'left'},
        //{
        //  href: 'https://github.com/facebook/docusaurus',
        //  label: 'GitHub',
        //  position: 'right',
        //},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
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
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
