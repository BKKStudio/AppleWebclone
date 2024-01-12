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

export default function SlideSetting() {
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
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-transfer-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696968377619"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-transfer-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696968377619, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-transfer-202310?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696968377619 2x"
              className="rounded-xl w-full px-12 py-16 scale-125"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
                ถ่ายโอนข้อมูลได้ง่าย
              </span>
              <span className="text-xl max-md:text-base text-black font-bold  pb-2">
                Mac เครื่องใหม่ใช่มั๊ย ดูวิธี <br /> แสนง่ายในการโยกย้ายคอน{" "}
                <br /> เทนต์ ของคุณ
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
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-applecare-plus-202108?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1630175411000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-applecare-plus-202108?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1630175411000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-applecare-plus-202108?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1630175411000 2x"
              className="rounded-xl w-full px-12 py-16 scale-125"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">APPLECARE+</span>
              <span className="text-xl max-md:text-base text-black font-bold  pb-2">
                รับความคุ้มครองด้านความ <br /> เสียหายจากอุบัติเหตุและรับ <br />{" "}
                บริการช่วยเหลือด้านเทคนิค <br /> จากผู้เชี่ยวชาญของ Apple
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
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-TAA-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697149579791"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-TAA-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697149579791, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-TAA-202310?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697149579791 2x"
              className="rounded-xl w-full px-12 py-16 scale-150"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col text-white w-full">
              <span className="text-xs  pb-2 ">TODAY AT APPLE</span>
              <span className="text-xl max-md:text-base  font-bold  pb-2">
                เข้าร่วมกับเราเพื่อค้นพบสิ่งที่ดีที่สุด <br /> ของ Mac
              </span>
              <span>
                เริ่มเลยหรือสำรวจว่ามีอะไรใหม่ในเซสชั่นฟรีที่ Apple Store
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
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-apps-202211?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1668101973558"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-apps-202211?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1668101973558, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-apps-202211?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1668101973558 2x"
              className="rounded-xl w-full px-12 py-16 scale-150"
            ></img>
            <div className="z-50  absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500  pb-2 ">
                เซสชั่นออนไลน์ส่วนบุคคล
              </span>
              <span className="text-xl max-md:text-base text-black  font-bold  pb-2">
                ทำความรู้จักกับ Mac ใหม่ <br /> ของคุณ ตั้งแต่เรื่องพื้นฐาน{" "}
                <br /> จนถึงเคล็ดลับขั้นสูง
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
