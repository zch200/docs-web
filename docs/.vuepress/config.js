const themeConfig = {
  lastUpdated: '最近 更新',
  editLinks: true, // 启用编辑链接
  editLinkText: '编辑',
  locales: {
    "/": {
      // 多语言下拉菜单的标题
      selectText: "选择语言",
      // 该语言在下拉菜单中的标签
      label: "简体中文",
      // 编辑链接文字
      editLinkText: "在 GitHub 上编辑此页",
      // Service Worker 的配置
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新",
        },
      },
      // 当前 locale 的 algolia docsearch 选项
      algolia: {},
      // 右上角导航栏
      nav: [
        { text: "指南", link: "/guide/" },
        { text: "客户端", link: "/client/" },
      ],
      sidebar: {
        "/client/": [
          '',
        ],
        "/guide/": [
          '',
          'others',
          'changelog',
        ],
      },
    },
    "/en/": {
      selectText: "Languages",
      label: "English",
      ariaLabel: "Languages",
      editLinkText: "Edit this page on GitHub",
      serviceWorker: {
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh",
        },
      },
      algolia: {},
      nav: [
        { text: "Guide", link: "/guide/" },
        { text: "Client", link: "/client/" },
      ],
      sidebar: {
        "/en/client/": [
          '',
        ],
        "/en/guide/": [
          '',
          'others',
          'changelog',
        ],
      },
    },
  },
};
module.exports = {
  theme: "@vuepress/theme-default",
  themeConfig: themeConfig,
  plugins: ["@vuepress/last-updated"],
  base: "/docs-web/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "魔果云课",
    },
    "/en/": {
      lang: "en-US",
      title: "CometTech",
    },
  }
};
