"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navLinks = [
  {
    title: "About CISWP",
    path: "#about",
    submenu: [
      { title: "Mission & Values", path: "#mission" },
      { title: "People", path: "#people" },
      { title: "Contact Us", path: "#contact" },
    ],
  },
  {
    title: "Applied Research",
    path: "#projects",
    submenu: [
      { title: "Skilled Trades", path: "skilledTrade" },
      { title: "Healthcare & First Response", path: "#healthcare" },
      { title: "Workforce Development", path: "#workforce" },
      { title: "EDI & Accessibility", path: "#edi" },
    ],
  },
  {
    title: "Research Labs",
    path: "#labs",
    submenu: [
      { title: "START Lab", path: "start" },
      { title: "STRIDE LAB", path: "#stride-lab" },
      { title: "Field to Lab to Field", path: "#field-lab" },
    ],
  },
  {
    title: "Education",
    path: "#education",
    submenu: [
      { title: "Link 1", path: "#link1" },
      { title: "Link 2", path: "#link2" },
    ],
  },
  {
    title: "Publications & Resources",
    path: "#publications",
    submenu: [
      { title: "Scientific Report & Articles", path: "reports" },
      { title: "Webinars", path: "#webinars" },
    ],
  },
  {
    title: "News & Events",
    path: "#news-events",
    submenu: [
      { title: "News", path: "news" },
      { title: "Events", path: "#events" },
    ],
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-10 py-4">
        <div className="flex flex-row gap-4">
          <Link href={"/"}>
            <Image
              src="/images/whiteLogo.png"
              alt="logo"
              height={120}
              width={120}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/images/conestoga-logo.svg"
              alt="logo"
              height={120}
              width={120}
            />
          </Link>
        </div>
        <div className="mobile-menu block lg:hidden">
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

        <div className=" hidden lg:block lg:w-auto">
          <ul className="menu menu-horizontal px-1 text-white">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <details>
                  <summary>{navLink.title}</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none text-white">
                    {navLink.submenu.map((sublink, subindex) => (
                      <li key={subindex} >
                        <a href={sublink.path}>{sublink.title}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default Navbar;
