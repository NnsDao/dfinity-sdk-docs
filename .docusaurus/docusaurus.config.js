export default {
  "title": "ICP开发文档",
  "tagline": "NnsDao,一个无边界的自治组织",
  "url": "https://docs.nnsdao.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "nnsdao",
  "projectName": "dfinity-sdk-docs-cn",
  "themeConfig": {
    "navbar": {
      "title": "ICP开发文档",
      "logo": {
        "alt": "ICP开发文档",
        "src": "img/docusaurus.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Tutorial",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/NnsDao/dfinity-sdk-docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "新手指南",
              "to": "/docs/intro"
            },
            {
              "label": "ICP开发快速上手",
              "to": "/docs/quick-start/dfx-guide"
            },
            {
              "label": "Motoko指南",
              "to": "/docs/quick-start/motoko"
            },
            {
              "label": "Rust指南",
              "to": "/docs/rust-guide/rust-intro"
            },
            {
              "label": "WebAssembly指南",
              "to": "/docs/tutorial-wasms/wasm-intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Notion",
              "href": "https://www.notion.so/ICP-d8a2eb5486fa4915ad192c828bbfffbd"
            },
            {
              "label": "Telegram",
              "href": "https://t.me/nnsdaos"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/NnsDaos"
            }
          ]
        },
        {
          "title": "Ecosystem",
          "items": [
            {
              "label": "Icpscan",
              "href": "https://sznps-4aaaa-aaaah-qab2a-cai.ic0.app/"
            },
            {
              "label": "NNS计算器",
              "href": "https://nns.icpscan.co/"
            },
            {
              "label": "Icpdrops",
              "to": "/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "Medium",
              "href": "https://nnsdao.medium.com"
            },
            {
              "label": "Substack",
              "href": "https://nnsdao.substack.com"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/NnsDao"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 NnsDAO Labs, Inc."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/kk/work/dfinity-sdk-docs/sidebars.js",
          "editUrl": "https://github.com/NnsDao/dfinity-sdk-docs/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/NnsDao/dfinity-sdk-docs/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/kk/work/dfinity-sdk-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};