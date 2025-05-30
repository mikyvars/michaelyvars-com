import Link from "next/link";
import Typography from "../components/typography";
import { CopyrightIcon } from "lucide-react";

const Copyright = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-50 px-4 py-4 md:px-20 md:py-6">
      <Typography className="flex items-center gap-1">
        Copyright {new Date().getFullYear()}
        <CopyrightIcon className="h-4 w-4" />- Tous droits réservés
      </Typography>
      <Typography>
        Conception par{" "}
        <Link
          href={"https://www.figma.com/community/file/1262992249991763120"}
          target="_blank"
          className="underline"
        >
          Sagar Shah
        </Link>
      </Typography>
      <Typography>
        Code par{" "}
        <Link
          href={"https://github.com/mikyvars/michaelyvars-com"}
          target="_blank"
          className="underline"
        >
          Michael Yvars
        </Link>
      </Typography>
    </footer>
  );
};

export default Copyright;
