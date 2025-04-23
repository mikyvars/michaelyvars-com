import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const iconVariants = cva("text-gray-600", {
  variants: {
    variant: {
      md: "h-6 w-6",
      lg: "h-8 w-8",
    },
  },
});

interface IconProps extends VariantProps<typeof iconVariants> {
  children: ReactNode;
}

const Icon = ({ variant = "md", children }: IconProps) => {
  return <div className={iconVariants({ variant })}>{children}</div>;
};

export default Icon;
