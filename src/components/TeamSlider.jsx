"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import TeamMemberCard from "./TeamMemberCard";

const TeamSlider = () => {
  const teamMembers = [
    {
      imageUrl: "images/team/amin.png",
      name: "Amin Yazdani, PhD, CSP",
      role: "Executive Director",
    },
    {
      imageUrl: "images/team/marcus.png",
      name: "Marcus Yung, PhD, CPE",
      role: "Associate Director",
    },
    {
      imageUrl: "images/team/bronson.png",
      name: "Bronson Du, M.Sc.",
      role: "Researcher",
    },
    {
      imageUrl: "images/team/kumar.png",
      name: "Kumar Soma, M.Sc.",
      role: "Researcher",
    },
    {
      imageUrl: "images/team/nicki.png",
      name: "Nicki Islic",
      role: "Researcher",
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
      role: "Researcher",
    },
  ];
  return (
    <div>
      <h1
        className="text-title text-center font-bold text-4xl m-auto mt-16 font-inter"
        style={{ width: "55%" }}
      >
        We’ve got an entire team <br /> dedicated to{" "}
        <span className="text-primary">
          {" "}
          Safety, Wellness <br /> & Performance.
        </span>{" "}
      </h1>

      <Marquee
        className="font-bold text-primary mb-28 mt-12 "
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
  );
};

export default TeamSlider;
