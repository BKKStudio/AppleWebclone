import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsApple, BsPlayCircleFill } from "react-icons/bs";

const CarouselMobile = ({ card }) => {
  return (
    <div className={`max-w-72 w-full  flex `}>
      {card.map((card, index) => (
        <React.Fragment key={index}>
          <ul  className="overflow-hidden">
            <Link href={card.text} className="absolute p-12 overflow-hidden flex  justify-center w-full h-full items-end ">
              <div className={`   ${card.active === "true" ? " animate-animation-slidehome" : "hidden"} duration-500 `}>
                <span className="font-bold  text-center flex flex-col gap-1 pb-4  text-white text-base ">
                 {card.catagories}
                  <span className="font-light flex text-center text-white text-xs  ">
                   {card.desc}
                  </span>
                </span>
                <span className=" text-center px-6 py-3 font-bold bg-white rounded-full flex justify-center items-center gap-1">
                  สตรีมเลย <BsPlayCircleFill />
                </span>
              </div>
            </Link>
          </ul>
          <img
            src={card.text}
            className={`w-full h-full p-2 ${card.active === "true" ? " opacity-100 " : " opacity-30 "} duration-500 `}
            key={index}
            alt={`Card ${index + 1}`}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CarouselMobile;
