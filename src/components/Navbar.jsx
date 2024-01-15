"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About Us",
    path: "#about",
  },
  {
    title: "Applied Research",
    path: "#projects",
  },
  {
    title: "Research Labs",
    path: "#contact",
  },
  {
    title: "Education",
    path: "#about",
  },
  {
    title: "Publications & Resources",
    path: "#projects",
  },
  {
    title: "News & Events",
    path: "#contact",
  },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  
    return (
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <div className="flex flex-row gap-4">
            <Link href={"/"}>
              <Image src="/images/whiteLogo.png" alt="logo" height={120} width={120} />
            </Link>
            <Link href={"/"}>
              <Image src="/images/conestoga-logo.svg" alt="logo" height={120} width={120} />
            </Link>
          </div>
          <div className="mobile-menu block lg:hidden"> {/* Change 'md:hidden' to 'lg:hidden' */}
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden lg:block lg:w-auto" id="navbar"> {/* Change 'md:block' to 'lg:block' */}
            <ul className="flex p-4 lg:p-0 lg:flex-row lg:space-x-8 mt-0"> {/* Change 'md:p-0' to 'lg:p-0' */}
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    );
  };
  
  export default Navbar;