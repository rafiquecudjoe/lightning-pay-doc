/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "GETTING STARTED",
      items: ["intro", "dev", "postman-collection"],
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
        "pagination",
        "ip-whitelisting",
        "rate-limiting",
        "receiving-bitcoin-lightning",
        "webhook",
        "errors",
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
