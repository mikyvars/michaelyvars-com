import { ReactNode } from "react";
import Typography from "./typography";

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      variant="body3"
      className="w-fit rounded-xl bg-gray-200 px-5 py-1 text-gray-600"
    >
      {children}
    </Typography>
  );
};

export default Tag;
