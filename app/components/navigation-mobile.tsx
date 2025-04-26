import Typography from "./typography";
import ThemeSwitcher from "./theme-switcher";
import DownloadCV from "./download-cv";
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
        <DownloadCV />
      </div>
    </div>
  );
};

export default NavigationMobile;
