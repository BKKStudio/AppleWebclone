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

export default function Slideexperience() {
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
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-why-mac-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697813228003"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-why-mac-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697813228003, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-why-mac-202310?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697813228003 2x"
              className="rounded-xl w-full px-12 py-16 scale-125"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ทำไมต้อง MAC</span>
              <span className="text-xl max-md:text-base text-black font-bold  pb-2">
                ทรงพลังเหลือเชื่อ ใช้งาน <br />
                ง่ายอย่างไม่น่าเชื่อ{" "}
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl bg-white shadow-lg relative hover:scale-104 hover:shadow-xl duration-500 overflow-hidden">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-macos-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1700065090181"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-macos-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1700065090181, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-macos-202310?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1700065090181 2x"
              className="rounded-xl w-full px-12 py-16 scale-125"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">MACOS</span>
              <span className="text-xl max-md:text-base text-black font-bold  pb-2">
                ถูกใจในพลัง <br /> ติดใจในความสนุก <br /> ค้นพบ macOS Sonoma
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl bg-white shadow-lg relative hover:scale-104 hover:shadow-xl duration-500 overflow-hidden">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-icloud-202310_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698416657111"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-icloud-202310_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698416657111, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-icloud-202310_GEO_TH_LANG_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698416657111 2x"
              className="rounded-xl w-full px-12 py-16 scale-125"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs  pb-2 text-gray-500">ICLOUD+</span>
              <span className="text-xl max-md:text-base text-black  font-bold  pb-2">
                เพิ่มพื้นที่จัดเก็บข้อมูลให้มาก <br /> ขึ้นพร้อมปกป้องความเป็น{" "}
                <br /> ส่วนตัวของคุณด้วยวิธีใหม่ๆ <br /> ที่ยอดเยี่ยม
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl bg-white shadow-lg relative hover:scale-104 hover:shadow-xl duration-500 overflow-hidden">
            <img
              width="480"
              height="500"
              alt="หนังเรื่อง Lessons in Chemistry มี Brie Larson ยืนอยู่ด้านหน้าเคาท์เตอร์ ที่ด้านขวาของเธอมีวัตถุดิบต่างๆ สำหรับประกอบอาหาร เช่น ไข่ พาสต้า และชีส ที่ด้านซ้ายของเธอเป็นเครื่องมือต่างๆ สำหรับการทดลองทางเคมี เช่น บีกเกอร์ ขวดเคมี และขวดวัดปริมาตร โดยมีสุนัขของเธอมองจ้องเธออย่างคาดหวังโผล่หัวขึ้นมาบนเคาท์เตอร์"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-tv-services-lessons-in-chemistry-202310?wid=480&amp;hei=500&amp;fmt=png-alpha&amp;.v=1696949431686"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-tv-services-lessons-in-chemistry-202310?wid=480&amp;hei=500&amp;fmt=png-alpha&amp;.v=1696949431686, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-tv-services-lessons-in-chemistry-202310?wid=960&amp;hei=1000&amp;fmt=png-alpha&amp;.v=1696949431686 2x"
              className="rounded-xl w-full px-12 py-16 scale-130 object-contain"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  text-white w-full">
              <span className="text-xs   pb-2 ">APPLE TV+</span>
              <span className="text-xl max-md:text-base   font-bold  pb-2">
                Apple Original ที่ออกใหม่ ทุกเดือน
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-2 gap-5 items-center  !h-102  ">
            <div className=" w-full  flex justify-center  bg-white rounded-xl shadow-lg hover:scale-104 hover:shadow-xl duration-500">
              <div className="w-full relative ">
                <div className="absolute w-full p-6 text-white flex flex-col">
                  <span className="text-gray-400 text-xs">
                    APPLE AT COLLAGE
                  </span>
                  <span className="text-xl max-md:text-base   font-bold  pb-2">
                    ท็อปฟอร์มไปกับ <br /> Apple
                  </span>
                  <span className="text-lg max-md:text-base  pb-2">
                    พาการเรียนรู้ของคุณไปอีก <br /> ระดับด้วย Mac
                  </span>
                </div>
                <img
                  width="480"
                  height="240"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-25-college-202108?wid=480&amp;hei=240&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1625760980000"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-25-college-202108?wid=480&amp;hei=240&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1625760980000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-25-college-202108?wid=960&amp;hei=480&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1625760980000 2x"
                  className="rounded-xl w-full object-contain"
                />
              </div>
            </div>
            <div className=" w-full  flex justify-center  bg-white rounded-xl shadow-lg hover:scale-104 hover:shadow-xl duration-500">
              <div className="w-full relative ">
                <div className="absolute w-full p-6 text-white flex flex-col">
                  <span className="text-gray-400 text-xs">APPLE AT WORK</span>
                  <span className="text-xl max-md:text-base   font-bold  pb-2">
                    เพิ่มประสิทธิภาพให้ <br /> กับที่ทำงานด้วย <br /> ฮาร์ดแวร์
                    ซอฟแวร์ <br /> และบริการต่างๆ <br /> จาก Apple
                  </span>
                </div>
                <img
                  width="480"
                  height="240"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-25-work-202108?wid=480&amp;hei=240&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1625760980000"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-25-work-202108?wid=480&amp;hei=240&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1625760980000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-25-work-202108?wid=960&amp;hei=480&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1625760980000 2x"
                  className="rounded-xl w-full object-contain"
                ></img>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl bg-white shadow-lg relative hover:scale-104 hover:shadow-xl duration-500 overflow-hidden">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626375547000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626375547000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626375547000 2x"
              className="rounded-xl w-full px-12 py-16 scale-130 object-contain"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xl max-md:text-base   font-bold  pb-2">
                สี่บริการของ Apple <br /> หนึ่งการสมัครสมาชิก <br /> แบบง่ายๆ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
