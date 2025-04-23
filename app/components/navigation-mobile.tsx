import Button from "./button";
import Typography from "./typography";
import ThemeSwitcher from "./theme-switcher";
import { NAVIGATION_LINKS } from "../lib/data";

const NavigationMobile = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-4 border-t border-b border-gray-100 p-4">
        {NAVIGATION_LINKS.map((link) => (
          <a href={link.href} key={link.href}>
            <Typography variant="body2"> {link.label}</Typography>
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4">
        <ThemeSwitcher />
        <Button>Download CV</Button>
      </div>
    </div>
  );
};

export default NavigationMobile;
