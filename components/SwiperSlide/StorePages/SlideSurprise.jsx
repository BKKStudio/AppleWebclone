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

export default function SlideSurprise() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className={`mySwiper !z-0 !px-4   !pb-10 `}
    >
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg  md:w-102 md:h-102 hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-music-202311_GEO_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697222818753"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-music-202311_GEO_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697222818753, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-music-202311_GEO_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697222818753 2x"
              className="rounded-xl w-full max-md:hidden"
            ></img>
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-music-202311_GEO_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697222818612"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-music-202311_GEO_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697222818612, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-music-202311_GEO_TH_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697222818612 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                ใช้ Apple Music ได้ฟรีนาน 6 เดือน
              </span>
              <span className="text-base text-gray-600 pb-2">
                มาพร้อมกับ AirPods หรือผลิตภัณฑ์ Beats บางรายการ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg md:w-102 md:h-102  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="310"
              height="455"
              alt="Spirited, a film on Apple TV+ featuring Will Ferrell and Ryan Reynolds, Ferrell, dressed in green, and Reynolds, dressed in red, hold identical poses side by side, with Ferrell slightly in front, both are leaning forward with left arm in front and right arm behind as if dancing."
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-tv-plus-202211_FMT_WHH?wid=310&amp;hei=455&amp;fmt=png-alpha&amp;.v=1668218300684"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-tv-plus-202211_FMT_WHH?wid=310&amp;hei=455&amp;fmt=png-alpha&amp;.v=1668218300684, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-apple-tv-plus-202211_FMT_WHH?wid=620&amp;hei=910&amp;fmt=png-alpha&amp;.v=1668218300684 2x"
              className="rounded-xl w-full object-cover w-102 h-102"
            ></img>
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-white pb-2 ">APPLE TV+</span>
              <span className="text-xl text-white font-bold  pb-2">
                APPLE Original ที่ออกมาใหม่ ทุกเดือน
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg  md:w-102 h-102  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="476"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108_FMT_WHH?wid=476&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626375542000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108_FMT_WHH?wid=476&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626375542000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108_FMT_WHH?wid=952&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626375542000 2x"
              className="rounded-xl object-cover w-full h-full"
            ></img>
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xl text-black font-bold  pb-2">
                4 บริการของ Apple หนึ่งการสมัครสมาชิกแบบง่ายๆ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg  md:w-102 h-102  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-applecare-202309_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692730496846"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-applecare-202309_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692730496846, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-applecare-202309_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692730496846 2x"
              className="rounded-xl object-cover w-full h-full max-md:hidden"
            ></img>
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-applecare-202309_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692730496846"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-applecare-202309_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692730496846, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-applecare-202309_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692730496846 2x"
              className="rounded-xl w-full md:hidden"
            ></img>
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xl text-black font-bold  pb-2">
                เราดูแลให้เอง
              </span>
              <span className="text-base text-gray-600 pb-2">
                วันนี้ AppleCare+
                มาพร้อมบริการซ่อมแบบไม่จำกัดจำนวนครั้งสำหรับความคุ้มครอง
                ด้านความเสียหายจากอุบัติเหตุ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg  md:w-102 h-102  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-homekit-202309_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1693766127568"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-homekit-202309_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1693766127568, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-homekit-202309_GEO_TH_LANG_TH_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1693766127568 2x"
              className="rounded-xl object-cover w-full h-full"
            ></img>
            <div className="z-50 absolute p-7 flex flex-col  w-full">
            <span className="text-xs text-gray-500 pb-2 ">แอปบ้าน</span>
              <span className="text-xl text-black font-bold  pb-2">
                ดูวิธีที่แอปหนึ่งแอปควบคุมบ้านทั้งหลังของคุณ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
