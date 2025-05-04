import { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

// const Container = ({ children, ...props }: ContainerProps) => {
//   return (
//     <section
//       className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20 2xl:py-24"
//       {...props}
//     >
//       {children}
//     </section>
//   );
// };

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={`${className} bg-gray w-full py-16 md:py-20 2xl:py-24`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Container;
