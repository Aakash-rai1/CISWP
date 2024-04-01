"use client";
import Footer from "@/components/Footer";
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
        <div class="grid grid-cols-12 mx-auto">
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
        <div className="grid grid-cols-12 mx-auto gap-2">
          <div className="col-span-full lg:col-span-9 mb-32 lg:mb-4  ">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2Xw18BCOmWU?si=rrBIP_nnL6jQbz9K"
              title="CISWP webinar video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 className="font-inter text-title text-xl font-semibold mt-2">
              Work Disability Management in the Paramedic Service Organizations:
            </h2>

            <span className="flex flex-row gap-4 text-caption text-xs  mt-1">
              Sept 11 . 15 mins long
            </span>
          </div>

          <div className="col-span-full pl-0 lg:col-span-3 mb-8 justify-end lg:mt-0 lg:pl-8 ">
            <h2 className="text-title font-bold mb-4 font-inter text-xl">
              More Webinars
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 lg:flex-row">
                <img src="images/web1.jpg" alt="webinar thumbnail" className="w-full lg:w-3/6"/>
                <h3 className="text-title font-semibold text-md">Research & Innovation Impact Report 2022-2023</h3>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <img src="images/web1.jpg" alt="webinar thumbnail" className="w-full lg:w-3/6"/>
                <h3 className="text-title font-semibold text-md">Research & Innovation Impact Report 2022-2023</h3>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <img src="images/web1.jpg" alt="webinar thumbnail" className="w-full lg:w-3/6"/>
                <h3 className="text-title font-semibold text-md">Research & Innovation Impact Report 2022-2023</h3>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <img src="images/web1.jpg" alt="webinar thumbnail" className="w-full lg:w-3/6"/>
                <h3 className="text-title font-semibold text-md">Research & Innovation Impact Report 2022-2023</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
