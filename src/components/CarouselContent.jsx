// HeroContent.js
import Link from "next/link";
import React from "react";

const CarouselContent = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
      <h2 className="text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl mb-4 pt-28 sm:text-xs px-4">
        Building capacity for productive and sustainable work
      </h2>
      <p className="text-center px-32 text-xs md:text-xl lg:text-xl hidden sm:block">
        The Canadian Institute for Safety, Wellness & Performance (CISWP) is
        committed to building productive and sustainable workplaces through a
        collaborative and transdisciplinary approach. CISWP’s goal is to
        position Canada as a global leader in empowering business to adapt and
        thrive in a competitive economy and aims to improve the safety,
        wellness, and performance of the Canadian workforce through knowledge
        generation, research transfer, and workforce development.
      </p>

      <div className="flex flex-col gap-4 mt-8 text-center px-4 sm:flex-row md:flex-row lg:flex-row">
        <Link
          href="/#contact"
          className="px-6 inline-block py-3 w-full sm:w-fit rounded-md bg-primary hover:bg-secondary  text-white"
        >
          Explore More
        </Link>

        <Link
          href="/"
          className="px-6 border w-full  inline-block py-3 w-full sm:w-fit rounded-md  hover:bg-secondary  text-white"
        >
          What We Do
        </Link>
      </div>
    </div>
  );
};

export default CarouselContent;
