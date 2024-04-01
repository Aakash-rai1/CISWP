"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const webinarsData = [
  {
    id: 1,
    title: "Work Disability Management in the Paramedic Service Organizations",
    image: "images/web1.jpg",
    duration: "Sept 11 . 15 mins long",
  },
  {
    id: 2,
    title:
      "Working in the Work-from-Home era: Understanding its Effect on Employee...",
    image: "images/web2.jpg",
    duration: "Sept 11 . 15 mins long",
  },
  {
    id: 3,
    title: "Formal Launch of Work Disability Management System Standard...",
    image: "images/web1.jpg",
    duration: "Sept 11 . 15 mins long",
  },
  {
    id: 4,
    title: "Work Disability Management in the Paramedic Service Organizations",
    image: "images/web2.jpg",
    duration: "Sept 11 . 15 mins long",
  },
];

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <div className="container mt-12 mx-auto px-16 py-4">
        {/* title and searchbar */}
        <div class="grid grid-cols-12 mx-auto ">
          <div className="col-span-full lg:col-span-9 mb-4">
            <h2 class="font-bold text-4xl text-title font-inter ">Webinars</h2>
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
        <h3 className="text-title font-bold text-xl font-inter mt-4">
          Top picks for <span className="text-primaryG">Safety</span>
        </h3>
        <Link href="/webinarInside"> 

        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {webinarsData.map((webinar) => (
            <div key={webinar.id} className="w-full  h-fit flex flex-col">
              <img
                src={webinar.image}
                alt="webinar thumbnail"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h2 className="font-inter text-title text-md font-semibold mt-2">
                {webinar.title}
              </h2>
              <span className="flex flex-row gap-4 text-caption text-xs  mt-1">
                {webinar.duration}
              </span>
            </div>
          ))}
        </div>
        </Link>

        <h3 className="text-title font-bold text-xl font-inter mt-14">
          Our Latest Webinars
        </h3>
        <Link href="/webinarInside"> 
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {webinarsData.map((webinar) => (
            <div key={webinar.id} className="w-full  h-fit flex flex-col">
              <img
                src={webinar.image}
                alt="webinar thumbnail"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h2 className="font-inter text-title text-md font-semibold mt-2">
                {webinar.title}
              </h2>
              <span className="flex flex-row gap-4 text-caption text-xs  mt-1">
                {webinar.duration}
              </span>
            </div>
          ))}
        </div>
          </Link>
        <div className="border border-1 border-[#d6d4d4] text-center py-2 rounded-sm mt-12 text-sm text-caption font-semibold cursor-pointer">
          See more
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
