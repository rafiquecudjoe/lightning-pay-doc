/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "GETTING STARTED",
      items: ["intro", "dev"],
      collapsed: false,
    },
    {
      type: "html",
      value: "<div style='padding: 10px'></div>",
      className: "sidebar-spacer",
    },
    {
      type: "category",
      label: "DOCUMENTATION",
      items: [
        "authentication",
        "errors",
        "webhook",
        "ip-whitelisting",
        "rate-limiting",
        "pagination",
        "receiving-bitcoin-lightning",
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
