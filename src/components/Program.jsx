"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Program = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "480px",
          marginTop: "16px",
          width: "100%",
          backgroundColor: "#0D0C1C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Align center vertically
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/images/knowledge.png"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/images/skel.jpg"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/images/mental.jpg"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/images/management.jpg"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/images/knowledge.png"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/images/knowledge.png"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
          <img
            src="/images/map.jpg"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{ height: "80px" }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <p style={{ margin: 0 }}>Knowledge transfer & Exchange</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <p style={{ margin: 0 }}>Musculoskeletal Health</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <p style={{ margin: 0 }}>Mental Health & Wellness</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <p style={{ margin: 0 }}>Organizational Management System</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <p style={{ margin: 0  }}>Disability & Employment</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <p style={{ margin: 0  }}>Disability & Employment</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Program;
