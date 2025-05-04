"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navigation from "../components/navigation";
import NavigationMobile from "../components/navigation-mobile";
import Link from "next/link";
import useScroll from "@/hooks/use-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(40);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${scrolled ? "bg-gray-default/50 backdrop-blur-xl md:border-gray-100" : ""} bg-gray-default sticky top-0 z-50`}
    >
      <div className="flex w-full flex-col md:flex-row">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
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
      </div>
    </header>
  );
};

export default Header;
