"use client";
import Footer from "@/components/Footer";
import React from "react";
import { IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
import { FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <img
        src="images/contact_hero.png"
        alt="image"
        style={{ width: "100%" }}
      />
      <div className="flex flex-col lg:flex-row ">
        <div
          className="flex-1 bg-primaryG h-auto py-40 lg:py-0"
          style={{
            backgroundImage: "url(images/map.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex-1 bg-[#F4F4F4] h-auto  py-24">
          <div className="flex flex-col pl-12 pr-24">
            <h3 className="font-bold font-inter text-primaryG text-4xl mb-2">
              Meet us
            </h3>
            <div className="flex flex-col gap-4 mt-3">
              <div className="flex flex-row gap-3 items-center">
                <IoMailOutline className="h-7 w-7 text-primaryG" />
                <p className="text-paragraph font-xl font-semibold">
                  ciswp@conestogac.on.ca
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <HiOutlinePhone className="h-7 w-7 text-primaryG" />
                <p className="text-paragraph font-xl font-semibold">
                  519-748-5220 Ext. 7115
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <HiOutlineLocationMarker className="h-7 w-7 text-primaryG" />
                <p className="text-paragraph font-xl font-semibold">
                  25 Reuter Dr, Cambridge, ON N3E 1A9
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  bg-primaryG h-auto  py-24 ">
          <div className="flex flex-col pl-12 pr-24">
            <h3 className="font-bold font-inter text-white text-4xl mb-2">
              Find us on
            </h3>
            <p className="text-sm" style={{ fontFamily: "jost" }}>
              We are also active on different social sites. Find us on any of
              these social handles. Connect with us and follow us for every
              updates and activities.
            </p>
            <div className="flex flex-row gap-2 mt-6">
              <IoLogoLinkedin className="w-11 h-11 text-white" />
              <FaSquareTwitter className="w-11 h-11 text-white" />
              <FaSquareYoutube className="w-11 h-11 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
