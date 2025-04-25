import { Github, Linkedin } from "lucide-react";
import IconButton from "./icon-button";

const Socials = () => {
  return (
    <div className="flex">
      <IconButton>
        <Github />
      </IconButton>
      <IconButton>
        <Linkedin />
      </IconButton>
    </div>
  );
};

export default Socials;
