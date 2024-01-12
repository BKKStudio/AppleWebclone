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

export default function SlideAccessories() {
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
      className={`mySwiper !z-0  !px-5 !pt-5 !pb-10  `}
    >
      <SwiperSlide className={`!max-w-mg  ${value} !h-102 !rounded-xl`}>
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-102 bg-white overflow-hidden  hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="400"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-magic-acc-202306_GEO_TH_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1684512557640"
              className="rounded-xl w-full h-full px-8 scale-125 "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xl max-md:text-lg text-black font-bold  pb-2">
                ใช้ Mac ของคุณให้เกิด <br /> ประโยชน์สูงสุด
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
                alt="สาย USB-C เป็น MagSafe 3, ความยาว 2 เมตร, ม้วนเก็บอยู่, ดีไซน์แบบทอสีดำสเปซแบล็ค, หัวต่อ MagSafe 3 แบบแม่เหล็กและหัวต่อ USB-C ในสีดำสเปซแบล็คที่เข้ากัน"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVQ3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1698167322853"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVQ3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1698167322853, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVQ3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1698167322853 2x"
                className="mt-10 h-max mx-16"
              />
            </div>
            <div className="w-full   flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="เทาสเปซเกรย์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL23_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360892"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL23_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360892, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL23_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360892 2x"
              />
              <img
                width="12"
                height="12"
                alt="มิดไนท์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL43_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360883"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL43_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360883, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL43_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360883 2x"
              />
              <img
                width="12"
                height="12"
                alt="สตาร์ไลท์"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL33_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360856"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL33_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360856, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPL33_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360856 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="เงิน"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MLYV3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360904"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MLYV3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360904, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MLYV3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1653059360904 2x"
              ></img>
              <img
                width="12"
                height="12"
                alt="ดำสเปซแบล็ค"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVQ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1697050959718"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVQ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1697050959718, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVQ3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1697050959718 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-xs text-orange-600 font-bold  pb-2">
                  ใหม่
                </span>
                <span className="text-md text-black font-bold">
                  สาย USB-C เป็น MagSafe 3(2 ม.) <br />- สีดำสเปซแบล็ค
                </span>
                <span className="text-md text-black opacity-0 ">
                  พร้อม MagSafe - สีเขียวไซเปรส
                </span>
                <span className="text-md text-gray-500  pt-16">฿1,590.00</span>
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
                alt=""
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK0U3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1646446502337"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK0U3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1646446502337, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK0U3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1646446502337 2x"
                className="mt-10 h-max mx-16"
              />
            </div>
            <div className="w-full opacity-0 flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ส้มซอร์เบ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173858"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173858, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010173858 2x"
              />
              <span className="flex items-center">+</span>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-md text-black font-bold">
                  Studio Display - กระจก <br /> มาตรฐาน - ฐานตั้งที่ปรับความ...
                </span>
                <span className="text-md text-gray-500  pt-16">฿54,990.00</span>
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
                alt="Magic Keyboard พร้อมปุ่มตัวเลข สีขาว พร้อมรูปแบบปุ่มลูกศรรูปตัว T กลับหัว รวมถึงปุ่ม Page Up และ Page Down ที่ใช้งานได้สะดวกง่ายดาย"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1628010515000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1628010515000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1628010515000 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ปุ่มสีขาว"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645887772565"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645887772565, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645887772565 2x"
              />
              <img
                width="12"
                height="12"
                alt="ปุ่มสีดำ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645653183992"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645653183992, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645653183992 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-md text-black font-bold">
                  Magic Keyboard พร้อม Touch <br /> ID และปุ่มตัวเลข สำหรับ Mac
                  รุ่น...
                </span>
                <span className="text-md text-gray-500  pt-16">฿5,890.00</span>
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
                alt="Magic Trackpad สีขาว แสดงให้เห็นพื้นผิวกระจกแบบขอบจรดขอบเพื่อการปัดและเลื่อนที่ง่ายดายยิ่งขึ้น"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2D3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1626390718000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2D3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1626390718000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2D3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1626390718000 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ปุ่มสีขาว"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645887772565"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645887772565, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645887772565 2x"
              />
              <img
                width="12"
                height="12"
                alt="ปุ่มสีดำ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645653183992"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645653183992, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645653183992 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-md text-black font-bold">
                  Magic Trackped - พื้นผิว Multi- <br /> Touch สีขาว
                </span>
                <span className="text-md text-gray-500  pt-16">฿4,190.00</span>
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
                alt="Magic Mouse สีขาว แสดงให้เห็นดีไซน์โค้งมน และพื้นผิว Multi-Touch"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2E3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1626468075000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2E3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1626468075000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2E3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1626468075000 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ปุ่มสีขาว"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645887772565"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645887772565, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2C3TH_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645887772565 2x"
              />
              <img
                width="12"
                height="12"
                alt="ปุ่มสีดำ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645653183992"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1645653183992, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMR3TH_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645653183992 2x"
              ></img>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-md text-black font-bold">
                  Magic Mouse - พื้นผิว Multi- <br /> Touch สีขาว
                </span>
                <span className="text-md text-gray-500  pt-16">฿2,490.00</span>
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
                alt="Magic Keyboard พร้อม Touch ID ทั้งไร้สายและชาร์จซ้ำได้ จึงมอบประสบการณ์ในการพิมพ์ที่ทั้งสะดวกสบายและแม่นยำ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK293TH?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1628006525000"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK293TH?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1628006525000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK293TH?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1628006525000 2x"
                className="mt-10 h-max mx-16"
              ></img>
            </div>
            <div className="w-full opacity-0 flex gap-1 justify-center  items-end  ">
              <img
                width="12"
                height="12"
                alt="ส้มซอร์เบ"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173858"
                srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1693010173858, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0W3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693010173858 2x"
              />
              <span className="flex items-center">+</span>
            </div>
            <div className="flex  px-7 ">
              <div className="flex flex-col  w-full h-auto">
                <span className="text-md text-black font-bold">
                 Magic Keyboard พร้อม Touch <br /> ID สำหรับ Mac รุ่นที่มี Apple...
                </span>
                <span className="text-md text-gray-500  pt-16">฿4,890.00</span>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
