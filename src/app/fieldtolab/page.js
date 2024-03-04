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
        className="relative flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/fieldtolab.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "420px",
        }}
      >
        <div className="absolute text-center text-white">
          <h2 className="font-bold  mb-2" style={{ fontSize: "62px" }}>
            FIELD TO LAB TO FIELD
          </h2>
          <h2
            className="font-bold  text-secondaryLight mb-2 "
            style={{ fontSize: "136px", marginTop: "-80px" }}
          >
            RESEARCH
          </h2>
        </div>
      </div>

      <div className="container mt-12 mx-auto px-16 py-4">
        <h1 className="text-title text-4xl font-bold font-inter">
          FIELD TO LAB TO FIELD LAB
        </h1>
        <p className="text-paragraph mt-4 lg:text-justify mb-8">
          Work and health research conventionally lack ecological validity,
          where studies do not often use worker participants who are
          representative of potential end-users and do not take place or
          consider actual work environments and conditions. Research conducted
          with a convenience study sample and away from worksites,
          unfortunately, is not easily transferrable to real work settings.
          Skilled trades jobs are often complex, peripatetic, and involves
          irregular work periods; work environments are often unstructured and
          unpredictable; and work tasks are highly variable and dynamic. Field
          equipment enables both ecologically valid research but also
          contributes to CISWP’s innovative and scientifically rigorous
          field-to-lab-to-field approach, combining the control and reliability
          of laboratory research with the realism and ecological validity of the
          field.  
        </p>

        {/* Features */}

        <h1 className="text-title text-2xl font-bold font-inter mt-16 mb-2">
        CISWP’s Portable Measurement and Wearable Sensors include
        </h1>
        

        {/* Images */}
        <div className="grid grid-cols-12  mt-8">
          <div className="col-span-4">
            <div
              className=" h-80  flex flex-col"
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
              className=" h-80 flex flex-col"
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
              className=" h-80  flex flex-col"
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

      </div>

      
      <Footer />
    </div>
  );
};

export default page;
