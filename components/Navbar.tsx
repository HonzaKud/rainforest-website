"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/50 backdrop-blur-lg py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-white text-xl font-bold tracking-wide">
        <Link href="/">Lost in Nature</Link>
      </div>

      {/* Desktop odkazy */}
      <div className="space-x-4 text-white text-sm tracking-wide hidden md:flex">
        <Link className="hover:text-green-400 transition" href="#home">Domů</Link>
        <Link className="hover:text-green-400 transition" href="#content">O projektu</Link>
        <Link className="hover:text-green-400 transition" href="#gallery">Galerie</Link>
        <Link className="hover:text-green-400 transition" href="#facts">Zajímavosti</Link>
        <Link className="hover:text-green-400 transition" href="#contact">Kontakt</Link>
      </div>

      {/* Hamburger ikonka */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl z-50 relative">
          <FiMenu />
        </button>
      </div>

      {/* Mobilní menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs text-white z-[9999] transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* 🧱 Fix: použijeme skutečný <div> tag místo samo-zavíracího a přidáme z-index */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0"></div>

        {/* Obsah menu */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Křížek */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white text-2xl">
              <FiX />
            </button>
          </div>

          {/* Odkazy */}
          <div className="flex flex-col items-center space-y-6 text-lg mt-1 bg-black/70 backdrop-blur-md rounded-md p-4">
            <Link onClick={toggleMenu} href="#home">Domů</Link>
            <Link onClick={toggleMenu} href="#content">O projektu</Link>
            <Link onClick={toggleMenu} href="#gallery">Galerie</Link>
            <Link onClick={toggleMenu} href="#facts">Zajímavosti</Link>
            <Link onClick={toggleMenu} href="#contact">Kontakt</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
