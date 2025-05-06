import { LucideIcon } from "lucide-react";

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface ProjectDetails {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}
