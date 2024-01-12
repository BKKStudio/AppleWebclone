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

export default function SlideSaveCost() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className={`mySwiper !z-0 !px-5 !pb-10  `}
    >
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-103   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="400"
              height="500"
              alt="กระดาษรูปคลื่นรอบ AirPods Pro (รุ่นที่ 2) สีขาว ที่มีก้านสั้นๆ พร้อมจุกหูฟังซิลิโคน รูลำโพงหันออกให้เห็น และเคสชาร์จที่มีอิโมจิทำมือสัญลักษณ์สันติภาพที่สลักอยู่บนด้านหน้าของเคส"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-monthly-installments-202210_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1664396475515"
              className="rounded-xl w-full h-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-monthly-installments-202210_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1664396475515"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-monthly-installments-202210_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1664396475515, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-50-monthly-installments-202210_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1664396475515 2x"
              className="rounded-xl w-full h-full md:hidden "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
                ยอดชำระรายเดือนแบบเบาๆ
              </span>
              <span className="text-xl text-black font-bold  pb-2">
                จ่ายดอกเบี้ย 0% นานสุด <br /> 10 เดือน
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-103   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="400"
              height="500"
              alt="กระดาษรูปคลื่นรอบ AirPods Pro (รุ่นที่ 2) สีขาว ที่มีก้านสั้นๆ พร้อมจุกหูฟังซิลิโคน รูลำโพงหันออกให้เห็น และเคสชาร์จที่มีอิโมจิทำมือสัญลักษณ์สันติภาพที่สลักอยู่บนด้านหน้าของเคส"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-tradein-202108_GEO_TH_LANG_TH_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1651509266633"
              className="rounded-xl w-full h-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-tradein-202108_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1651509266633"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-tradein-202108_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1651509266633, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-50-tradein-202108_GEO_TH_LANG_TH_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1651509266633 2x"
              className="rounded-xl w-full h-full md:hidden "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
                APPLE TRADE IN
              </span>
              <span className="text-xl text-black font-bold  pb-2">
                นำอุปกรณ์ของคุณมาแลก <br /> เพื่อรับเครดิตสำหรับใช้ซื้อ <br />
                เครื่องใหม่
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
