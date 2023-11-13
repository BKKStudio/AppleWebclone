import Image from "next/image";
import axios from "axios";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import SlideProducts from "@/components/SwiperSlide/SlideProduct";
import SlideNewProduct from "@/components/SwiperSlide/SlideNewProduct";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100">
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="lg:py-20 py-16 flex justify-between  gap-9 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="hidden max-md:flex  md:flex-col  text-5xl font-bold text-gray-500 md:gap-2 max-lg:text-3xl">
                <span>
                  <span className="text-red-600">ร้านของเรา  </span>
                  ช่วงเทศกาลมาถึงแล้วเซอร์ไพรส์ดีๆ รอคุณอยู่
                </span>
              </div>
              <div className="hidden md:flex  flex-col text-5xl font-bold text-gray-500 md:gap-2 max-lg:text-3xl">
                <span>
                  <span className="text-red-600">ร้านของเรา</span>
                  ช่วงเทศกาลมาถึง
                </span>
                <span>แล้วเซอร์ไพรส์ดีๆ รอคุณอยู่</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <img
                    src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202311_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1696434169764"
                    alt=""
                    width={35}
                    height={35}
                  ></img>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold">
                      ต้องการความช่วยเหลือในการช้อปปิ้งใช่มั๊ย
                    </span>
                    <Link
                      href={""}
                      className="text-sm text-blue-800 hover:underline"
                    >
                      ถาม Specialist ได้เลย
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex justify-center ">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 25 35"
                      className="dd-glyph-svg dd-glyph-base"
                      aria-hidden="true"
                      fill="red"
                    >
                      <path d="m0 0h25v35h-25z" fill="none"></path>
                      <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold">
                      แวะไปที่ Apple Store
                    </span>
                    <Link
                      href={""}
                      className="text-sm text-blue-800 flex items-center hover:underline"
                    >
                      ค้นหาร้านที่อยู่ใกล้คุณ <BsChevronRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl overflow-visible w-full">
            <div className="2xl:w-4/5 px-7 ">
              <SlideProducts />
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ผลิตภัณฑ์ล่าสุดของเรา</span>
                  ของขวัญชิ้นพิเศษสำหรับทุกคนพิเศษ
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full  h-full">
          <figure className="max-w-9xl max-lg:px-4 pb-10  rounded-xl  w-full h-full  ">
            <div className="w-full h-full  ">
              <SlideNewProduct />
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ผลิตภัณฑ์ล่าสุดของเรา</span>
                  ของขวัญชิ้นพิเศษสำหรับทุกคนพิเศษ
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ผลิตภัณฑ์ล่าสุดของเรา</span>
                  ของขวัญชิ้นพิเศษสำหรับทุกคนพิเศษ
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ผลิตภัณฑ์ล่าสุดของเรา</span>
                  ของขวัญชิ้นพิเศษสำหรับทุกคนพิเศษ
                </span>
              </div>
            </div>
          </figure>
        </article>
      </main>
    </>
  );
}
