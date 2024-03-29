// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Topl",
  tagline: "",
  url: "http://docs.topl.co",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/cropped-topl_favicon_new-32x32.png",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "topl", // Usually your GitHub org/user name.
  projectName: "knowledge-base", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Topl/knowledge-base/edit/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Topl",
          src: "img/topl_logo_white.svg",
          srcDark: "img/topl_logo_white.svg",
          href: "/",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "About/welcome",
            position: "left",
            label: "About",
          },
          {
            type: "doc",
            docId: "Developers/welcome",
            position: "left",
            label: "Developers",
          },
          {
            type: "doc",
            docId: "Bounty_Program/bounty-overview",
            position: "left",
            label: "Bounty Program",
          },
          {
            type: "doc",
            docId: "Glossary/glossary",
            position: "left",
            label: "Glossary",
          },
          {
            href: "https://github.com/topl/knowledge-base",
            position: "right",
            "aria-label": "GitHub repository",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/nvaFy4HpUA",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/topl_protocol",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://medium.com/topl-blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/topl/knowledge-base",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Topl`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "HO3PUAD52H",

        // Public API key: it is safe to commit it
        apiKey: "6ceefa2af5b17ceb3aa6623152f5532b",

        indexName: "topl",

        // Optional
        contextualSearch: true,
      },
    }),
};

module.exports = config;
