"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navigation from "./navigation";
import NavigationMobile from "./navigation-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-screen flex-col md:flex-row">
      <div className="bg-gray-default flex w-full items-center justify-between p-4 md:px-20">
        <p className="text-3xl font-bold text-gray-900">{"<MY />"}</p>
        <div onClick={handleClick} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>

      <div className="block md:hidden">{isOpen && <NavigationMobile />}</div>
    </header>
  );
};

export default Header;
