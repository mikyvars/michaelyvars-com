import { Copy, Copyright, Mail, Phone } from "lucide-react";
import Tag from "../components/tag";
import Typography from "../components/typography";
import IconButton from "../components/icon-button";
import Icon from "../components/icon";
import Socials from "../components/socials";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-6 px-4 py-16 md:px-20 md:py-24">
        <Tag>Get in touch</Tag>
        <Typography variant={"subtitle"} className="text-center">
          {
            "What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
          }
        </Typography>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4">
            <Icon>
              <Mail />
            </Icon>
            <Typography variant={"h2"}>michaelyvars1@gmail.com</Typography>
            <IconButton>
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-4">
            <Icon>
              <Phone />
            </Icon>
            <Typography variant={"h2"}>+33650226921</Typography>
            <IconButton>
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Typography variant={"body2"}>
            You may also find me on these platforms!
          </Typography>
          <Socials />
        </div>
      </section>
      <section className="flex flex-col items-center bg-gray-50 px-4 py-4 md:px-20 md:py-6">
        <Typography className="flex items-center gap-1">
          Copyright 2025 <Copyright /> - All rights reserved
        </Typography>
        <Typography>
          <Link
            href={"https://www.figma.com/community/file/1262992249991763120"}
            target="_blank"
          >
            Designed by Sagar Shah
          </Link>
        </Typography>
        <Typography>
          <Link
            href={"https://github.com/mikyvars/michaelyvars-com"}
            target="_blank"
          >
            Coded by Michael Yvars
          </Link>
        </Typography>
      </section>
    </>
  );
};

export default Footer;
