"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function SlideNewProduct() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setValue(3);
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setValue(3);
      } else if (window.innerWidth <= 768 && window.innerWidth >= 0) {
        setValue(3);
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
      <Swiper
        slidesPerView={value}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper !z-0"
      >
        <SwiperSlide>
          <Link href={""} className="relative flex ">
            <img
              width="480"
              height="500"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              className="rf-ccard-img-full rounded-lg "
            />
            <div className="z-50 absolute p-3 flex flex-col">
              <span className="text-xs text-gray-500 pb-2">ใหม่</span>
              <span className="text-xl text-black font-bold  pb-2">iPhone 15 Pro</span>
              <span className="text-base text-black pb-2">เริ่มต้นที่ ฿41,900</span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="">
            <img
              width="480"
              height="500"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              className="rf-ccard-img-full rounded-lg "
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="">
            <img
              width="480"
              height="500"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              className="rf-ccard-img-full rounded-lg "
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="">
            <img
              width="480"
              height="500"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              className="rf-ccard-img-full rounded-lg "
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={""} className="">
            <img
              width="480"
              height="500"
              alt="ดาวเคราะห์กระดาษล้อมรอบ iPhone 15 Pro รุ่นไทเทเนียม ที่มีระบบกล้องระดับโปร"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              className="rf-ccard-img-full rounded-lg "
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
