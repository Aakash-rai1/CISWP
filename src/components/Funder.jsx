"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Funder = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-title mb-8">
        Our Funders
      </h2>

      <Marquee speed={40} direction="right">
        <div className="flex flex-row gap-14">
          <Image
            src="/images/sponsors/innovation.png"
            alt="Sponsor"
            style={{
              width: "100%",
              height: 80,
              objectFit: "cover",
            }}
            width={1500}
            height={1500}
            quality={100}
          />
          <Image
            src="/images/sponsors/cihrirsc.png"
            alt="Sponsor"
            style={{
              width: "100%",
              height: 80,
              objectFit: "cover",
            }}
            width={1500}
            height={1500}
            quality={100}
          />
          <Image
            src="/images/sponsors/sshrc.png"
            alt="Sponsor"
            style={{
              width: "100%",
              height: 80,
              objectFit: "cover",
            }}
            width={1500}
            height={1500}
            quality={100}
          />
          <Image
            src="/images/sponsors/nserc.svg"
            alt="Sponsor"
            style={{
              width: "100%",
              height: 80,
              objectFit: "cover",
            }}
            width={1500}
            height={1500}
            quality={100}
          />
          
          <Image
            src="/images/sponsors/drdc.png"
            alt="Sponsor"
            style={{
              width: "100%",
              height: 80,
              objectFit: "cover",
            }}
            width={1500}
            height={1500}
            quality={100}
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Funder;
