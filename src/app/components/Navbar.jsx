"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-60">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-5">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          Portofolio
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={handleToggleNavbar}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navLinks} onClose={handleToggleNavbar} />}
    </nav>
  );
};

export default Navbar;
