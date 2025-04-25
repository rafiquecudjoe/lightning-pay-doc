// Import themes directly from prism-react-renderer
const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lightning Pay API Documentation",
  tagline: "Powered by Ejara",
  url: "https://ejara.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "your-org",
  projectName: "api-docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebar.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  // Define static directory for OpenAPI specs
  staticDirectories: ["static", "openapi"],

  themes: [
    // Redoc theme
    "docusaurus-theme-redoc",
  ],

  plugins: [
    [
      "docusaurus-plugin-redoc",
      {
        // Plugin options
        id: "example-api",
        spec: path.join(__dirname, "openapi/example-api.yaml"),
        route: "/api",
        url: "https://lightning-pay-doc.vercel.app/openapi/spec.yaml",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "API Docs",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/api",
            label: "API Reference",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
              {
                label: "API Reference",
                to: "/api",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
