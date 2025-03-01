import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "SPFACC",
  description:
    "",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/spfacc",
    github: "https://github.com/",
  },
  mailSupport: "support@spfacc.gov.ng",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      {
        title: "About", href: "#",
        icon: ""
      },
      {
        title: "Enterprise", href: "#",
        icon: ""
      },
      {
        title: "Terms", href: "/terms",
        icon: ""
      },
      {
        title: "Privacy", href: "/privacy",
        icon: ""
      },
    ],
  },
  {
    title: "Product",
    items: [
      {
        title: "Security", href: "#",
        icon: ""
      },
      {
        title: "Customization", href: "#",
        icon: ""
      },
      {
        title: "Customers", href: "#",
        icon: ""
      },
      {
        title: "Changelog", href: "#",
        icon: ""
      },
    ],
  },
  {
    title: "Docs",
    items: [
      {
        title: "Introduction", href: "#",
        icon: ""
      },
      {
        title: "Installation", href: "#",
        icon: ""
      },
      {
        title: "Components", href: "#",
        icon: ""
      },
      {
        title: "Code Blocks", href: "#",
        icon: ""
      },
    ],
  },
];
