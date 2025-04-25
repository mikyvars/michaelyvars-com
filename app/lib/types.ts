import { LucideIcon } from "lucide-react";
import { ReactElement } from "react";

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: ReactElement<LucideIcon>;
}
