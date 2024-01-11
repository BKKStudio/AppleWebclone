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

export default function SlideForStudent() {
    const [value, setValue] = useState("!w-max");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setValue("!w-max");
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setValue("!w-max");
      } else if (window.innerWidth <= 768 && window.innerWidth >= 0) {
        setValue("!w-full");
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className={`mySwiper !z-0 !px-4   !pb-10 `}
    >
      <SwiperSlide className={`!max-w-mg  ${value} !md:w-max !h-max !rounded-xl `}>
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg w-full  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="400"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-education-202108_GEO_TH_LANG_TH?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1627664738000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-education-202108_GEO_TH_LANG_TH?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1627664738000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-education-202108_GEO_TH_LANG_TH?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1627664738000 2x"
              className="rounded-xl object-cover  h-full "
            ></img>

            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">การศึกษา</span>
              <span className="text-xl text-black font-bold  pb-2">
                ประหยัดกับ Mac หรือ iPad ในราส่งเสริมการศึกษา
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide  className={`!max-w-mg  ${value} !md:w-max !h-max !rounded-xl `}>
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="400"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-business-202209_GEO_TH_LANG_TH?wid=400&amp;hei=500&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661285673816"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-business-202209_GEO_TH_LANG_TH?wid=400&amp;hei=500&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661285673816, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-business-202209_GEO_TH_LANG_TH?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661285673816 2x"
              className="rounded-xl w-full object-cover  "
            ></img>
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-white pb-2 ">ธุรกิจ</span>
              <span className="text-xl text-white font-bold  pb-2">
                ไม่ว่าธุรกิจใหญ่หรือธุรกิจเล็ก เราก็ยินดีช่วยเหลืองานของคุณ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
