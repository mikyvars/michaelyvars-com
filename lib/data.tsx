import { Github, Linkedin } from "lucide-react";
import { NavigationLink, ProjectDetails, SocialLink } from "./types";

export const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "#about", label: "À propos" },
  // { href: "#work", label: "Work" },
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit orci ut nisl aliquet, sed lobortis augue auctor. Vivamus scelerisque magna sit amet molestie blandit. Etiam posuere metus dui, a pulvinar turpis pellentesque in. Nam auctor, neque in posuere efficitur, mi ante interdum mi, eget finibus nisl eros et risus.",
    image: "/images/projects/booki.jpg",
    link: "https://mikyvars.github.io/OC_Booki/",
    tags: ["HTML", "CSS"],
  },
];
