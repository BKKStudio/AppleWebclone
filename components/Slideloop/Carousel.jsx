import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
const Carousel = ({card}) => {
  return (
    <div className={`max-w-7xl w-full h-full flex `}>
      {card.map((card, index) => (
        <React.Fragment key={index}>
          <ul  className="overflow-hidden">
            <Link href={card.text} className="้ absolute flex w-full h-full pl-16 pb-10 items-end ">
              <div className={`flex items-center gap-8 ov ${card.active === "true" ? " animate-animation-slidehome" : "hidden"} duration-500 `}>
                <span className="px-6 py-3 font-bold bg-white rounded-full flex items-center gap-1">
                  สตรีมเลย <BsPlayCircleFill />
                </span>
                <span className="font-bold flex items-center  text-white text-xl ">
                 {card.catagories} <span className="text-xs px-2 flex items-center">⬤</span>
                  <span className="font-light flex items text-white text-xl ">
                   {card.desc}
                  </span>
                </span>
              </div>
            </Link>
          </ul>
          <img
            src={card.text}
            className={`w-full h-full p-1 ${card.active === "true" ? " opacity-100 " : " opacity-30 "} duration-500 `}
            key={index}
            alt={`Card ${index + 1}`}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Carousel;
