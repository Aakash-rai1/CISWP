"use client"
import React from "react";

const CardData = [
  {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),url('images/slide3.jpg')",
    title: "Skilled Trades Research, InnoVation, and Education in Occupational Safety and Health (STRIVE OSH)",
    fundingAgency: "MLITSD",
    status: "Ongoing",
  },
  {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),url('images/knowledge.png')",
    title: "Improving Worker Health and Performance in Construction: Implementation and Adoption of Advanced Technologies",
    fundingAgency: "SSHRC, NSERC, CCSIF",
    status: "Ongoing",
  },
  
  
  // Add more card data as needed
];

const Card = ({ backgroundImage, title, fundingAgency, status }) => {
  return (
    <div
      className="w-full h-full bg-primaryG relative cursor-pointer hover:shadow-xl"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
      
    >
      <div className="p-8">
        <div className="absolute p-2 bg-primaryG bg-opacity-70 text-xs font-semibold rounded-sm right-4">
          <p>Status: {status}</p>
        </div>
        <div className="w-3/4 mb-12 mt-8">
          <h1 className="font-inter font-bold text-lg">{title}</h1>
          <p className="text-sm italic mt-2">Funding Agency: {fundingAgency}</p>
        </div>
      </div>

      <a
        href="#"
        className="border border-2 rounded-sm px-4 py-2 hover:bg-secondaryO font-semibold absolute bottom-4 left-8"
      >
        Read the Report
      </a>
    </div>
  );
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <div className="container mt-12 mx-auto px-16 py-4">
        <h2 className="font-bold text-2xl text-title font-inter mb-8">Skilled Trade Research</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {CardData.map((card, index) => (
            <Card
              key={index}
              backgroundImage={card.backgroundImage}
              title={card.title}
              fundingAgency={card.fundingAgency}
              status={card.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
