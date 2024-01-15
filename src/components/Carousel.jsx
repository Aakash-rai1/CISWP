"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CarouselContent from "./CarouselContent"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <section className="text-black w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >      

        <SwiperSlide className="w-full h-320">
          <Image
            src="/images/slide1.jpg"
            alt="Picture of the author"
            style={{
              width: "100%",
              height: 580,
              objectFit: "cover",
            }}
            width={1500}
            height={1500}
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-120 relative">
          <Image
            src="/images/slide2.jpg"
            alt="Picture of the author"
            style={{
              width: "100%",
              height: 580,
              objectFit: "cover",
              objectPosition: "center",
            }}
            width={1500}
            height={1500}
            quality={100}
          />
        </SwiperSlide>

        <SwiperSlide className="w-full h-320 relative">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full h-full">
              {/* Image and black overlay container */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/slide3.jpg"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: 580,
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
              <CarouselContent/>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
