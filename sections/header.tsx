"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navigation from "../components/navigation";
import NavigationMobile from "../components/navigation-mobile";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-full flex-col md:flex-row">
      <div className="bg-gray-default mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href={"/"}>
          <p className="text-3xl font-bold text-gray-900">{"<MY />"}</p>
        </Link>
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
