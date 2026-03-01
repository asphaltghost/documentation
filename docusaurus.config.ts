import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AsphaltGhost Docs",
  tagline: "Documentation for the AsphaltGhost MVP",

  url: "https://asphaltghost.github.io",
  baseUrl: "/documentation/",

  organizationName: "AsphaltGhost",
  projectName: "documentation",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn"
    }
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/"
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    navbar: {
      title: "AsphaltGhost Docs",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs"
        },
        {
          href: "https://github.com/AsphaltGhost/base-app",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Project",
          items: [
            {
              label: "Main App Repo",
              href: "https://github.com/AsphaltGhost/base-app"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AsphaltGhost`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
