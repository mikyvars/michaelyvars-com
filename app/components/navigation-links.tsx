import { NAVIGATION_LINKS } from "../lib/data";
import Typography from "./typography";

const NavigationLinks = () => {
  return (
    <>
      {NAVIGATION_LINKS.map((link) => (
        <a href={link.href} key={link.href}>
          <Typography
            variant="body2"
            className="transition-colors duration-200 hover:text-gray-900 active:text-gray-600"
          >
            {" "}
            {link.label}
          </Typography>
        </a>
      ))}
    </>
  );
};

export default NavigationLinks;
