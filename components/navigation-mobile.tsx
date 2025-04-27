import ThemeSwitcher from "./theme-switcher";
import DownloadCV from "./download-cv";
import NavigationLinks from "./navigation-links";

const NavigationMobile = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-4 border-t border-b border-gray-100 p-4">
        <NavigationLinks />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <ThemeSwitcher />
        <DownloadCV />
      </div>
    </div>
  );
};

export default NavigationMobile;
