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

export default function Slidespecial() {
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
              width="400"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-education-202310_GEO_TH_LANG_TH?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699568555294"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-education-202310_GEO_TH_LANG_TH?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699568555294, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-education-202310_GEO_TH_LANG_TH?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699568555294 2x"
              className="rounded-xl w-full px-12 py-12 scale-125"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">การศึกษา</span>
              <span className="text-xl max-md:text-base text-black font-bold  pb-2">
                ประหยัดกับ Mac เครื่องใหม่ <br />
                ด้วยราคาพิเศษเพื่อส่งเสริม
                <br />
                การศึกษา
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl bg-black shadow-lg relative hover:scale-104 hover:shadow-xl duration-500 overflow-hidden">
            <img
              width="400"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-business-202310?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055716452"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-business-202310?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055716452, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-business-202310?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055716452 2x"
              className="rounded-xl w-full px-12 py-12 scale-125"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ธุรกิจ</span>
              <span className="text-xl max-md:text-base text-white font-bold  pb-2">
                ไม่ว่าธุรกิจใหญ่หรือธุรกิจ <br />
                เล็ก เราก็ยินดีช่วยเหลืองาน
                <br />
                ของคุณ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
