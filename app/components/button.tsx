import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button
      type="button"
      className="rounded-xl bg-gray-900 px-2 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
    >
      {children}
    </button>
  );
};

export default Button;
