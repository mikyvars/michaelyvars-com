import { Github, Linkedin } from "lucide-react";
import { NavigationLink, ProjectDetails, SocialLink } from "./types";

export const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/mikyvars", icon: Github },
  { href: "https://www.linkedin.com/in/michael-yvars/", icon: Linkedin },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Booki",
    description:
      "Premier projet de la formation \"Développeur Web\" que j'ai suivi sur OpenClassrooms. Le but ? Démarrer la formation en réalisant un site web pour trouver son hébergement de vacances. Ce projet est static, uniquement avec HTML et CSS sans l'utilisation d'un quelconque framework. Il s'agit du premier projet \"concret\" que j'ai réalisé.",
    image: "/images/projects/booki.jpg",
    link: "https://mikyvars.github.io/OC_Booki/",
    tags: ["HTML", "CSS"],
  },
];
