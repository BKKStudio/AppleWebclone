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

export default function SlideCustomizeProducts() {
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
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027293"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027293, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027293 2x"
              className="rounded-xl w-full h-full max-md:hidden"
            />
            <img
              width="309"
              height="450"
              alt="กระดาษรูปคลื่นรอบ AirPods Pro (รุ่นที่ 2) สีขาว ที่มีก้านสั้นๆ พร้อมจุกหูฟังซิลิโคน รูลำโพงหันออกให้เห็น และเคสชาร์จที่มีอิโมจิทำมือสัญลักษณ์สันติภาพที่สลักอยู่บนด้านหน้าของเคส"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027289"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027289, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027289 2x"
              className="rounded-xl w-full h-full md:hidden "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xl text-black font-bold  pb-2">
                แต่งเติมของขวัญด้วย
              </span>
              <span className="text-xl text-black font-bold  pb-2">
                บริการสลักข้อความฟรี
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-2 items-center bg-white rounded-xl !h-103 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="200"
              height="200"
              alt="ภายในของเคสชาร์จ AirPods Pro และ MagSafe มีหูฟังข้างขวาและข้างซ้ายที่มีไมโครโฟนตัดเสียงรบกวนอยู่ด้านบน และที่ปลายหูฟังแต่ละข้างมีจุกหูฟังซิลิโคน ด้านบนของเคสชาร์จ MagSafe เปิดอยู่ โดยยึดติดด้วยบานพับสีเงิน"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1694014871985"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1694014871985, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1694014871985 2x"
              className="mt-10 h-max mx-16"
            />

            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  สลักข้อความฟรี
                </span>
                <span className="text-md text-black font-bold">
                  AirPods Pro (รุ่นที่ 2) พร้อมเคส
                </span>
                <span className="text-md text-black font-bold ">
                  ชาร์จ MagSafe (USB-C)
                </span>
                <span className="text-md text-gray-500  pt-12">฿8,990.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-2 bg-white items-center rounded-xl !h-103 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="200"
              height="200"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-single-select-202104_FMT_WHH?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617761673000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-single-select-202104_FMT_WHH?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1617761673000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-single-select-202104_FMT_WHH?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617761673000 2x"
              className="mt-10 h-max mx-16"
            />

            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  สลักข้อความฟรี
                </span>
                <span className="text-md text-black font-bold">
                  AirPods Pro (รุ่นที่ 2) พร้อมเคส
                </span>
                <span className="text-md text-black "></span>
                <span className="text-md text-gray-500  pt-16">฿1,190.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-2 bg-white items-center rounded-xl !h-103 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="200"
              height="200"
              alt="ภาพด้านหน้าของ AirPods (รุ่นที่ 3) บนเคสชาร์จที่เปิดอยู่แบบชาร์จเต็มแล้ว "
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1632861342000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632861342000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1632861342000 2x"
              className="mt-10 h-max mx-16"
            />

            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  สลักข้อความฟรี
                </span>
                <span className="text-md text-black font-bold">
                  AirPods Pro (รุ่นที่ 3) พร้อมเคสชาร์จ
                </span>
                <span className="text-md text-black font-bold ">
                  {" "}
                  Lightning
                </span>
                <span className="text-md text-gray-500  pt-12">฿6,790.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-103 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="ภาพด้านหน้าของ AirPods Max สีชมพู อยู่ถัดจากภาพด้านข้างของภายนอกหูฟัง AirPods Max"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604022365000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604022365000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1604022365000 2x"
                className="mt-10 h-max mx-16"
              />
            </div>
            <div className=" w-full  flex gap-1 justify-center  items-end ">
              <img
                width="12"
                height="12"
                alt="เทาสเปซเกรย์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604622935000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604622935000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-spacegray-202011_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1604622935000 2x"
              />
              <img
                width="12"
                height="12"
                alt="ชมพู"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846873000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846873000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1603846873000 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="เขียว"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846873000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846873000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-green-202011_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1603846873000 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="เงิน"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846873000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846873000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-silver-202011_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1603846873000 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="สกายบลู"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846875000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1603846875000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-skyblue-202011_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1603846875000 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  สลักข้อความฟรี
                </span>
                <span className="text-md text-black font-bold">
                  AirPods Max - สีชมพู
                </span>
                <span className="text-md text-black "></span>
                <span className="text-md text-gray-500  pt-16">฿19,900.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
