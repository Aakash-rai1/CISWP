import React from "react";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";


const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="flex flex-row items-center justify-center py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-m d rounded md:p-0 hover:text-[#B69763]"
    >
      {title}
      <TiArrowSortedDown/>
    </Link>
  );
};

export default NavLink;
