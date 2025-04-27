import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Loader, MoonStar, Sun } from "lucide-react";
import Typography from "./typography";
import IconButton from "./icon-button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex cursor-pointer items-center justify-between">
        <Typography className="md:hidden">Changer de Thème</Typography>
        <IconButton>
          <Loader />
        </IconButton>
      </div>
    );
  }

  return (
    <div
      onClick={toggleTheme}
      className="flex cursor-pointer items-center justify-between"
    >
      <Typography className="md:hidden">Changer de Thème</Typography>
      <IconButton>{theme === "dark" ? <MoonStar /> : <Sun />}</IconButton>
    </div>
  );
};

export default ThemeSwitcher;
