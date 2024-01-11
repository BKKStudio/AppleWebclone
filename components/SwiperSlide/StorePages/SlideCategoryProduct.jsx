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


export default function SlideCategoryProduct() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setValue(9);
      }else if(window.innerWidth <= 1024 && window.innerWidth >= 769 ){
        setValue(7);
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
          <Link href={""} className="flex flex-col items-center gap-5 ">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1696964122666"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1696964122666, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1696964122666 2x"
            />
            <span className="text-sm hover:underline">Mac</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1692971740452"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1692971740452, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1692971740452 2x"
            />
            <span className="text-sm hover:underline">iPhone</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1664912135437"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1664912135437, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1664912135437 2x"
            />
            <span className="text-sm hover:underline">iPad</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_TH_LANG_TH?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1693703820595"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_TH_LANG_TH?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1693703820595, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_TH_LANG_TH?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1693703820595 2x"
            />
            <span className="text-sm hover:underline">Apple Watch</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1660676485885"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1660676485885, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1660676485885 2x"
            />
            <span className="text-sm hover:underline">AirPods</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1625783380000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1625783380000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1625783380000 2x"
            />
            <span className="text-sm hover:underline">AirTag</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5 ">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1664628458484"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1664628458484, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1664628458484 2x"
            />
            <span className="text-sm hover:underline">Apple TV 4K</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1692803114952"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1692803114952, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1692803114952 2x"
            />
            <span className="text-sm hover:underline">อุปกรณ์เสริม</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="flex flex-col items-center gap-5">
            <img
              width="200"
              height="130"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-holiday-giftcards-asc-nav-202111?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1635264814000"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-holiday-giftcards-asc-nav-202111?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1635264814000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-holiday-giftcards-asc-nav-202111?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1635264814000 2x"
            />
            <span className="text-sm hover:underline text-center">
              บัตรของขวัญ Apple Store
            </span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
