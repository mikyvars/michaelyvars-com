import { Github, Linkedin } from "lucide-react";
import { NavigationLink, SocialLink } from "./types";

export const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/mikyvars", icon: <Github /> },
  { href: "https://www.linkedin.com/in/michael-yvars/", icon: <Linkedin /> },
];
