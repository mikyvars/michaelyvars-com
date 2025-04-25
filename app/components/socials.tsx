"use client";

import IconButton from "./icon-button";
import { SOCIAL_LINKS } from "../lib/data";

const Socials = () => {
  return (
    <div className="flex">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.href, "_blank")}
        >
          {socialLink.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default Socials;
