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
          height: "400px",
          marginTop: "16px",
          width: "100%",
          backgroundColor: "#0D0C1C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Align center vertically
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-tr-3xl rounded-tl-3xl"
      >
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <div className="absolute z-10 p-16 align-middle">
            <h2 className="font-inter font-bold text-xl mb-1">Knowledge transfer & Exchange</h2>
            <p className="text-sm lg:text-base">
              Knowledge transfer and exchange (KTE) is vital for applying
              research knowledge into practice and decision-making. With immense
              resources invested into research, the knowledge generated should
              be readily accessible, available and applicable to knowledge users
              to use in practice, planning and policy-making. Through ongoing
              collaboration with stakeholders in all stages of our applied
              research, including conceptualization, development, execution and
              reporting, our KTE strategies fulfill the identified needs of
              knowledge users. co-creation of (general and industry-specific)
              evidence-informed standards, guidelines, practices, tools,
              products, and technologies; and integration of research knowledge
              into course curricula.
            </p>
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/knowledge.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className="absolute z-10 p-16 align-middle">
            <h2 className="font-inter font-bold text-xl mb-1">Musculoskeletal Health</h2>
            <p className="text-sm lg:text-base">
              Knowledge transfer and exchange (KTE) is vital for applying
              research knowledge into practice and decision-making. With immense
              resources invested into research, the knowledge generated should
              be readily accessible, available and applicable to knowledge users
              to use in practice, planning and policy-making. Through ongoing
              collaboration with stakeholders in all stages of our applied
              research, including conceptualization, development, execution and
              reporting, our KTE strategies fulfill the identified needs of
              knowledge users. co-creation of (general and industry-specific)
              evidence-informed standards, guidelines, practices, tools,
              products, and technologies; and integration of research knowledge
              into course curricula.
            </p>
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/skel.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className="absolute z-10 p-16 align-middle">
            <h2 className="font-inter font-bold text-xl mb-1">Mental Health & Wellness</h2>
            <p className="text-sm lg:text-base">
              Knowledge transfer and exchange (KTE) is vital for applying
              research knowledge into practice and decision-making. With immense
              resources invested into research, the knowledge generated should
              be readily accessible, available and applicable to knowledge users
              to use in practice, planning and policy-making. Through ongoing
              collaboration with stakeholders in all stages of our applied
              research, including conceptualization, development, execution and
              reporting, our KTE strategies fulfill the identified needs of
              knowledge users. co-creation of (general and industry-specific)
              evidence-informed standards, guidelines, practices, tools,
              products, and technologies; and integration of research knowledge
              into course curricula.
            </p>
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/mental.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className="absolute z-10 p-16 align-middle">
            <h2 className="font-inter font-bold text-xl mb-1">Organizational Management System</h2>
            <p className="text-sm lg:text-base">
              Knowledge transfer and exchange (KTE) is vital for applying
              research knowledge into practice and decision-making. With immense
              resources invested into research, the knowledge generated should
              be readily accessible, available and applicable to knowledge users
              to use in practice, planning and policy-making. Through ongoing
              collaboration with stakeholders in all stages of our applied
              research, including conceptualization, development, execution and
              reporting, our KTE strategies fulfill the identified needs of
              knowledge users. co-creation of (general and industry-specific)
              evidence-informed standards, guidelines, practices, tools,
              products, and technologies; and integration of research knowledge
              into course curricula.
            </p>
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/management.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className="absolute z-10 p-16 align-middle">
            <h2 className="font-inter font-bold text-xl mb-1">Disability & Employment</h2>
            <p className="text-sm lg:text-base">
              Knowledge transfer and exchange (KTE) is vital for applying
              research knowledge into practice and decision-making. With immense
              resources invested into research, the knowledge generated should
              be readily accessible, available and applicable to knowledge users
              to use in practice, planning and policy-making. Through ongoing
              collaboration with stakeholders in all stages of our applied
              research, including conceptualization, development, execution and
              reporting, our KTE strategies fulfill the identified needs of
              knowledge users. co-creation of (general and industry-specific)
              evidence-informed standards, guidelines, practices, tools,
              products, and technologies; and integration of research knowledge
              into course curricula.
            </p>
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/disable.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <div className="absolute z-10 p-16 align-middle">
            <h2 className="font-inter font-bold text-xl mb-1">Building workforce for tomorrow</h2>
            <p className="text-sm lg:text-base">
              Knowledge transfer and exchange (KTE) is vital for applying
              research knowledge into practice and decision-making. With immense
              resources invested into research, the knowledge generated should
              be readily accessible, available and applicable to knowledge users
              to use in practice, planning and policy-making. Through ongoing
              collaboration with stakeholders in all stages of our applied
              research, including conceptualization, development, execution and
              reporting, our KTE strategies fulfill the identified needs of
              knowledge users. co-creation of (general and industry-specific)
              evidence-informed standards, guidelines, practices, tools,
              products, and technologies; and integration of research knowledge
              into course curricula.
            </p>
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/workforce.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{ height: "80px" }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0.5}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-br-3xl rounded-bl-3xl"
        
      >
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <p style={{ margin: 0 }}>Knowledge transfer & Exchange</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",

          }}
        >
          <p style={{ margin: 0 }}>Musculoskeletal Health</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            padding: "16px",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>Mental Health & Wellness</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            padding: "16px",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>Organizational Management System</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            padding: "16px",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>Disability & Employment</p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-title r"
          style={{
            display: "flex",
            padding: "16px",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>Building workforce for tomorrow</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Program;
