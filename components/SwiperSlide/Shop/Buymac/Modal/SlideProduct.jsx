import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronRight } from "react-icons/bs";


export default function SlideProduct({ valueX3 ,thumnailImg}) {
  return (
    <div>
      <style>{`
    .animation-slideProduct {
      transform: translateX(-${valueX3}%);
    }
  `}</style>
      <div className="w-full flex  animation-slideProduct  duration-500">
        {thumnailImg.map((data,index) => (
          <img
            width="364"
            height="333"
            key={index}
            alt="ภาพด้านบนของ MacBook Air รุ่นต่างๆ ทั้ง 3 สี ได้แก่ สีทอง สีเงิน และสีเทาสเปซเกรย์"
            className="px-12 w-full h-full"
            src={data.imgText}
          />
          ))}
      </div>
    </div>
  );
}
