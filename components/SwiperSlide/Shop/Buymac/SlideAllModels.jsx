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

export default function SlideAllModels() {
  const [value, setValue] = useState("!w-max");
  const [Stylecard, setStylecard] = useState("hidden");
  const [indexHover, setindexhover] = useState(0);
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
    <React.Fragment>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className={`mySwiper !z-0 !pt-5 !px-5 !pb-10  `}
      >
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(1);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className=" flex  flex-col   justify-center items-center  w-full h-full">
                <div className=" p-9 text-xl font-bold w-full h-full">
                  <span className="">
                    MacBook Air รุ่น 13 พร้อม <br /> ชิป M1
                  </span>
                </div>
              </div>
              <div className="relative ">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202310?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697488937432"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202310?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697488937432, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202310?wid=1200&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697488937432 2x"
                  className="max-md:hidden px-12 "
                />
                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202310_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697562798854"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202310_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697562798854, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202310_FMT_WHH?wid=506&amp;hei=472&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697562798854 2x"
                  className="md:hidden  w-full h-full px-12"
                ></img>
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 1
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="w-full opacity-100  flex gap-1 justify-center  items-end  ">
                <img
                  width={12}
                  height={12}
                  alt="เทาสเปซเกรย์"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903806"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903806, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903806 2x"
                />
                <img
                  width={12}
                  height={12}
                  alt="ทอง"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903806"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903806, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903806 2x"
                ></img>
                <img
                  width={12}
                  height={12}
                  alt="เงิน"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903776"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903776, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903776 2x"
                ></img>
              </div>
              <div className="flex  px-7 pb-4 ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿34,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(2);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className=" flex  flex-col   justify-center items-center  w-full h-full">
                <div className=" p-9 text-xl font-bold w-full h-full">
                  <span className="">
                    MacBook Air รุ่น 13 <br />
                    และ 15 พร้อมชิป M2
                  </span>
                </div>
              </div>
              <div className="relative ">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1684262493564"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1684262493564, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306?wid=1200&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1684262493564 2x"
                  className="max-md:hidden px-12"
                />

                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1684262493358"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1684262493358, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306_FMT_WHH?wid=506&amp;hei=472&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1684262493358 2x"
                  className="md:hidden  w-full h-full px-12"
                />
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 2
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="w-full opacity-100  flex gap-1 justify-center  items-end  ">
                <img
                  width="12"
                  height="12"
                  alt="เทาสเปซเกรย์"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903803"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903803, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903803 2x"
                />
                <img
                  width="12"
                  height="12"
                  alt="มิดไนท์"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903807"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903807, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903807 2x"
                ></img>
                <img
                  width={12}
                  height={12}
                  alt="ทอง"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903806"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903806, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903806 2x"
                ></img>
                <img
                  width={12}
                  height={12}
                  alt="เงิน"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903776"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903776, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903776 2x"
                ></img>
              </div>
              <div className="flex  px-7 pb-4 ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿39,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(3);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className=" flex  flex-col   justify-center items-center  w-full h-full">
                <div className=" p-9 text-xl font-bold w-full h-full">
                  <p className="text-xs font-light text-orange-500">ใหม่</p>
                  <span className="">
                    MacBook Pro รุ่น 14 <br />
                    และ 16
                  </span>
                </div>
              </div>
              <div className="relative ">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558878477"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558878477, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310?wid=1200&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558878477 2x"
                  className="max-md:hidden px-12"
                />
                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558882723"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558882723, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_FMT_WHH?wid=506&amp;hei=472&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558882723 2x"
                  className="md:hidden  w-full h-full px-12"
                ></img>
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 3
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="w-full opacity-100  flex gap-1 justify-center  items-end  ">
                <img
                  width="12"
                  height="12"
                  alt="เทาสเปซเกรย์"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903803"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903803, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903803 2x"
                />
                <img
                  width={12}
                  height={12}
                  alt="เงิน"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903776"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903776, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903776 2x"
                ></img>
                <img
                  width="12"
                  height="12"
                  alt="มิดไนท์"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903807"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1654147903807, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1654147903807 2x"
                ></img>
              </div>
              <div className="flex  px-7 pb-4 ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿59,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(4);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className=" flex  flex-col   justify-center items-center  w-full h-full">
                <div className=" p-9 text-xl font-bold w-full h-full">
                  <p className="text-xs font-light text-orange-500">ใหม่</p>
                  <span className="">iMac</span>
                </div>
              </div>
              <div className="relative ">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=600&amp;hei=500&amp;fmt=jpeg&amp;qlt=95&amp;.v=1697229623322"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=600&amp;hei=500&amp;fmt=jpeg&amp;qlt=95&amp;.v=1697229623322, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&amp;hei=1000&amp;fmt=jpeg&amp;qlt=95&amp;.v=1697229623322 2x"
                  className="max-md:hidden px-12"
                ></img>
                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558882723"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558882723, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_FMT_WHH?wid=506&amp;hei=472&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1699558882723 2x"
                  className="md:hidden  w-full h-full px-12"
                ></img>
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 4
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="w-full opacity-100  flex gap-1 justify-center  items-end  ">
                <img
                  width="12"
                  height="12"
                  alt="ฟ้า"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-blue-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215547726"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-blue-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215547726, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-blue-selection-hero-202310_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1697215547726 2x"
                />
                <img
                  width="12"
                  height="12"
                  alt="ชมพู"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-pink-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1699649982209"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-pink-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1699649982209, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-pink-selection-hero-202310_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1699649982209 2x"
                ></img>
                <img
                  width="12"
                  height="12"
                  alt="ม่วง"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-purple-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215547727"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-purple-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215547727, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-purple-selection-hero-202310_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1697215547727 2x"
                ></img>
                <img
                  width="12"
                  height="12"
                  alt="เหลือง"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-yellow-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215549923"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-yellow-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215549923, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-yellow-selection-hero-202310_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1697215549923 2x"
                ></img>
                <img
                  width="12"
                  height="12"
                  alt="เขียว"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-green-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1699649982212"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-green-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1699649982212, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-green-selection-hero-202310_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1699649982212 2x"
                ></img>
                <img
                  width="12"
                  height="12"
                  alt="เงิน"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-silver-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1699649982211"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-silver-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1699649982211, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-silver-selection-hero-202310_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1699649982211 2x"
                ></img>
                <img
                  width="12"
                  height="12"
                  alt="ส้ม"
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-orange-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215547728"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-orange-selection-hero-202310_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1697215547728, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-orange-selection-hero-202310_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1697215547728 2x"
                ></img>
              </div>
              <div className="flex  px-7 pb-4 ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿49,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(5);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className=" flex  flex-col   justify-center items-center  w-full h-full">
                <div className=" p-9 text-xl font-bold w-full h-full">
                  <span className="">Mac Mini</span>
                </div>
              </div>
              <div className="relative ">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1670549737872"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=600&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1670549737872, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=1200&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1670549737872 2x"
                  className="max-md:hidden px-12"
                ></img>
                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-mini-202301_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1670549737818"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-mini-202301_FMT_WHH?wid=253&amp;hei=236&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1670549737818, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-mini-202301_FMT_WHH?wid=506&amp;hei=472&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1670549737818 2x"
                  className="md:hidden  w-full h-full px-12"
                ></img>
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 5
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="flex  px-7 pb-3 ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿20,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(6);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className=" flex  flex-col   justify-center items-center  w-full h-full">
                <div className=" p-9 text-xl font-bold w-full h-full">
                  <span className="">Mac Studio</span>
                </div>
              </div>
              <div className="relative ">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306?wid=400&amp;hei=500&amp;fmt=jpeg&amp;qlt=95&amp;.v=1683842370512"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306?wid=400&amp;hei=500&amp;fmt=jpeg&amp;qlt=95&amp;.v=1683842370512, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=95&amp;.v=1683842370512 2x"
                  className="max-md:hidden px-24"
                ></img>
                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306_FMT_WHH?wid=253&amp;hei=236&amp;fmt=jpeg&amp;qlt=95&amp;.v=1684874586090"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306_FMT_WHH?wid=253&amp;hei=236&amp;fmt=jpeg&amp;qlt=95&amp;.v=1684874586090, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306_FMT_WHH?wid=506&amp;hei=472&amp;fmt=jpeg&amp;qlt=95&amp;.v=1684874586090 2x"
                  className="md:hidden  w-full h-full px-12"
                ></img>
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 6
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="flex  px-7 pb-4 ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿74,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(7);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className="absolute p-8 z-40 text-xl font-bold w-full h-full">
                <span className="">Studio Display</span>
              </div>
              <div className="relative max-md:px-12">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1645558306366"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1645558306366, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1645558306366 2x"
                  className="max-md:hidden px-24 pt-24"
                ></img>
                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-studio-display-202203_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1645558306333"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-studio-display-202203_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1645558306333, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-studio-display-202203_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1645558306333 2x"
                  className="md:hidden   h-full px-6    "
                ></img>

                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 7
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="flex  px-7  md:pb-2  ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿54,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(8);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className=" flex  flex-col   justify-center items-center  w-full h-full">
                <div className=" p-9 text-xl font-bold w-full h-full">
                  <span className="">Mac Pro</span>
                </div>
              </div>
              <div className="relative ">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-202306_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1683842370356"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-202306_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1683842370356, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-202306_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1683842370356 2x"
                  className="max-md:hidden px-36"
                ></img>
                <img
                  width="253"
                  height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306_FMT_WHH?wid=253&amp;hei=236&amp;fmt=jpeg&amp;qlt=95&amp;.v=1684874586090"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306_FMT_WHH?wid=253&amp;hei=236&amp;fmt=jpeg&amp;qlt=95&amp;.v=1684874586090, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306_FMT_WHH?wid=506&amp;hei=472&amp;fmt=jpeg&amp;qlt=95&amp;.v=1684874586090 2x"
                  className="md:hidden  w-full h-full px-12"
                ></img>
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 8
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="flex  px-7 max-md:pb-7 ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿249,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" !flex !w-max gap-4 ">
          <Link href={""} className="rounded-xl  ">
            <div
              className="grid grid-col-3  bg-white items-center rounded-xl   !h-102 shadow-lg hover:scale-104 hover:shadow-xl  duration-500 "
              onMouseEnter={() => {
                setindexhover(9);
                setStylecard(
                  " opacity-100 animate-animation-slidecardin duration-75"
                );
              }}
              onMouseLeave={() => {
                setindexhover(0);
                setStylecard(
                  " opacity-0 animate-animation-slidecardOut duration-75"
                );
              }}
            >
              <div className="absolute p-8 z-40 text-xl font-bold w-full h-full">
                <span className="">Pro Display XDR</span>
              </div>
              <div className="relative max-md:px-12">
                <img
                  width="400"
                  height="500"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-display-202108_FMT_WHH?wid=309&amp;hei=450&amp;fmt=jpeg&amp;qlt=95&amp;.v=1625866834000"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-display-202108_FMT_WHH?wid=309&amp;hei=450&amp;fmt=jpeg&amp;qlt=95&amp;.v=1625866834000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-display-202108_FMT_WHH?wid=618&amp;hei=900&amp;fmt=jpeg&amp;qlt=95&amp;.v=1625866834000 2x"
                  className="max-md:hidden px-24 pt-20"
                ></img>
                <img
                   width="253"
                   height="236"
                  alt=""
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-display-202108_FMT_WHH?wid=309&amp;hei=450&amp;fmt=jpeg&amp;qlt=95&amp;.v=1625866834000"
                  srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-display-202108_FMT_WHH?wid=309&amp;hei=450&amp;fmt=jpeg&amp;qlt=95&amp;.v=1625866834000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-pro-display-202108_FMT_WHH?wid=618&amp;hei=900&amp;fmt=jpeg&amp;qlt=95&amp;.v=1625866834000 2x"
                  className="md:hidden   h-full px-6    "
                ></img>
                <div className="absolute flex justify-center w-full  flex -translate-y-14 ">
                  <span
                    className={`p-2 text-center bg-gray-200 rounded-full ${
                      indexHover === 9
                        ? `${Stylecard}`
                        : `opacity-0 animate-animation-slidecardOut duration-75`
                    }   `}
                  >
                    มาดูกันเลย
                  </span>
                </div>
              </div>
              <div className="flex  px-7  md:pb-5  ">
                <div className="flex  justify-between items-center w-full h-auto">
                  <span className="text-md text-gray-500 ">
                    เริ่มต้นที่ ฿54,900.00
                  </span>
                  <span className="text-md text-white  bg-blue-500 px-4 rounded-full py-1">
                    ซื้อ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}
