import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const iconButtonVariants = cva(
  "flex items-center justify-center rounded-xl text-gray-600 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200",
  {
    variants: {
      variant: {
        md: "h-10 w-10 [&_svg]:h-6 [&_svg]:w-6",
        lg: "h-11 w-11 [&_svg]:h-8 [&_svg]:w-8",
      },
    },
  },
);

interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  children: ReactNode;
}

const IconButton = ({ variant = "md", children }: IconButtonProps) => {
  return (
    <button type="button" className={iconButtonVariants({ variant })}>
      {children}
    </button>
  );
};

export default IconButton;
