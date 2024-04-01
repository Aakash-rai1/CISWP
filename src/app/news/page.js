"use client";
import React from "react";
import SideNews from "@/components/SideNews";
import { IoMdTime } from "react-icons/io";
import Link from "next/link";
import Footer from "@/components/Footer";

const Page = () => {
  const cardData = [
    {
      backgroundImage: "/images/news1.jpeg",
      title: "Symposium highlights research and scholarship at Conestoga",
      date: "Posted on December 3, 2021 11:01 PM",
      text: "More than 200 Conestoga employees representing all ten academic schools participated in the college’s Research and Scholarship Symposium on October 24 at Tapestry Hall in Cambridge The event was hosted in collaboration with Teaching & Learning, Degree Quality & Accreditation, and Research, Innovation & Entrepreneurship to showcase research and scholarship activity at the college and connect faculty to resources.",
    },
    {
      title:
        "Conestoga professor wins award for presentation on ground-breaking research",
      date: "Posted on December 3, 2021 11:01 PM",
      text: "A Conestoga finance professor was honoured with an award for an outstanding presentation on her CNERG-funded research on the barriers women face in the financial planning sector. Tanya Staples won the Best Research Presentation Award at the 2023 Financial Planning Academics Forum and 11th Personal Finance Symposium, hosted by the University of South Australia on November 19-20.",
    },
    {
      title: "CNERG and CNERG+ funding awarded to new and emerging scholars",
      date: "Posted on December 3, 2021 11:01 PM",
      text: "The Office of Research Services has awarded funding for 17 projects set to begin winter 2024. Launched in 2022, the Conestoga New and Emerging Researcher Grant (CNERG) is funded entirely by the college to support small-scale projects in new and emerging areas of research. Nine recipients will receive $10,000 to fund research from diverse academic areas, including business, workforce development, hospitality and culinary arts, engineering and technology, and community services.",
    },
    {
      title:
        "CISWP research will address inclusive and accessible skilled trades employment",
      date: "Posted on December 3, 2021 11:01 PM",
      text: "Through a research project funded by Accessibility Standards Canada, the Canadian Institute for Safety, Wellness & Performance (CISWP) at Conestoga College will conduct research that will inform the development of next-generation model standards for accessible employment in skilled trades.",
    },
  ];

  // Splitting cardData into two arrays, evenData and oddData
  const evenData = cardData.filter((_, index) => index % 2 === 0);
  const oddData = cardData.filter((_, index) => index % 2 !== 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F5]">
      <div className="container mt-12 mx-auto px-16 py-4">
        {/* title and search bar */}
        <div class="grid grid-cols-12 mx-auto ">
          <div className="col-span-full lg:col-span-9 mb-4">
            <h2 class="font-bold text-4xl text-title font-inter ">News</h2>
          </div>

          <div className="col-span-full pl-0 lg:col-span-3 mb-8 justify-end lg:mt-0 lg:pl-8">
            <div className="flex justify-between bg-white py-1 pl-4 pr-2 w-full rounded-md bordered ">
              <input
                class="bg-white text-paragraph text-sm sm:w-full "
                type="text"
                placeholder="Search here..."
              />
              <button class="btn btn-sm text-white ml-2">Search</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mx-auto ">
          <div className="col-span-full lg:col-span-9 lg:pr-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto">
              {/* First Column */}
              <div className="flex flex-col gap-8">
                {evenData.map((card, index) => (
                  <NewsCard key={index} card={card} />
                ))}
              </div>
              {/* Second Column */}
              <div className="flex flex-col gap-8">
                {oddData.map((card, index) => (
                  <NewsCard key={index} card={card} />
                ))}
              </div>
            </div>
          </div>

          {/* Side Bar */}
          <div className="col-span-full pl-0 lg:col-span-3 justify-end lg:mt-0 lg:pl-8">
            <SideNews />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const NewsCard = ({ card }) => {
  return (
    <Link href="/newsInside"> {/* Use href prop */}
      <div className="flex flex-col cursor-pointer">
        {card.backgroundImage && (
          <div
            className="h-96 sm:h-80 md:h-72 lg:h-64 bg-white rounded-sm shadow-md hover:shadow-xl"
            style={{
              backgroundImage: `url('${card.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginBottom: "16px",
              transition: "background-size 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundSize = "102%")}
            onMouseLeave={(e) => (e.target.style.backgroundSize = "cover")}
          />
        )}
        <h1
          className="font-bold text-3xl text-title  mb-2 "
          style={{ fontFamily: "Times" }}
        >
          {card.title}
        </h1>
        <p className="text-paragraph text-md font-inter text-justify"
         style={{fontFamily:"jost"}}>
          {card.text}
        </p>
        <p className="text-xs text-caption italic mt-2 ">{card.date}</p>
      </div>
    </Link>
  );
};

export default Page;
