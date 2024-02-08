"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";

const Page = () => {
  const cardData = [
    {
      backgroundImage: "/images/p5.png",
      title: "Fatigue Risk Management for First Responders: State of Knowledge",
      date: "January 21, 2022",
    },
    {
      backgroundImage: "/images/p4.png",
      title: "Understanding Human Fatigue: A Comprehensive Study",
      date: "February 15, 2022",
    },
    {
      backgroundImage: "/images/p3.png",
      title: "The Impact of Sleep Deprivation on Cognitive Performance",
      date: "March 10, 2022",
    },
    {
      backgroundImage: "/images/p1.png",
      title: "Strategies for Enhancing Resilience in High-Stress Environments",
      date: "April 5, 2022",
    },
    {
      backgroundImage: "/images/p4.png",
      title: "Understanding Human Fatigue: A Comprehensive Study",
      date: "February 15, 2022",
    },
    {
      backgroundImage: "/images/p3.png",
      title: "The Impact of Sleep Deprivation on Cognitive Performance",
      date: "March 10, 2022",
    },
    {
      backgroundImage: "/images/p1.png",
      title: "Strategies for Enhancing Resilience in High-Stress Environments",
      date: "April 5, 2022",
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F4F4F5]  ">
        <div className="grid grid-cols-12 mt-12 mx-auto px-24 py-4">
          {/* Sorting */}
          <div className="col-span-full lg:col-span-3">
            <h2 className="font-bold text-xl text-title font-inter mb-3">
              Archive
            </h2>

            <div className="flex flex-col gap-2">
              <ul className="menu menu-vertical  text-title pr-40">
                <li>
                  <details>
                    <summary>Release year</summary>
                    <ul className="rounded-t-none">
                      <div className="form-control mt-2 mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>2024</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>2024</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>2024</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>2024</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>2024</span>
                        </label>
                      </div>
                    </ul>
                  </details>

                  <br />
                  <details>
                    <summary>Categories</summary>
                    <ul className="rounded-t-none">
                      <div className="form-control mt-2 mb-3">
                        <label className="flex items-center gap-2  whitespace-normal">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>Centre for Supply Chain Innovation</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>SMART Centre</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>CISWP</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>Conestoga Food Research & Innovation Lab</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>Conestoga Entrepreneurship Collective</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>
                            Centre for Health Care Research & Innovation
                          </span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>Research & Innovation Impact Report</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>Centre for Commercialization</span>
                        </label>
                      </div>
                      <div className="form-control mb-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm border-[#aaaaaa] checked:border-[#087D73] checked:border-indigo-800 [--chkbg:#087D73] [--chkfg:#ffffff]"
                          />
                          <span>Non-centre affiliated research</span>
                        </label>
                      </div>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          {/* publications */}
          <div className="col-span-full lg:col-span-9">
            <h2 className="font-bold text-2xl text-title font-inter mb-8">
              Publications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cardData.map((card, index) => (
                <div key={index} className="flex flex-col cursor-pointer">
                  <div
                    className="h-96 sm:h-80 md:h-72 lg:h-64 bg-white rounded-sm shadow-md hover:shadow-xl"
                    style={{
                      backgroundImage: `url('${card.backgroundImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      marginBottom: "16px",
                      transition: "background-size 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundSize = "102%")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundSize = "cover")
                    }
                  />
                  <h1 className="text-title text-md font-semibold mb-2">
                    {card.title}
                  </h1>
                  <div className="flex flex-row gap-2">
                    <IoMdTime style={{ color: "#000000" }} />
                    <p className="text-[#5E5C5C] text-xs font-medium">
                      {card.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
