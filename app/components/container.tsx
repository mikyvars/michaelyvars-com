import { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20 2xl:py-24"
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;
