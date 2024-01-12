"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Shoppingadvice() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className={`mySwiper !z-0 !px-4  !pt-5  !pb-10 `}
    >
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl bg-white shadow-lg relative hover:scale-104 hover:shadow-xl duration-500 overflow-hidden">
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-compare-models-202310_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1697909995943"
              className="rounded-xl w-full px-12 scale-125"
            ></img>
   
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
                เปรียบเทียบทุกรุ่น
              </span>
              <span className="text-xl max-md:text-base text-black font-bold  pb-2">
                Mac รุ่นไหนเหมาะกับคุณ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl bg-white shadow-lg relative hover:scale-104 hover:shadow-xl duration-500 overflow-hidden">
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-shop0-card-50-specialist-help-202309_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1695232630061"
              className="rounded-xl w-full px-12 scale-125"
            ></img>
   
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
               SPECIALIST เรื่อง MAC
              </span>
              <span className="text-xl max-md:text-base text-black font-bold  pb-2">
                ช้อปแบบตัวต่อตัวกับ Specialist <br/> ทางออนไลน์หรือในร้าน
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
     
    </Swiper>
  );
}
