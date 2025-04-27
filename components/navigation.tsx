import DownloadCV from "./download-cv";
import NavigationLinks from "./navigation-links";
import ThemeSwitcher from "./theme-switcher";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      <NavigationLinks />
      <div className="h-6 w-0.5 bg-gray-100"></div>
      <ThemeSwitcher />
      <DownloadCV />
    </div>
  );
};

export default Navigation;
