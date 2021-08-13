export default {
  "title": "ICP开发文档",
  "tagline": "NnsDao,一个开放的去中心化组织",
  "url": "https://docs.nnsdao.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "facebook",
  "projectName": "dfinity-sdk-docs-cn",
  "themeConfig": {
    "navbar": {
      "title": "ICP开发文档",
      "logo": {
        "alt": "ICP开发文档",
        "src": "img/logo.svg"
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
              "label": "Tutorial",
              "to": "/docs/intro"
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
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/NnsDao"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 NNSDAO, Inc."
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