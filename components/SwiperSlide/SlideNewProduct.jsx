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

export default function SlideNewProduct() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setValue(3);
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setValue(3);
      } else if (window.innerWidth <= 768 && window.innerWidth >= 0) {
        setValue(1);
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
      slidesPerView={value}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className={`mySwiper !z-0   !px-4  !pb-10 `}
    >
      <SwiperSlide className="!max-w-mg  !w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              className="rounded-xl  max-lg:hidden"
            />
            <img
              width="309"
              height="450"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030280"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030280, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030280 2x"
              className="rounded-xl  lg:hidden"
            ></img>
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-1 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-1">
                iPhone 15 Pro
              </span>
              <span className="text-base text-black pb-2 ">
                เริ่มต้นที่ ฿41,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055188961"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055188961, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055188961 2x"
              className="rounded-xl  max-lg:hidden"
            />
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055187238"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055187238, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055187238 2x"
              className="rounded-xl  lg:hidden"
            />
            <div className="z-50 absolute p-3 flex flex-col  w-44">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                Apple Watch Series 9
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿15,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281 2x"
              className="rounded-xl  max-lg:hidden"
            />
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235185"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235185, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235185 2x"
              className="rounded-xl  lg:hidden"
            />
            <div className="z-50 absolute p-3 flex flex-col  w-44">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                Apple Watch Series 9
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿15,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
