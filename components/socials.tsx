"use client";

import Link from "next/link";
import IconButton from "./icon-button";
import { SOCIAL_LINKS } from "../lib/data";

const Socials = () => {
  return (
    <div className="flex">
      {SOCIAL_LINKS.map((socialLink) => (
        <Link key={socialLink.href} href={socialLink.href} target="_blank">
          <IconButton>
            <socialLink.icon />
          </IconButton>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
