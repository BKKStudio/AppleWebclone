"use client";
import Link from "next/link";
import { useState } from "react";
import {
  BsBoxSeam,
  BsBookmark,
  BsPersonCircle,
  BsPieChart,
  BsArrowRight,
  BsSearch,
} from "react-icons/bs";

export default function BagModal({ ModalName, ModalCancel, setModalCancel ,setModalName}) {
  return (
    <>
      {/* Model Bag */}
      <div
        className={`overflow-hidden ${
          ModalName === "ModalBag" && ModalCancel === "hidden"
            ? `opacity-100 w-full z-1  absolute h-110 backdrop-blur-md flex  flex flex-col duration-700`
            : ` z-0 absolute w-full  h-0 ${ModalCancel}`
        }`}
      >
        <div
          className={`w-full flex justify-center ${
            ModalName === ""
              ? "bg-gray-100 duration-500"
              : "bg-white duration-500"
          }`}
        >
          <div className={`max-w-5xl w-full mt-1  overflow-hidden`}>
            <div className="mt-12 mb-5 grid grid-row-2 w-full">
              <div
                className={`w-full flex flex-col gap-3 text-xl font-bold `}
              >
                <p>ถุงของคุณว่างเปล่า</p>
                <p className="text-xs font-light">
                  <Link href={""} className="text-blue-600 underline">
                    ลงชื่อเข้าใช้
                  </Link>{" "}
                  เพื่อดูว่าคุณมีรายการที่บันทึกไว้หรือไม่
                </p>
              </div>
              <div className=" pt-7 flex flex-col gap-3">
                <p
                  className={`text-gray-400 font-bold text-xs `}
                >
                  โปรไฟล์ของฉัน
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center  gap-2 text-xs hover:bg-gray-200 `}
                >
                  <BsBoxSeam size={12} />
                  <span>คำสั่งซื้อ</span>
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center  gap-2 text-xs hover:bg-gray-200 `}
                >
                  <BsBookmark size={12} />
                  <span>บันทึกของคุณ</span>
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center  gap-2 text-xs hover:bg-gray-200 `}
                >
                  <BsPieChart size={12} />
                  <span>บัญชี</span>
                </p>
                <p
                  className={`text-gray-600 font-bold flex items-center  gap-2 text-xs hover:bg-gray-200 `}
                >
                  <BsPersonCircle size={12} />
                  <span>ลงชื่อเข้าใช้</span>
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
      {/* Model Bag */}
    </>
  );
}
