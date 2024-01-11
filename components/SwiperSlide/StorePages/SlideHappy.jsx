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

export default function SlideHappy() {
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
      className={`mySwiper !z-0  !px-5 !pb-10  `}
    >
      <SwiperSlide className={`!max-w-mg  ${value} !h-102 !rounded-xl`}>
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-102   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="400"
              height="500"
              alt="เนินเขากระดาษล้อมรอบเคสผ้า FineWoven พร้อม MagSafe สีเขียวเอเวอร์กรีน สำหรับ iPhone 15, Apple Watch Series 9 ตัวเรือนอะลูมิเนียม สีสตาร์ไลท์, สายแบบ Solo Loop สีส้มซอร์เบ และพวงกุญแจผ้า FineWoven สีม่วงเข้มมัลเบอร์รี่ สำหรับ AirTag"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-quick-picks-202311?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027393"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-quick-picks-202311?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027393, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-quick-picks-202311?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027393 2x"
              className="rounded-xl w-full h-full"
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xl max-md:text-lg text-black font-bold  pb-2">
                เพิ่มความพิเศษอีกนิดให้กับ
              </span>
              <span className="text-xl max-md:text-lg text-black font-bold  pb-2">
                การเฉลิมฉลอง
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-102 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="Apple Pencil (USB-C) สีขาว ปลายฝาปิดสลักข้อความว่า Apple Pencil โดยคำว่า Apple ใช้เป็นโลโก้ของ Apple แสดงแทน"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1695933856697"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1695933856697, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1695933856697 2x"
                className="mt-10 h-max mx-16"
              />
            </div>
            <div className="w-full opacity-0  flex gap-1 justify-center  items-end  ">
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
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  Apple Pencil (USB-C)
                </span>
                <span className="text-md text-black opacity-0 ">
                  พร้อม MagSafe - สีเขียวไซเปรส
                </span>
                <span className="text-md text-gray-500  pt-16">฿3,190.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-102 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="เคสซิลิโคนสำหรับ iPhone 15 พร้อม MagSafe สีเขียวไซเปรสที่มีโลโก้ Apple ฝังอยู่ตรงกลาง และติดเข้ากับ iPhone 15 สีฟ้าที่มองเห็นผ่านช่องที่เจาะไว้สำหรับกล้อง"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699565518527"
                className="mt-10 h-max mx-16"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699565518527, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699565518527 2x"
              ></img>
            </div>
            <div className="w-full flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ส้มซอร์เบ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173858"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173858, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010173858 2x"
              />
              <img
                width="12"
                height="12"
                alt="เขียวไซเปรส"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010175549"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010175549, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010175549 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ฟ้าวินเทอร์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0Y3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010175559"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0Y3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010175559, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0Y3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010175559 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="น้ำเงินสตอร์มบลู"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0N3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173849"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0N3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173849, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0N3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010173849 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ชมพูกวาวา"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0V3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173898"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0V3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173898, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0V3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010173898 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="เทาโคลน"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0Q3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010174299"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0Q3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010174299, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0Q3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010174299 2x"
              ></img>
              <span className="flex items-center">+</span>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  เคสซิลิโคนสำหรับ iPhone 15
                </span>
                <span className="text-md text-black ">
                  พร้อม MagSafe - สีเขียวไซเปรส
                </span>
                <span className="text-md text-gray-500  pt-16">฿1,990.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-102 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="มุมมองด้านหลังของพวงกุญแจผ้า FineWoven สำหรับ AirTag สีม่วงเข้มมัลเบอร์รี่ โดยพวงกุญแจจะหุ้มขอบด้านนอกทั้งหมด"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699644793814"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699644793814, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699644793814 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full   flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ม่วงเข้มมัลเบอร์รี่"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809459"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809459, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692938809459 2x"
              />
              <img
                width="12"
                height="12"
                alt="น้ำตาลอมเทา"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2L3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809587"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2L3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809587, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2L3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692938809587 2x"
              />
              <img
                width="12"
                height="12"
                alt="แปซิฟิกบลู"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2K3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809588"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2K3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809588, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2K3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692938809588 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ดำ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2H3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809478"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2H3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809478, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2H3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692938809478 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ส้มคอรัล"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2M3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809556"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2M3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692938809556, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2M3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692938809556 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  พวงกุญแจผ้า FineWaven สำหรับ
                </span>
                <span className="text-md text-black ">
                  AirTag - สีม่วงเข้มมัลเบอร์รี่
                </span>
                <span className="text-md text-gray-500  pt-16">฿1,690.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-102 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="สายแบบ Solo Loop สีส้มซอร์เบ, ยางซิลิโคนที่เรียบเนียนแบบไม่มีหัวล็อคหรือตัวล็อค"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692936895305"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692936895305, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692936895305 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ส้มซอร์เบ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450659"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450659, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693005450659 2x"
              />
              <img
                width="12"
                height="12"
                alt="เขียวไซเปรส"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTGL3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450675"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTGL3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450675, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTGL3ref_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693005450675 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ฟ้าวินเทอร์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTFR3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450572"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTFR3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450572, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTFR3ref_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693005450572 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="มิดไนท์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTEX3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450659"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTEX3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450659, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTEX3ref_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693005450659 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="สตาร์ไลท์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTFA3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450624"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTFA3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450624, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTFA3ref_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693005450624 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ชมพูสว่าง"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTH13ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450586"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTH13ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693005450586, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTH13ref_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693005450586 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  สายแบบ Solo Loop สีส้มซอร์เบ
                </span>
                <span className="text-md text-black ">45 มม. ขนาด 6</span>
                <span className="text-md text-gray-500  pt-16">฿1,800.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-102 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="เคสใสสำหรับ iPhone 15 Pro พร้อม MagSafe ที่ใส่อยู่กับ iPhone 15 Pro สีไทเทเนียมธรรมชาติ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT223?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693248280978"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT223?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693248280978, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT223?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693248280978 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full opacity-0  flex gap-1 justify-center  items-end  "></div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  เคสใสสำหรับ iPhone 15 Pro
                </span>
                <span className="text-md text-black ">พร้อม MagSafe</span>
                <span className="text-md text-gray-500  pt-16">฿1,990.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-102 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="มุมมองด้านหน้าของเคสผ้า FineWoven แบบกระเป๋าสตางค์สำหรับ iPhone พร้อม MagSafe สีน้ำตาลอมเทา โดยมีช่องใส่บัตรที่ด้านบน และมีโลโก้ Apple ฝังอยู่ตรงกลาง"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT243?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994356181"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT243?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994356181, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT243?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994356181 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full   flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ม่วงเข้มมัลเบอร์รี่"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT253_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994336250"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT253_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994336250, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT253_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692994336250 2x"
              />
              <img
                width="12"
                height="12"
                alt="เขียวเอเวอร์กรีน"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT273_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994284520"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT273_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994284520, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT273_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692994284520 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="น้ำตาลอมเทา"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT243_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994352814"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT243_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994352814, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT243_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692994352814 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="แปซิฟิกบลู"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT263_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994320867"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT263_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994320867, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT263_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692994320867 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ดำ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2N3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994287156"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2N3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692994287156, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2N3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692994287156 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  เคสผ้า FineWoven แบบกระเป๋า
                </span>
                <span className="text-md text-black ">
                  สตางค์สำหรับ iPhone พร้อม...
                </span>
                <span className="text-md text-gray-500  pt-16">฿2,390.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-3 bg-white items-center rounded-xl !h-102 shadow-lg  hover:scale-104 hover:shadow-xl duration-500 ">
            <div className="relative">
              <img
                width="200"
                height="200"
                alt="สายแบบ Sport Loop สีชมพูสว่าง ที่ทำจากไนลอนทอสีชมพูสว่าง และแถบหนามเตย"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT5F3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692936755562"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT5F3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692936755562, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT5F3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692936755562 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full   flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="เขียวไซเปรส"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT573_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088251477"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT573_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088251477, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT573_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693088251477 2x"
              />
              <img
                width="12"
                height="12"
                alt="ฟ้าวินเทอร์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT583_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088249044"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT583_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088249044, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT583_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693088249044 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="มิดไนท์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT533_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088249077"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT533_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088249077, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT533_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693088249077 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="สตาร์ไลท์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT553_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088249550"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT553_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088249550, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT553_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693088249550 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ชมพูสว่าง"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT563_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088251485"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT563_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693088251485, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT563_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693088251485 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  สายแบบ Sport Loop สีชมพูสว่าง
                </span>
                <span className="text-md text-black ">45 มม.</span>
                <span className="text-md text-gray-500  pt-16">฿1,800.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
