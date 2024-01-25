import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ResearchProject = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
      <div
        className="relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out group hover:drop-shadow-xl"
        style={{
          height: "320px",
          width: "100%",
          backgroundImage: `
      linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(14, 14, 14, 0.1)),
      linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(14, 14, 14, 0.3)),
      url('/images/trade.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white font-bold px-4 py-8 text-xl font-inter">
          OSH RESEARCH IN SKILL TRADES
        </h2>

        {/* Hidden Link initially, shown at the bottom on hover */}
        <Link
          className="absolute bottom-0 hidden group-hover:block text-white font-bold px-4 py-4 w-full "
          href={"/"}
        >
          <div className="flex flex-row gap-2 justify-center items-center border rounded-md  py-2">
            Learn More
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
      <div
        className="relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out group hover:drop-shadow-xl"
        style={{
          height: "320px",
          width: "100%",
          backgroundImage: `
      linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(14, 14, 14, 0.1)),
      linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(14, 14, 14, 0.3)),
      url('/images/optimize.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white font-bold px-4 py-8 text-2xl font-inter">
          Optimizing work from home
        </h2>

        {/* Hidden Link initially, shown at the bottom on hover */}
        <Link
          className="absolute bottom-0 hidden group-hover:block text-white font-bold px-4 py-4 w-full "
          href={"/"}
        >
          <div className="flex flex-row gap-2 justify-center items-center border rounded-md  py-2">
            Learn More
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
      <div
        className="relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out group hover:drop-shadow-xl"
        style={{
          height: "320px",
          width: "100%",
          backgroundImage: `
      linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(14, 14, 14, 0.1)),
      linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(14, 14, 14, 0.3)),
      url('/images/support.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white font-bold px-4 py-8 text-2xl font-inter">
          Supporting Canada's frontline
        </h2>

        {/* Hidden Link initially, shown at the bottom on hover */}
        <Link
          className="absolute bottom-0 hidden group-hover:block text-white font-bold px-4 py-4 w-full "
          href={"/"}
        >
          <div className="flex flex-row gap-2 justify-center items-center border rounded-md  py-2">
            Learn More
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
      <div
        className="relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out group hover:drop-shadow-xl"
        style={{
          height: "320px",
          width: "100%",
          backgroundImage: `
      linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(14, 14, 14, 0.1)),
      linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(14, 14, 14, 0.3)),
      url('/images/dis.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <h2 className="text-white font-bold px-4 py-8 text-2xl font-inter">
          Disability and employment
        </h2>

        {/* Hidden Link initially, shown at the bottom on hover */}
        <Link
          className="absolute bottom-0 hidden group-hover:block text-white font-bold px-4 py-4 w-full "
          href={"/"}
        >
          <div className="flex flex-row gap-2 justify-center items-center border rounded-md  py-2">
            Learn More
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ResearchProject;
