"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoMdTime } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Page = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F4F4F5]  ">
        <div className="container mt-12 mx-auto px-16 py-4">
          <h1
            className="font-bold text-4xl text-title  mb-6 "
            style={{ fontFamily: "Times" }}
          >
            Symposium highlights research and scholarship at Conestoga
          </h1>
          <img
            src="/images/news1.jpeg"
            style={{ width: "100%", height: "415px", objectFit: "cover" }}
          />
          <div>
            <p className="text-caption text-sm mb-8 text-justify italic mt-1">
              More than 200 employees participated in the college’s Research and
              Scholarship Symposium on October 24.{" "}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 mt-4 lg:flex-row">
            <div className="lg:w-1/6 w-full border border-1 border-[#ede9e9] h-fit rounded-sm order-2 lg:order-1">
              <div className="flex flex-col justify-center py-4 px-5 gap-2">
                <h3
                  className="font-semibold text-lg text-title  mb-2"
                  style={{ fontFamily: "Jost" }}
                >
                  <span className="text-primaryG">Share</span> this news?
                </h3>
                <div className="bg-[#3A579D] flex flex-row gap-4 pl-4 py-1 rounded-md items-center text-md">
                  <FaFacebookF />
                  Facebook
                </div>
                <div className="bg-[#007BB5] flex flex-row gap-4 pl-4 py-1 rounded-md items-center text-md">
                  <FaLinkedinIn />
                  LinkedIn
                </div>
                <div className="bg-[#00A2F3] flex flex-row gap-4 pl-4 py-1 rounded-md items-center text-md">
                  <FaXTwitter />
                  Twitter
                </div>
              </div>
            </div>

            <div
              className="lg:w-5/6 w-full text-paragraph text-md font-inter text-justify sm:w-full   order-1 lg:order-2"
              style={{ fontFamily: "jost" }}
            >
              <p>
                More than 200 Conestoga employees representing all ten academic
                schools participated in the college’s Research and Scholarship
                Symposium on October 24 at Tapestry Hall in Cambridge. The event
                was hosted in collaboration with Teaching & Learning, Degree
                Quality & Accreditation, and Research, Innovation &
                Entrepreneurship to showcase research and scholarship activity
                at the college and connect faculty to resources. “Through
                research and innovation, faculty and students actively
                contribute to the economic prosperity of the communities we
                serve,” said Conestoga President John Tibbits.
                <br />
                <br /> “We are creating connections between academia, industry
                and the community by fostering collaboration that transfers
                knowledge, technology and ideas to the benefit of our partners
                and society.” The event featured a keynote presentation from Dr.
                Ginger Grant, dean of Research & Innovation at Humber College,
                who provided insights into creating a culture for research
                excellence. Attendees also heard from speakers across the
                college about Conestoga’s seven research centres, funded
                research projects, scholarship activities, and college resources
                to support applied research, innovation and entrepreneurship,
                including Library Services, Open Access Teaching Case Journal
                (OATCJ) and the Research Ethics Board. Included in the project
                spotlight was research supported by the Conestoga New and
                Emerging Research Grant (CNERG).
                <br />
                <br />
                Launched in 2022, CNERG is funded entirely by the college to
                support small-scale projects in new and emerging areas of
                research. To date, more than 20 researchers have received
                funding. In October, the Office of Research Services announced
                an additional funding stream, CNERG+, to support large-scale
                projects. “We are delighted to have the college’s support in
                providing opportunities for faculty and staff to engage in
                research,” said Michelle Chrétien, associate vice-president,
                Research & Innovation. “The expanded CNERG program will
                accelerate our research capacity growth and enable even greater
                impact on our partners and communities.” Over the last year,
                more than 200 Conestoga students and 40 faculty were engaged in
                $5.6 million in funded research involving over 80 partners
                across Canada. The college works in collaboration with industry,
                community and government partners to deliver innovative
                solutions to real-world challenges. Conestoga consistently ranks
                among Canada’s top research colleges, finishing in 15th place
                overall in 2022. Last year, the college was among Canada’s top
                ten large colleges for its number of paid student researchers
                and completed research projects, as well as its industry income.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
