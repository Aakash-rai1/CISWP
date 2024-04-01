"use client";
import Footer from "@/components/Footer";
import React from "react";
import TeamSlider from "@/components/TeamSlider";
import Marquee from "react-fast-marquee";
import TeamMemberCard from "../../components/TeamMemberCard";

const Page = () => {
  const teamMembers = [
    {
      imageUrl: "images/team/amin.png",
      name: "Amin Yazdani, PhD, CSP",
      role: "Executive Director",
    },
    {
      imageUrl: "images/team/marcus.png",
      name: "Marcus Yung, PhD, CPE",
      role: "Director",
    },
    {
      imageUrl: "images/team/bronson.png",
      name: "Bronson Du, M.Sc.",
      role: "Researcher",
    },
    {
      imageUrl: "images/team/kumar.png",
      name: "Kumar Soma, M.Sc.",
      role: "Laboratory Manager",
    },
    {
      imageUrl: "images/team/nicki.png",
      name: "Nicki Islic",
      role: "Associate Director",
    },
    {
      imageUrl: "images/team/victoria.png",
      name: "Victoria",
      role: "Researcher",
    },
    {
      imageUrl: "images/team/bronson.png",
      name: "Bronson Du, M.Sc.",
      role: "Researcher",
    },
    {
      imageUrl: "images/team/binh.png",
      name: "Binh Ngo, M.Sc.",
      role: "Research Project Manager",
    },
  ];

  const leader = [
    {
      imageUrl: "images/team/amin.png",
      name: "Amin Yazdani, PhD, CSP",
      role: "Executive Director",
    },
    {
      imageUrl: "images/team/marcus.png",
      name: "Marcus Yung, PhD, CPE",
      role: "Director",
    },
    {
      imageUrl: "images/team/nicki.png",
      name: "Nicki Islic",
      role: "Associate Director",
    },
  ];

  const researcher = [
    {
      imageUrl: "images/team/victoria.png",
      name: "Victoria",
      role: "Researcher",
    },
    {
      imageUrl: "images/team/bronson.png",
      name: "Bronson Du, M.Sc.",
      role: "Researcher",
    },

    {
      imageUrl: "images/team/kumar.png",
      name: "Kumar Soma, M.Sc.",
      role: "Laboratory Manager",
    },
    {
      imageUrl: "images/team/binh.png",
      name: "Binh Ngo, M.Sc.",
      role: "Research Project Manager",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F5] ">
      <div>
        <img
          src="images/smallLogo.png"
          alt="logo"
          height={48}
          width={48}
          className="mx-auto mt-24 "
        />

        <h1
          className="text-title text-center font-bold text-4xl lg:text-5xl m-auto mt-4 font-inter"
          style={{ width: "80%" }}
        >
          We’ve got an entire team dedicated to <br />
          <span className="text-primaryG">
            {" "}
            Safety, Wellness & Performance.
          </span>{" "}
        </h1>

        <p
          className="text-paragraph text-md text-center mt-4 mx-auto w-3/4 lg:w-1/3"
          style={{ fontFamily: "jost" }}
        >
          Our philosophy is simple; hire great people and give them the
          resources and support to do their bestwork.
        </p>

        <Marquee
          className="font-bold text-primaryG mb-28 mt-12 "
          style={{ height: "312px", width: "100%", overflow: "hidden" }}
          pauseOnHover="true"
          speed={120}
        >
          <div className="flex flex-row gap-4 p-4">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </Marquee>
      </div>

      <h2 className="mx-auto text-title text-3xl font-inter font-bold">
        Leadership
      </h2>

      <div className="container mt-4 mx-auto px-16 py-4">
        <div className="flex flex-col gap-8 justify-center sm:flex-row">
          {leader.map((member, index) => (
            <TeamMemberCard
              key={index}
              imageUrl={member.imageUrl}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>

      <h2 className="mx-auto text-title text-3xl font-inter font-bold mt-16">
        Researchers
      </h2>

      <div className="container mt-4 mx-auto px-16 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {researcher.map((member, index) => (
            <TeamMemberCard
              key={index}
              imageUrl={member.imageUrl}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
