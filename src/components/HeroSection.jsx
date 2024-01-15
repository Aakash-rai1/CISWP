import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-9">
        <h2 className="font-bold text-2xl text-title mb-2">
          Building capacity for productive and sustainable work
        </h2>
        <p className="text-paragraph mb-12">
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

        <h2 className="font-bold text-2xl text-title mb-2">
          Building capacity for productive and sustainable work
        </h2>
        <p className="text-paragraph">
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
      </div>
      <div className="col-span-3 justify-end">
        <div
          className="bg-primary rounded-md"
          style={{ height: "auto", width: "100%" }}
        >
          <div className="px-4 py-6">
            <h3 className="justify-center text-xl font-black">
              The Ontario Skilled Trades Occupational Exposure and Demands
              Survey
            </h3>
            <p className="text-sm mt-2">
              If you work, or are a student or apprentice in the skilled trades,
              complete this survey to be entered into a draw to win one of 100
              <span className="font-bold text-secondaryLight"> $50 Amazon gift cards.</span>
            </p>
            <Link
              href="/#contact"
              className=" font-semibold mt-4 inline-block py-2 sm:w-fit rounded-md bg-[#ffffff] hover:bg-secondaryLight  text-primary text-center justify-center items-center m-auto"
              style={{width:"100%"}}
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
