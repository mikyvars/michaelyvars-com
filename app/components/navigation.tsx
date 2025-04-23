import { NAVIGATION_LINKS } from "../lib/data";
import Button from "./button";
import ThemeSwitcher from "./theme-switcher";
import Typography from "./typography";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      {NAVIGATION_LINKS.map((link) => (
        <a href={link.href} key={link.href}>
          <Typography variant="body2"> {link.label}</Typography>
        </a>
      ))}
      <div className="h-6 w-0.5 bg-gray-100"></div>
      <ThemeSwitcher />
      <Button>Download CV</Button>
    </div>
  );
};

export default Navigation;
