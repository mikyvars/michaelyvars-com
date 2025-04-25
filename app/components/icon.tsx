import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const iconVariants = cva("text-gray-600", {
  variants: {
    variant: {
      sm: "[&_svg]:h-4 [&_svg]:w-4",
      md: "[&_svg]:h-6 [&_svg]:w-6",
      lg: "[&_svg]:h-8 [&_svg]:w-8",
      auto: "[&_svg]:h-6 [&_svg]:w-6 md:[&_svg]:h-8 md:[&_svg]:w-8",
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
