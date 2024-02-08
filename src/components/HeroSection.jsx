import Link from "next/link";
import React from "react";
import SideNews from "./SideNews";
import Program from "./Program";
import Image from "next/image";
import ResearchProject from "./ResearchProject";
import { IoMdTime } from "react-icons/io";

import { Jost } from "next/font/google";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-full lg:col-span-9">
        <h2 className="font-bold text-2xl text-title font-inter mb-2">
          Building capacity for productive and sustainable work
        </h2>
        <p className="text-paragraph mb-12 text-justify" >
          The Canadian Institute for Safety, Wellness & Performance (CISWP) is
          committed to building productive and sustainable workplaces through a
          collaborative and transdisciplinary approach. CISWP’s goal is to
          position Canada as a global leader in empowering business to adapt and
          thrive in a competitive economy and aims to improve the safety,
          wellness, and performance of the Canadian workforce through knowledge
          generation, research transfer, and workforce development. Working
          closely with stakeholders, the institute strives to conduct
          cutting-edge research and develop evidence-informed products, tools,
          and services to advance their capacity and address knowledge gaps.
        </p>

        <h2 className="font-bold text-2xl font-inter text-title mb-2">
          CISWP’s research program
        </h2>
        <p className="text-paragraph">
          CISWP adopts a transdisciplinary and collaborative approach to build
          capacity for productive and sustainable work. Our research program is
          organized into seven overarching and overlapping research themes:
        </p>

        <Program />

        <h2 className="font-bold text-2xl text-title mt-12">
          Research Projects
        </h2>
        <ResearchProject />
      </div>

      {/* side bar */}
      <div className="col-span-full mt-8 pl-0 lg:col-span-3 justify-end lg:mt-0 lg:pl-8">
        <div
          className="bg-primaryG rounded-md"
          style={{ height: "auto", width: "100%" }}
        >
          <div className="px-4 py-6">
            <h3 className="justify-center text-xl font-black font-inter">
              The Ontario Skilled Trades Occupational Exposure and Demands
              Survey
            </h3>
            <p className="text-sm mt-2">
              If you work, or are a student or apprentice in the skilled trades,
              complete this survey to be entered into a draw to win one of 100
              <span className="font-bold text-secondaryLight">
                {" "}
                $50 Amazon gift cards.
              </span>
            </p>
            <Link
              href="/#contact"
              className=" font-bold font-inter mt-4 inline-block py-2 sm:w-fit rounded-md bg-white hover:bg-secondaryLight  text-primaryG text-center justify-center items-center m-auto"
              style={{ width: "100%" }}
            >
              Take a Survey
            </Link>
          </div>
        </div>

        <SideNews />

        <Link href={"/"}>
          <p className="text-sm text-primaryG hover:text-secondaryO hover:font-medium">
            Explore More{" "}
          </p>
        </Link>

        <>
          <h2 className="text-title font-bold mt-12 mb-4 font-inter text-xl">
            Trending in Publications
          </h2>
          <div className="flex flex-row gap-3 mt-8">
            <Image
              src="/images/p1.png"
              alt="Picture of the author"
              style={{
                width: "30%",
                height: 120,
                objectFit: "cover",
              }}
              width={1500}
              height={1500}
              quality={100}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-title font-semibold">
                Research & Innovation Impact Report 2022-2023
              </h2>
              <div className="flex flex-row gap-1">
                <IoMdTime style={{ color: "#000000" }} />
                <p className="text-[#5E5C5C] text-xs font-medium">
                  January 21, 2022
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-8">
            <Image
              src="/images/p4.png"
              alt="Picture of the author"
              style={{
                width: "30%",
                height: 120,
                objectFit: "cover",
              }}
              width={1500}
              height={1500}
              quality={100}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-title font-semibold">
              Fatigue Risk Management for First Responders: State of Knowledge

              </h2>
              <div className="flex flex-row gap-1">
                <IoMdTime style={{ color: "#000000" }} />
                <p className="text-[#5E5C5C] text-xs font-medium">
                  January 21, 2022
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-4">
            <Image
              src="/images/p3.png"
              alt="Picture of the author"
              style={{
                width: "30%",
                height: 120,
                objectFit: "cover",
              }}
              width={1500}
              height={1500}
              quality={100}
            />
            
            <div className="flex flex-col gap-2">
              <h2 className="text-title font-semibold">
              Fatigue Risk Management for First Responders: Current Landscape of
              Perspectives, Policies...
              </h2>
              <div className="flex flex-row gap-1">
                <IoMdTime style={{ color: "#000000" }} />
                <p className="text-[#5E5C5C] text-xs font-medium">
                  January 25, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-8">
            <Image
              src="/images/p5.png"
              alt="Picture of the author"
              style={{
                width: "30%",
                height: 120,
                objectFit: "cover",
              }}
              width={1500}
              height={1500}
              quality={100}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-title font-semibold">
              Work Disability Management of PTSI in Paramedic Service
              Organizations: A Needs Assessment
              </h2>
              <div className="flex flex-row gap-1">
                <IoMdTime style={{ color: "#000000" }} />
                <p className="text-[#5E5C5C] text-xs font-medium">
                  December 23, 2022
                </p>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default HeroSection;
