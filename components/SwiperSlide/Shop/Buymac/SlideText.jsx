"use client";
import React, { useRef, useState , useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {  FreeMode,Pagination } from "swiper/modules";


export default function SlideText() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setValue(6);
      }else if(window.innerWidth <= 1024 && window.innerWidth >= 769 ){
        setValue(4);
      }else if(window.innerWidth <= 768 && window.innerWidth >= 0 ){
        setValue(3);
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount


  return (
    <div className="">
      <Swiper
        slidesPerView={value}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper !z-0 "
      >
        
        <SwiperSlide>
            <span className="text-base hover:underline">ทุกรุ่น</span>
        </SwiperSlide>
        <SwiperSlide>
            <span className="text-base hover:underline">ทุกรุ่น</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
