"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import { MdCamera } from "react-icons/md";
import { IoIosBody } from "react-icons/io";
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
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/startCover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "365px",
        }}
      >
        <div className="absolute  bg-primaryG bg-opacity-70 w-auto h-auto px-10 py-10 mx-4 mt-32 md:ml-16 lg:ml-56 text-white">
          <h2 className="font-bold text-2xl mb-2">Welcome to the START Lab.</h2>
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
          <span className="text-primaryG">A</span>PPLIED<br></br>
          <span className="text-primaryG">R</span>ESEARCH AND{" "}
          <span className="text-primaryG">T</span>RAINING LAB
        </h1>
        <p className="text-paragraph mt-4 lg:text-justify mb-8">
          Workplace injuries are significant in the skilled trades and often
          lead to early exits from the labour market. Premature exits have
          contributed to the current and emerging skilled trades labour
          shortage. Without intervention, skilled trades companies have lost
          opportunities, turned down contracts, and have been less competitive.
          Informed by industry partners and our research, there is an immediate
          need for new knowledge and evidence-informed resources for skilled
          trades businesses to reduce the risk of workplace injuries. The
          Skilled Trades Human Performance Lab will consist of equipment that
          can measure multiple dimensions of human performance related to
          workplace injury risk and capture multiple types of work exposures,
          demands, and hazards, and will allow us to conduct innovative and
          ecologically valid research within Conestoga’s skilled trades
          ecosystem.
        </p>

        {/* Features */}
        <div className="col-span-12 grid grid-cols-3 gap-4 py-4">
          {/* Motion Capture */}
          <div
            className="flex flex-col items-center text-center w-full h-auto py-12 hover:shadow-lg hover:border-0 rounded-lg border-2 border-[#f0f0f0]"
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
            <MdCamera className="h-14 w-14 mb-4 text-primaryG" />
            <h2 className="text-title font-bold font-inter text-xl">
              Motion Capture System
            </h2>
            <p className="text-paragraph">
              A 10-camera high fidelity motion capture system
            </p>
          </div>

          {/* Measurement */}
          <div
            className=" flex flex-col items-center text-center w-full h-auto py-12 hover:shadow-lg  hover:border-0 rounded-lg border-2 border-[#f0f0f0]"
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
            <IoIosBody className="h-14 w-14  mb-4 text-primaryG" />
            <h2 className="text-title font-bold font-inter text-xl">
              Activity Measurement System
            </h2>
            <p className="text-paragraph px-8">
              A full-body wireless muscle activity measurement system
            </p>
          </div>

          {/* Force Measurement */}
          <div
            className=" flex flex-col items-center text-center w-full h-auto py-12 hover:shadow-lg  hover:border-0 rounded-lg border-2 border-[#f0f0f0]"
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
            <img src="Force.svg" className="h-12 w-16 mb-6" />
            <h2 className="text-title font-bold font-inter text-xl">
              Force Measurement
            </h2>
            <p className="text-paragraph px-8">
              A suite of force measuring equipment including force plates and
              six degree-of-freedom load cells
            </p>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-4 py-4 mt-8">
          <Swiper
            pagination={true}
            className="mySwiper flex flex-col w-full h-auto  rounded-3xl bg-[#F4F4F5] relative"
            style={{
              height: "420px",
            }}
            loop="true"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div
                className=" flex flex-col w-full h-auto  rounded-3xl "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/startcarousel1.jpg')",
                  height: "420px",
                  backgroundSize: "cover",
                }}
              >
                <div className="px-16 py-20">
                  <p>TAKE A GLIMPSE OF OUR</p>
                  <h1 className="font-inter font-bold text-6xl">START LAB.</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col w-full h-auto rounded-3xl"
                style={{
                  backgroundImage: "url('/images/startcarousel2.jpg')",
                  height: "420px",
                  backgroundSize: "cover",
                  transition: "transform 0.3s ease", // Add transition for smooth effect
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")} // Zoom in on hover
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Restore original scale
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col w-full h-auto rounded-3xl"
                style={{
                  backgroundImage: "url('/images/startcarousel3.jpg')",
                  height: "420px",
                  backgroundSize: "cover",
                  transition: "transform 0.3s ease", // Add transition for smooth effect
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")} // Zoom in on hover
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Restore original scale
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col w-full h-auto rounded-3xl"
                style={{
                  backgroundImage: "url('/images/startcarousel4.jpg')",
                  height: "420px",
                  backgroundSize: "cover",
                  transition: "transform 0.3s ease", // Add transition for smooth effect
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")} // Zoom in on hover
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Restore original scale
              ></div>
            </SwiperSlide>
          </Swiper>

          <div className="grid grid-row-2 gap-4">
            <div
              className="bg-[#EDEBEB] rounded-3xl relative flex items-center  justify-end "
              onMouseEnter={(e) =>
                (e.currentTarget.querySelector("img").style.transform =
                  "translateY(-10%) scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.querySelector("img").style.transform =
                  "translateY(-10%) scale(1)")
              }
            >
              <img
                src="/images/camera.png"
                alt="Picture of the author"
                style={{
                  position: "absolute",
                  width: "50%",
                  height: "100%",
                  objectFit: "cover",
                  overflow: "visible",
                  left: 0,
                  transform: "translateY(-10%) scale(1)", // Initial transformation with translateY and scale
                  transition: "transform 0.3s ease", // Add transition for smooth effect
                  transformOrigin: "left",
                }}
                // onMouseEnter={(e) =>
                //   (e.target.style.transform = "translateY(-10%) scale(1.08)")
                // } // Zoom in on hover along the x-axis
                // onMouseLeave={(e) =>
                //   (e.target.style.transform = "translateY(-10%) scale(1)")
                // } // Restore original scale and translation
              />

              <h3
                className=" text-3xl font-bold font-inter text-paragraph"
                style={{
                  width: "45%",
                }}
              >
                A 10-camera high fidelity motion capture system
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* left content */}
              <div className="bg-[#EDEBEB] rounded-3xl px-8 flex flex-col items-center">
                <h2 className="text-title font-inter text-lg font-bold  mt-4">
                  Full-body wireless muscle activity measurement system
                </h2>
                <div
                  className=" h-full w-full "
                  style={{
                    backgroundImage: "url('images/cometa.png')",
                    backgroundRepeat: "no-repeat",
                    objectFit:'cover',
                    marginLeft:'20%'
                  }}
                />
              </div>
              {/* <div className="bg-[#EDEBEB] rounded-3xl">Hi</div> */}

              <div className="bg-[#EDEBEB] rounded-3xl px-8 flex flex-row justify-around relative">
                <div
                  className="h-full w-full left-0 absolute"
                  style={{
                    backgroundImage: "url('images/ForcePlate.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "fit",
                  }}
                />
                <h2 className="text-title font-inter text-lg font-bold mt-4 w-1/2 absolute right-0">
                  Force Measurement Equipment with Force Plate
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
