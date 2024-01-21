"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function SlideTextModal({
  Clickset,
  setClickset,
  setThumnailImg,
  setidxthumnail,
  setColorProduct,
  
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setValue(8);
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setValue(4);
      } else if (window.innerWidth <= 768 && window.innerWidth >= 0) {
        setValue(2);
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
    <div className="">
      <></>
      <Swiper
        slidesPerView={value}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className={`mySwiper !z-0  !rounded-3xl  `}
      >
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => {
            setClickset("MacAirM1")
            setThumnailImg([
              {
                idx: 0,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1636156517000",
              },
              {
                idx: 100,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1664581580690",
              },
              {
                idx: 200,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635187293000",
              },
              {
                idx: 300,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba-digitalmat-gallery-4-202111_GEO_TH_LANG_TH?wid=728&hei=666&fmt=png-alpha&.v=1665186030670",
              },
              {
                idx: 400,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba-digitalmat-gallery-5-202111?wid=728&hei=666&fmt=png-alpha&.v=1635187292000",
              },
            ]);
            setidxthumnail(400);
            setColorProduct([
              {
                desc: "เทาสเปซเกรย์",
                text: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1654147903803",
              },
              {
                desc: "ทอง",
                text: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1654147903806",
              },
              {
                desc: "เงิน",
                text: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1654147903776",
              },
            ]);
          }}
        >
          <div
            className={`flex justify-center   ${
              Clickset === "MacAirM1"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">MacBook Air พร้อมชิป M1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => {
            setClickset("MacAirM2")
            setThumnailImg([
              {
                idx: 0,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-digitalmat-gallery-1-202206_FMT_WHH?wid=576&hei=400&fmt=png-alpha&.v=1652827325208",
              },
              {
                idx: 100,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-digitalmat-gallery-2-202206_GEO_TH_LANG_TH?wid=728&hei=666&fmt=png-alpha&.v=1653624580061",
              },
              {
                idx: 200,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-digitalmat-gallery-3-202206_FMT_WHH?wid=576&hei=400&fmt=png-alpha&.v=1652827325241",
              },
              {
                idx: 300,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-digitalmat-gallery-4-202206_FMT_WHH?wid=576&hei=400&fmt=png-alpha&.v=1652827325412",
              },
              {
                idx: 400,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-digitalmat-gallery-5-202206_FMT_WHH?wid=576&hei=400&fmt=png-alpha&.v=1652827325279",
              },
              {
                idx: 500,
                imgText:
                  "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-digitalmat-gallery-6-202206_FMT_WHH?wid=576&hei=400&fmt=png-alpha&.v=1652827325456",
              },
            ]);
            setidxthumnail(500)
            setColorProduct([
              {
                desc:"เทาสเปซเกรย์",
                text:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-spacegray-select-20220606_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1654147903803"
              },
              {
                desc:"มิดไนท์",
                text:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1654147903807"
              },
              {
                desc:"ทอง",
                text:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1654147903806"
              },
              {
                desc:"เงิน",
                text:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-silver-select-201810_SW_COLOR?wid=16&hei=16&fmt=png-alpha&.v=1654147903776"
              },
            ])
          }}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "MacAirM2"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">MacBook Air พร้อมชิป M2</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => setClickset("MacAir14,16")}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "MacAir14,16"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">MacBook Pro</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => setClickset("iMac")}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "iMac"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">iMac</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => setClickset("Macmini")}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "Macmini"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">Mac mini</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => setClickset("MacStudio")}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "MacStudio"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">Mac Studio</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => setClickset("StudioDP")}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "StudioDP"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">Studio Display</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => setClickset("MacPro")}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "MacPro"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">Mac Pro</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="!w-max cursor-pointer"
          onClick={() => setClickset("PDXDR")}
        >
          <div
            className={`flex justify-center items-center  ${
              Clickset === "PDXDR"
                ? " bg-gray-900 text-white rounded-full p-2"
                : "p-2"
            } `}
          >
            <span className="text-base ">Pro Display XDR</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
