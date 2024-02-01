"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CarouselContent from "./CarouselContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <section className="text-black w-full">
      <Swiper
        loop = 'true'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        

        <SwiperSlide className="w-full h-320 relative">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full h-full">
              {/* Image and black overlay container */}
              <div className="relative w-full h-full">
                {/* Background Image with Black Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/images/slide1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Image Component */}
                <Image
                  src="/images/slide1.jpg"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: 480,
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />

                {/* Content */}
                <CarouselContent />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-320 relative">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full h-full">
              {/* Image and black overlay container */}
              <div className="relative w-full h-full">
                {/* Background Image with Black Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/images/slide3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Image Component */}
                <Image
                  src="/images/slide3.jpg"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: 480,
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />

                {/* Content */}
                <CarouselContent />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-320 relative">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full h-full">
              {/* Image and black overlay container */}
              <div className="relative w-full h-full">
                {/* Background Image with Black Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/images/slide2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Image Component */}
                <Image
                  src="/images/slide2.jpg"
                  alt="Picture of the author"
                  style={{
                    width: "100%",
                    height: 480,
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />

                {/* Content */}
                <CarouselContent />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
