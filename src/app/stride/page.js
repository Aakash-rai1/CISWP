"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import { RiBodyScanFill } from "react-icons/ri";
import Footer from "@/components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <div
        className="relative inset-0 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/STRIDE.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "365px",
        }}
      >
        <div className="absolute  bg-primaryG bg-opacity-70 w-auto h-auto px-10 py-10 mx-4 mt-32 md:ml-16 lg:ml-56 text-white">
          <h2 className="font-bold text-2xl mb-2">
            Welcome to the <span className="text-secondaryLight">STRIDE</span>{" "}
            Lab.
          </h2>
          <p>
            The START Lab consists of equipments that can measure multiple{" "}
            <br />
            dimensions of human performance related to injury risk.
          </p>
        </div>
      </div>

      <div className="container mt-12 mx-auto px-16 py-4">
        <h1 className="text-title text-4xl font-bold font-inter">
          <span className="text-primaryG">S</span>KILLED{" "}
          <span className="text-primaryG">T</span>RADES{" "}
          <span className="text-primaryG">R</span>ESEARCH IN<br></br>
          <span className="text-primaryG">I</span>INCLUSIVITY, AND{" "}
          <span className="text-primaryG">D</span>IVERSITY, AND{" "}
          <span className="text-primaryG">E</span>QUITY LAB
        </h1>
        <p className="text-paragraph mt-4 lg:text-justify mb-8">
          There is a significant need to support underrepresented groups by
          removing workplace barriers including the design of tools and PPE to
          ensure safety without compromising function. Current anthropometric
          data (physical measures of a person’s size, form, and functional
          capacities) used for the design of tools and PPE products are often
          outdated, are based on non-Canadian populations, and generally do not
          consider multiple body measurement parameters, age, sex,
          race/ethnicity, or occupational composition. Anthropometric databases
          are vital for product manufacturers, particularly of those serving the
          emerging diverse Canadian skilled trades workforce. CISWP is
          positioned to be a leader in developing sector specific anthropometric
          databases and supported by state-of-the art technology, only of its
          kind in Canada. 
        </p>

        {/* Features */}

        <h1 className="text-title text-2xl font-bold font-inter mt-16 mb-2">
          Our STRIDE LAB Features:
        </h1>
        <div className="col-span-12 grid grid-cols-3 gap-4 py-4">
          {/* Motion Capture */}
          

          <div
            className=" flex flex-col items-center text-center w-full h-auto py-12 hover:shadow-lg  hover:border-0 rounded-lg border-2 border-[#f0f0f0]"
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
             <RiBodyScanFill className="h-14 w-14 mb-4 text-primaryG" />
            <h2 className="text-title font-bold font-inter text-xl">
            4D Body Scanner System
            </h2>
            <p className="text-paragraph px-8">
            create avatars and digital human models from participants within
              seconds using photogrammetry.
            </p>
          </div>
          {/* Measurement */}
          <div
            className=" flex flex-col items-center text-center w-full h-auto py-12 hover:shadow-lg  hover:border-0 rounded-lg border-2 border-[#f0f0f0]"
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
            <img src="foot_scanner.svg" className="h-12 w-16 mb-6" />
            <h2 className="text-title font-bold font-inter text-xl">
              Optical 3D Foot Scanner
            </h2>
            <p className="text-paragraph px-8">
              generates precise and reproducible calculations of up to 37 foot
              measurements.  
            </p>
          </div>

          {/* Force Measurement */}
          <div
            className=" flex flex-col items-center text-center w-full h-auto py-12 hover:shadow-lg  hover:border-0 rounded-lg border-2 border-[#f0f0f0]"
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
            <img src="Anthro.svg" className="h-12 w-16 mb-6" />
            <h2 className="text-title font-bold font-inter text-xl">
              Portable Anthropometry System
            </h2>
            <p className="text-paragraph px-8">
              expands our capability to collect anthropometric data from
              underrepresented groups. 
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-12 gap-4 mt-16">
          <div className="col-span-4">
            <div
              className=" h-80 rounded-xl flex flex-col"
              style={{
                background:
                  "radial-gradient(70.45% 70.45% at 50.13% 63.07%, #666 4.17%, #000 92.77%)",
              }}
            >
              <h1 className="font-inter text-2xl font-bold p-6 w-3/4">
                MOVE 4D HIGH-SPEED 4D BODY SCANNER
              </h1>
              <img
                className="flex justify-center"
                src="images/move4d.png"
                alt="move4d"
                style={{
                  overflow: "hidden",
                }}
              />
            </div>
          </div>

          <div className="col-span-4 ">
            <div
              className=" h-80 rounded-xl flex flex-col"
              style={{
                background:
                  "radial-gradient(70.45% 70.45% at 50.13% 63.07%, #666 4.17%, #000 92.77%)",
              }}
            >
              <h1 className="font-inter text-2xl font-bold p-6 w-3/4">
                OPTICAL 3D FOOT SCANNER
              </h1>
              <img
                className="flex justify-center"
                src="images/scanner.png"
                alt="move4d"
                style={{
                  height: "70%",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>

          <div className="col-span-4">
            <div
              className=" h-80 rounded-xl flex flex-col"
              style={{
                background:
                  "radial-gradient(70.45% 70.45% at 50.13% 63.07%, #666 4.17%, #000 92.77%)",
              }}
            >
              <h1 className="font-inter text-2xl font-bold p-6 w-3/4">
                PORTABLE ANTHROPOMETRY SYSTEM
              </h1>
              <img
                className="flex justify-center"
                src="images/anthropometry.png"
                alt="move4d"
                style={{
                  width: "100%",
                  height: "90%",
                  objectFit: "fill",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="mt-4 rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/STRIDE.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "365px",
          }}
        />
      </div>

      {/* Video */}
      <div className="bg-[#1C1C1C] w-full h-auto flex flex-col items-center py-14 mt-12">
        <h2 className="font-inter text-xl font-bold text-center mb-8 opacity-50 lg:text-3xl sm:text-lg">
          LEARN MORE ABOUT THE EQUIPMENT
        </h2>

        <iframe
          style={{
            width:'50%',
            aspectRatio: "16/9", // Maintain 16:9 aspect ratio
          }}
          src="https://www.youtube.com/embed/3hcQYN0t-VM?si=9qnVXac7PScsKHlf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default page;
