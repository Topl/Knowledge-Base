// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Apparatus",
  tagline: "",
  url: "http://docs.apparatus.live",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/apparatus-favicon.png",
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
          alt: "Apparatus",
          src: "img/apparatus-logo.svg",
          srcDark: "img/apparatus-logo.svg",
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
        copyright: `Copyright © ${new Date().getFullYear()} Apparatus`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['java', 'scala']
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "HO3PUAD52H",

        // Public API key: it is safe to commit it
        apiKey: "6ceefa2af5b17ceb3aa6623152f5532b",

        indexName: "apparatus",

        // Optional
        contextualSearch: true,
      },
    }),
  plugins: [
    // Pull Bifrost docs from GitHub
    [
      "docusaurus-plugin-remote-content",
      {
        name: "bifrost-images", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/Topl/Bifrost/dev/documentation/static/img", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "static/img", // the base directory to output to.
        documents: [
          "annulus.png",
        ], // the file names to download
        requestConfig: { responseType: "arraybuffer" },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "bifrost-docs-networks", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/Topl/Bifrost/dev/documentation/docs/reference/Networks", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/Developers/05-Networks", // the base directory to output to.
        documents: [
          "connect-to-the-testnet.md", 
          "connect-to-toplnet.md",
          "private-network.md"
        ], // the file names to download
        modifyContent(filename, content) {
          return {
            content: `${content}
:::info

Find more information here! [Bifrost Documentation](https://topl.github.io/Bifrost/)

:::`
          }
        }
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "bifrost-docs-setup", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/Topl/Bifrost/dev/documentation/docs/reference/Installing Your Node", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/Developers/03-Node Setup", // the base directory to output to.
        documents: [
          "bare-metal.md",
          "docker.md",
          "helm-kubernetes.md"
        ], // the file names to download
        modifyContent(filename, content) {
          return {
            content: `${content}
:::info

Find more information here! [Bifrost Documentation](https://topl.github.io/Bifrost/)

:::`
          }
        }
      },
    ],
    // BramblSC docs
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "bramblsc-docs-reference", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/Topl/BramblSc/main/documentation/docs/reference", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/Developers/06-Software Development Kits", // the base directory to output to.
        documents: [
          "getting-started.mdx"
        ], // the file names to download
        modifyContent(filename, content) {
        var modifiedContent = content;
        
        modifiedContent = modifiedContent.replaceAll('../service-kit/big-picture', 'https://topl.github.io/BramblSc/docs/current/service-kit/big-picture');
        return {
          content: `${modifiedContent}
:::info

Find more information here! [BramblSc Documentation](https://topl.github.io/BramblSc/)

:::`
          }
        }
      },
    ],
    // Brambl-cli docs
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "bramblcli-docs-quickstart", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/Topl/brambl-cli/main/microsite/docs", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/Developers/04-CLI", // the base directory to output to.
        documents: [
          "intro.md"
        ], // the file names to download
        modifyContent(filename, content) {
          return {
            content: `${content}
:::info

Find more information here! [Brambl-cli Documentation](https://topl.github.io/brambl-cli/)

:::`
          }
        }
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "bramblcli-docs-tutorials", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/Topl/brambl-cli/main/microsite/docs/tutorials", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/Developers/02-Quickstart Tutorial", // the base directory to output to.
        documents: [
          "fund-wallet.md",
          "create-tx.md",
          "mint-asset.md",
          "recover-wallet.md"
        ], // the file names to download
        modifyContent(filename, content) {
        var modifiedContent = content;
        
        modifiedContent = modifiedContent.replaceAll('/docs/current/how-tos/prove-simple-tx', 'https://topl.github.io/brambl-cli/docs/current/how-tos/prove-simple-tx');
        modifiedContent = modifiedContent.replaceAll('/docs/current/how-tos/broadcast-tx', 'https://topl.github.io/brambl-cli/docs/current/how-tos/broadcast-tx');
        return {
          content: `${modifiedContent}
:::info

Find more information here! [Brambl-cli Documentation](https://topl.github.io/brambl-cli/)

:::`
          }
        }
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "bramblcli-docs-tutorial-how-tos-templates", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/Topl/brambl-cli/main/microsite/docs/how-tos", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/Developers/how-tos", // the base directory to output to.
        documents: [
          "_broadcast-tx.mdx",
          "_check-balance.mdx",
          "_current-address.mdx",
          "_initialize-wallet.mdx",
          "_list-interactions.mdx",
          "_prove-simple-tx.mdx",
          "_reset-interaction.mdx",
          "_simple-lvl-tx.mdx",
          "_sync-wallet.mdx",
        ],
      },
    ],
  ],
};

module.exports = config;
