import Image from "next/image";
import React from "react";

import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const email = "ciswp@conestogac.on.ca";
  const phoneNumber = "+1519-748-5220";
  const address = "25 Reuter Dr, Cambridge, ON N3E 1A9, Canada";

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="relative bg-[#2D2D2D] w-full h-max mt-64 ">
      <div
        className="absolute bg-[#ffffff] px-8 py-4"
        style={{
          width: "80%",
          height: "auto",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)", // This centers the element horizontally
        }}
      >
        <div className="flex flex-col lg:flex-row gap-12 justify-between ">
          <div className="flex flex-col w-full lg:w-1/2 ">
            <Image
              src="/images/ciswpBlack.png"
              alt="Sponsor"
              style={{
                width: "200px",
                height: 80,
                objectFit: "cover",
                marginLeft: "-16px",
              }}
              width={1500}
              height={1500}
              quality={100}
            />
            <p className="text-paragraph text-sm">
              Connect with the Canadian Institute for Safety, Wellness &
              Performance to discuss research opportunities and partnerships.
            </p>

            <h3 className="text-title font-bold text-sm mt-4 mb-2">
              Connect with Us
            </h3>
            <div className="flex flex-col  justify-start gap-2 lg:gap-8  lg:flex-row">
              <div className="flex flex-row gap-2 items-center">
                <IoMailOutline style={{ color: "#087D73" }} />
                <p className="text-primaryG">
                  {" "}
                  <a href={`mailto:${email}`}>{email}</a>.
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineLocalPhone style={{ color: "#087D73" }} />
                <p className="text-primaryG">
                  {" "}
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> Ext. 7115
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center mt-2">
              <TiLocationOutline style={{ color: "#087D73" }} />
              <p className="text-primaryG">
                {" "}
                <a
                  href={`https://maps.app.goo.gl/nuwoUQqVXjs5sHqF9`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </a>
              </p>
            </div>
            <div className="flex flex-row gap-2 mt-6 mb-2">
              <Link
                href="https://ca.linkedin.com/company/canadian-institute-for-safety-wellness-and-performance"
                className="bg-[#2867B2] h-10 w-10 rounded-md flex items-center justify-center"
              >
                <FaLinkedinIn className="text-[#ffffff] h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/ciswp_conestoga?lang=en"
                className="bg-[#1DA1F2] h-10 w-10 rounded-md flex items-center justify-center"
              >
                <FaTwitter className="text-[#ffffff] h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCWGG-XumHfuDHfonokyRFmg"
                className="bg-[#F90018] h-10 w-10 rounded-md flex items-center justify-center"
              >
                <FaYoutube className="text-[#ffffff] h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="bg-primaryG w-full lg:w-1/2 h-full ">
            <div style={{ width: "100%", height: "320px",  backgroundImage:
                " url('/images/map.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",}}>

            </div>
          </div>
        </div>
      </div>

      {/* main footer content  */}

      <div className="flex flex-row justify-between px-48 mt-80 mb-40">
        <div className="w-1/2">
          <h2 className="font-semibold text-xl mb-4 font-inter">
            {" "}
            Consetoga Admin
          </h2>
          <p>299 Doon Valley Drive</p>
          <p>Kitcherner, Ontario N2G 4M4, Canada</p>
          <p>Phone: 519-748-5220</p>
        </div>
        <div className="w-1/2 items-end justify-end text-right">
          <h2 className="font-semibold text-xl mb-4 font-inter">
            {" "}
            Quick Links
          </h2>
          <div className="flex flex-col">
            <Link
              href="/#contact"
              className="text-[#a8a8a8] hover:text-secondaryLight"
            >
              Giving to Conestoga
            </Link>
            <Link
              href="/#contact"
              className="text-[#a8a8a8] hover:text-secondaryLight"
            >
              Policies & procedures
            </Link>
            <Link
              href="/#contact"
              className="text-[#a8a8a8] hover:text-secondaryLight"
            >
              Visit us
            </Link>
            <Link
              href="/#contact"
              className="text-[#a8a8a8] hover:text-secondaryLight"
            >
              Applying to Conestoga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
