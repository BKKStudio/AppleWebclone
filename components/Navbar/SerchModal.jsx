"use client";
import { useState } from "react";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import Link from "next/link";

export default function SearchModal({
  ModalName,
  ModalCancel,
  setModalCancel,
  setModalName,
}) {
  return (
    <>
      {/* ModelSearch */}
      <div
        className={`overflow-hidden ${
          ModalName === "ModalSearch" && ModalCancel === "duration-700" ||
          (ModalName === "ModalSearch" && ModalCancel === "hidden")
            ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md flex flex-col duration-700`
            : ` z-50 absolute w-full  h-0 ${ModalCancel}`
        }`}
      >
        <div
          className={`w-full flex justify-center ${
            ModalName === ""
              ? "bg-gray-100 duration-500"
              : "bg-white duration-500"
          }`}
        >
          <div className={`max-w-5xl w-full mt-1  overflow-hidden max-lg:px-7`}>
            <div className="mt-12 max-lg:mt-3 mb-7 grid  grid-row-2 w-full">
              <div
                className={`w-full flex items-center  `}
              >
                <div className="p-4 bg-white">
                  <BsSearch size={15} />
                </div>
                <input
                  type={"text"}
                  className="unborder  font-bold w-full h-12 text-xl"
                  placeholder=" ค้นหาใน apple.com"
                ></input>
              </div>
              <div className=" mt-7 flex flex-col">
                <p
                  className={`text-gray-400 font-bold text-xs max-lg:text-base `}
                >
                  ลิงก์ด่วน
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center max-lg:text-base  gap-2 text-xs py-1 hover:bg-gray-200 `}
                >
                  <BsArrowRight size={15} />
                  <span>ของขวัญสำหรับช่วงเทศกาล</span>
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center max-lg:text-base  gap-2 text-xs py-1 hover:bg-gray-200 `}
                >
                  <BsArrowRight size={15} />
                  <span>ค้นหาร้าน</span>
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center max-lg:text-base  gap-2 text-xs py-1 hover:bg-gray-200 `}
                >
                  <BsArrowRight size={15} />
                  <span>อุปกรณ์เสริม</span>
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center max-lg:text-base  gap-2 text-xs py-1 hover:bg-gray-200 `}
                >
                  <BsArrowRight size={15} />
                  <span>บัตรของขวัญ</span>
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center max-lg:text-base  gap-2 text-xs py-1 hover:bg-gray-200 $`}
                >
                  <BsArrowRight size={15} />
                  <span>Apple Trade In</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-full`}
          onMouseEnter={() => {
            setModalCancel("duration-700");
            setModalName("");
          }}
        ></div>
      </div>
      {/* ModelSearch */}
    </>
  );
}
