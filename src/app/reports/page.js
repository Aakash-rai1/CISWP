import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";

const Page = () => {
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
                        <label className="flex items-center gap-2">
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
            <div className="grid grid-cols-12 gap-8">
              <div className="group col-span-3 flex flex-col ">
                <div
                  className=" h-200 bg-white rounded-sm shadow-md "
                  style={{
                    height: "350px",
                    backgroundImage: " url('/images/p5.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "16px",
                    
                  }}
                />
                <h1 className="text-title text-md font-semibold mb-2">
                  Fatigue Risk Managemtn for first Responsers: State of
                  Knowledge
                </h1>
                <div className="flex flex-row gap-2">
                  <IoMdTime style={{ color: "#000000" }} />
                  <p className="text-[#5E5C5C] text-xs font-medium">
                    January 21, 2022
                  </p>
                </div>
              </div>

              <div className="col-span-3 flex flex-col ">
                <div
                  className=" h-200 bg-white rounded-sm shadow-md"
                  style={{
                    height: "350px",
                    backgroundImage: " url('/images/p4.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "16px",
                  }}
                />
                <h1 className="text-title text-md font-semibold mb-2">
                  Fatigue Risk Managemtn for first Responsers: State of
                  Knowledge
                </h1>
                <div className="flex flex-row gap-2">
                  <IoMdTime style={{ color: "#000000" }} />
                  <p className="text-[#5E5C5C] text-xs font-medium">
                    January 21, 2022
                  </p>
                </div>
              </div>
              <div className="col-span-3 flex flex-col ">
                <div
                  className=" h-200 bg-white rounded-sm shadow-md"
                  style={{
                    height: "350px",
                    backgroundImage: " url('/images/p3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "16px",
                  }}
                />
                <h1 className="text-title text-md font-semibold mb-2">
                  Fatigue Risk Managemtn for first Responsers: State of
                  Knowledge
                </h1>
                <div className="flex flex-row gap-2">
                  <IoMdTime style={{ color: "#000000" }} />
                  <p className="text-[#5E5C5C] text-xs font-medium">
                    January 21, 2022
                  </p>
                </div>
              </div>
              <div className="col-span-3 flex flex-col ">
                <div
                  className=" h-200 bg-white rounded-sm shadow-md"
                  style={{
                    height: "350px",
                    backgroundImage: " url('/images/p1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "16px",
                  }}
                />
                <h1 className="text-title text-md font-semibold mb-2">
                  Fatigue Risk Managemtn for first Responsers: State of
                  Knowledge
                </h1>
                <div className="flex flex-row gap-2">
                  <IoMdTime style={{ color: "#000000" }} />
                  <p className="text-[#5E5C5C] text-xs font-medium">
                    January 21, 2022
                  </p>
                </div>
              </div>
              <div className="col-span-3 flex flex-col ">
                <div
                  className=" h-200 bg-white rounded-sm shadow-md"
                  style={{
                    height: "350px",
                    backgroundImage: " url('/images/p4.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "16px",
                  }}
                />
                <h1 className="text-title text-md font-semibold mb-2">
                  Fatigue Risk Managemtn for first Responsers: State of
                  Knowledge
                </h1>
                <div className="flex flex-row gap-2">
                  <IoMdTime style={{ color: "#000000" }} />
                  <p className="text-[#5E5C5C] text-xs font-medium">
                    January 21, 2022
                  </p>
                </div>
              </div>
              <div className="col-span-3 flex flex-col ">
                <div
                  className=" h-200 bg-white rounded-sm shadow-md"
                  style={{
                    height: "350px",
                    backgroundImage: " url('/images/p3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "16px",
                  }}
                />
                <h1 className="text-title text-md font-semibold mb-2">
                  Fatigue Risk Managemtn for first Responsers: State of
                  Knowledge
                </h1>
                <div className="flex flex-row gap-2">
                  <IoMdTime style={{ color: "#000000" }} />
                  <p className="text-[#5E5C5C] text-xs font-medium">
                    January 21, 2022
                  </p>
                </div>
              </div>
              <div className="col-span-3 flex flex-col ">
                <div
                  className=" h-200 bg-white rounded-sm shadow-md"
                  style={{
                    height: "350px",
                    backgroundImage: " url('/images/p1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "16px",
                  }}
                />
                <h1 className="text-title text-md font-semibold mb-2">
                  Fatigue Risk Managemtn for first Responsers: State of
                  Knowledge
                </h1>
                <div className="flex flex-row gap-2">
                  <IoMdTime style={{ color: "#000000" }} />
                  <p className="text-[#5E5C5C] text-xs font-medium">
                    January 21, 2022
                  </p>
                </div>
              </div>

              {/* Card 2 */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
