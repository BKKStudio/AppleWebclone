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

export default function SlideLatestProducts() {

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
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              className="rounded-xl w-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030280"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030280, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030280 2x"
              className="rounded-xl w-full  md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                iPhone 15 Pro
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿41,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055188961"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055188961, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055188961 2x"
              className="rounded-xl  w-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055187238"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055187238, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_TH_LANG_TH_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055187238 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
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
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281 2x"
              className="rounded-xl w-full  max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235185"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235185, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235185 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                MacBook Pro
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿59,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188084112"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188084112, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188084112 2x"
              className="rounded-xl  w-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt="iPhone 15 สีชมพู ที่มีระบบกล้องคู่สุดล้ำ ลอยตัวอยู่ในหมู่เมฆกระดาษ"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188083911"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188083911, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188083911 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                iPhone 15
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿32,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030352"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030352, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030352 2x"
              className="rounded-xl w-full  max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt="คลื่นกระดาษล้อมรอบ iPad สีชมพู ที่มีดีไซน์แบบหน้าจอทั้งหมดโดยหงายหน้าขึ้น วางอยู่บนหลังของ iPad สีฟ้า ที่มีกล้องไวด์ 12 เมกะพิกเซล"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030105"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030105, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030105 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">iPad</span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿14,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_TH_LANG_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698766695689"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698766695689, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_TH_LANG_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698766695689 2x"
              className="rounded-xl w-full  max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697052307941"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_TH_LANG_TH_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697052307941, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_TH_LANG_TH_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697052307941 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                Apple Watch Ultra 2
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿31,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt="เมฆกระดาษสีเทาและนกบินรอบๆ MacBook Air ที่มีตัวเครื่องบางเฉียบและเปิดกางอยู่ส่วนหนึ่ง"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032996"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032996, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032996 2x"
              className="rounded-xl w-full  max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt="เมฆกระดาษสีเทาและนกบินรอบๆ MacBook Air ที่มีตัวเครื่องบางเฉียบและเปิดกางอยู่ส่วนหนึ่ง"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032593"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032593, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032593 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                MacBook Air
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿47,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt="iPad Air สีม่วงที่หันหน้าและหันหลัง ล้อมรอบด้วยเมฆกระดาษ แสดงให้เห็นจอภาพ Liquid Retina พร้อมกล้องไวด์ 12 เมกะพิเซล"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032946"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032946, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032946 2x"
              className="rounded-xl w-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt="iPad Air สีม่วงที่หันหน้าและหันหลัง ล้อมรอบด้วยเมฆกระดาษ แสดงให้เห็นจอภาพ Liquid Retina พร้อมกล้องไวด์ 12 เมกะพิเซล"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863033049"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863033049, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863033049 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                iPad Air
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿23,900
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!max-w-mg  !w-full !md:w-max !h-max !rounded-xl ">
        <Link href={""} className="rounded-xl  ">
          <div className="flex rounded-xl shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt="วงแหวนฟิตเนสที่ทำจากกระดาษวนรอบ Apple Watch SE ตัวเรือนอะลูมิเนียม สีสตาร์ไลท์ พร้อมสายแบบ Solo Loop สีส้มส้มซอร์เบ"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032977"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032977, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032977 2x"
              className="rounded-xl w-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt="วงแหวนฟิตเนสที่ทำจากกระดาษวนรอบ Apple Watch SE ตัวเรือนอะลูมิเนียม สีสตาร์ไลท์ พร้อมสายแบบ Solo Loop สีส้มส้มซอร์เบ"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032917"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032917, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032917 2x"
              className="rounded-xl w-full md:hidden"
            />
            <div className="z-50 absolute p-7 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">
                Apple Watch SE
              </span>
              <span className="text-base text-black pb-2">
                เริ่มต้นที่ ฿9,490
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
