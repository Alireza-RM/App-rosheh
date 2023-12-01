"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/globals.css";
// import "@/module/Swiiper.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { e2p } from "@/utils/replaceNumber";
import Image from "next/image";

export default function Swiiper() {
  const paginationNumber = (i) =>
    "<div>" +
    "<p>" +
    e2p("0" + i) +
    "</p>" +
    "<span>" +
    "" +
    "<span/>" +
    "</div>";

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span  class="' +
        className +
        '"  id="' +
        (index > 3 ? "mobile" + (index + 1) : "") +
        '">' +
        paginationNumber(index + 1) +
        "</span>"
      );
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="hidden min-[577px]:flex cursor-grab"
      >
        <SwiperSlide className="">
          <Image
            src={"/images/اسلاید-روشه-1-copy.png"}
            alt="logo"
            width={1000000}
            height={100000}
            className="w-full h-full "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={"/images/اسلاید-روشه-4-copy.png"}
            alt="logo"
            width={1000000}
            height={100000}
            className="w-full h-full "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={"/images/اسلاید-روشه-8-copy-1.png"}
            alt="logo"
            width={1000000}
            height={100000}
            className="w-full h-full "
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={"/images/اسلاید-روشه-7-copy-2.png"}
            alt="logo"
            width={1000000}
            height={100000}
            className="w-full h-full "
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        pagination={pagination}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="hidden max-[577px]:flex cursor-grab"
      >
        <SwiperSlide className="!w-full aspect-w-16 aspect-h-9 ">
          <Image
            src={"/images/p6430-av-11-zoom.jpg"}
            alt="logo"
            width={1000000}
            height={100000}
            className="!w-full !h-full !object-fill !aspect-4"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-full aspect-w-16 aspect-h-9">
          <Image
            src={"/images/Y0715201_E02_GHC-e1663056030242.webp"}
            alt="logo"
            width={1000000}
            height={100000}
            className=" !w-full !h-full !object-fill "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
