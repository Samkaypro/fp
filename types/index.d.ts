import { User, UserRole } from "@prisma/client";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/shared/icons";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
};

export interface SidebarNavItem {
  title: string;
  items: {
    href: string;
    icon: string;
    title: string;
    badge?: number;
    disabled?: boolean;
    authorizeOnly?: UserRole | UserRole[];
  }[];
}


export type NavItem = {
  title: string;
  href: string;
  badge?: number;
  disabled?: boolean;
  external?: boolean;
  authorizeOnly?: UserRole;
  icon?: keyof typeof Icons;
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
};


export interface ComplaintData {
  id: number
  userId: string
  type: string
  victimType: string | null
  description: string
  dateOfIncident: string
  timeOfIncident: string | null
  location: string
  suspectedEntities: string | null
  witnesses: string | null
  status: string
  createdAt: string
  updatedAt: string
  assignedTo: string
  evidecnce: string 
}