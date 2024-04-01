"use client";
import Footer from "@/components/Footer";
import React from "react";
import { VscProject } from "react-icons/vsc";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiHealthPotion, GiProgression } from "react-icons/gi";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <div className="container mt-12 mx-auto px-16 py-4 mb-24">
        {/* title and searchbar */}
        <div class="grid grid-cols-12 mx-auto gap-4">
          <div className="col-span-full lg:col-span-8 mb-4 ">
            <h1
              className="text-title  font-bold text-4xl lg:text-5xl  mt-4 font-inter"
              style={{ width: "80%" }}
            >
              Our <span className="text-primaryG">Mission</span> and{" "}
              <span className="text-primaryG">Vision</span>
            </h1>
            <p className="text-paragraph text-md mt-4">
              Lorem Ipsum has been the industry&apos;a standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className="flex flex-row gap-10 lg:gap-16 mt-12 m-auto justify-center  lg:justify-start">
              <div className="flex flex-col text-center items-center">
                <p className="text-3xl font-bold text-primaryG">45</p>
                <p className="text-paragraph text-sm">Projects</p>
              </div>
              <div className="flex flex-col text-center items-center">
                <p className="text-3xl font-bold text-primaryG">25+</p>
                <p className="text-paragraph text-sm">Campaigns</p>
              </div>
              <div className="flex flex-col text-center items-center">
                <p className="text-3xl font-bold text-primaryG">20</p>
                <p className="text-paragraph text-sm">Research</p>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-4 mb-8 justify-end  h-fit">
            <img src="images/missionlogo.png" />
          </div>
        </div>

        <h1 className="text-title text-center font-bold text-3xl lg:text-4xl m-auto mt-16 font-inter w-1/2 mb-12">
          Exploring construction safety: <br />
          <span className="text-primaryG"> spotlight</span> on our focus.
        </h1>
        <div className="grid grid-cols-1  gap-8 w-full text-center items-center lg:grid-cols-3 h-fit lg:gap-0">
          <div>
            <div className="h-12 w-12 bg-white rounded-full shadow-lg flex justify-center items-center m-auto mb-3">
              <FaHelmetSafety className="h-7 w-7 text-secondaryLight" />
            </div>

            <h3 className=" text-3xl font-bold mb-2 text-primaryG">Safety</h3>
            <p className="text-paragraph text-md">
              {" "}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <div className="h-12 w-12 bg-white rounded-full shadow-lg flex justify-center items-center m-auto mb-3">
              <GiHealthPotion className="h-7 w-7 text-secondaryLight" />
            </div>

            <h3 className=" text-3xl font-bold mb-2 text-primaryG">Wellness</h3>
            <p className="text-paragraph text-md">
              {" "}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <div className="h-12 w-12 bg-white rounded-full shadow-lg flex justify-center items-center m-auto mb-3">
              <GiProgression className="h-7 w-7 text-secondaryLight" />
            </div>

            <h3 className=" text-3xl font-bold mb-2 text-primaryG">
              Performance
            </h3>
            <p className="text-paragraph text-md">
              {" "}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      {/* bottom image */}
      <div className="grid grid-cols-3 h-40 lg:h-72">
        <div
          className="bg-primaryG "
          style={{
            backgroundImage: 'url("images/skill1.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="bg-primaryG "
          style={{
            backgroundImage: 'url("images/skill2.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="bg-primaryG "
          style={{
            backgroundImage: 'url("images/skill3.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
