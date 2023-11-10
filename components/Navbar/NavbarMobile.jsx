"use client";
import React, { useState } from "react";
import {
  BsApple,
  BsSearch,
  BsBag,
  BsList,
  BsXLg,
  BsChevronRight,
} from "react-icons/bs";
import Link from "next/link";
import TextSlide from "../TextSlide/Textslide";
import BagModal from "./BagModal";
import SearchModal from "./SerchModal";

export default function NavbarMobile() {
  const [ModalName, setModalName] = useState("");
  const [ModalCancel, setModalCancel] = useState("");
  const [Hoveranimate, setHoverAnimate] = useState("");
  return (
    <>
      <nav
        className={`hidden max-lg:block ${
          ModalName ? "bg-white duration-500 " : "bg-gray-100 duration-500 "
        }`}
      >
        <div className="flex justify-center">
          <div className="max-w-5xl w-full px-7 flex  justify-between items-center gap-3 py-2 text-xs">
            <span className="">
              <Link className="" href={"/"}>
                <BsApple size={20} className="text-gray-700" />
              </Link>
            </span>
            <div className="flex  gap-5 items-center text-gray-500">
              <button
                className=""
                onClick={() => {
                  if (ModalName === "" && ModalCancel === "") {
                    setModalName("ModalSearch");
                    setModalCancel("duration-700");
                  } else {
                    setModalName("ModalSearch");
                    setModalCancel("hidden");
                  }
                }}
              >
                <BsSearch size={15} />
              </button>
              <button
                className=""
                onClick={() => {
                  if (ModalName === "" && ModalCancel === "") {
                    setModalName("ModalBag");
                    setModalCancel("duration-700");
                  } else {
                    setModalName("ModalBag");
                    setModalCancel("hidden");
                  }
                }}
              >
                <BsBag size={17} />
              </button>
              {ModalName === "" && (
                <button
                  className=""
                  onClick={() => {
                    if (ModalName === "" && ModalCancel === "") {
                      setModalName("ModelLists");
                      setModalCancel("duration-700");
                    } else {
                      setModalName("ModelLists");
                      setModalCancel("hidden");
                    }
                  }}
                >
                  <BsList size={17} />
                </button>
              )}
              {ModalName !== "" && (
                <button
                  className=""
                  onClick={() => {
                    setModalName("");
                    setModalCancel("duration-700");
                  }}
                >
                  <BsXLg size={17} />
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Model List */}
        <div
          className={` overflow-hidden px-7 ${
            (ModalName === "ModelLists" && ModalCancel === "duration-700") ||
            (ModalName === "ModelLists" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50 bg-white duration-500   absolute h-110 backdrop-blur-md  flex flex-col duration-700`
              : ` z-50 absolute bg-gray-100 duration-500 w-full h-0 ${ModalCancel}`
          }`}
        >
          <div className={`w-full flex justify-center `}>
            <div className={`max-w-5xl w-full pt-12 mb-5 flex overflow-hidden`}>
              <div className="flex flex-col w-full">
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoverStore")}
                >
                  <span>ร้าน</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoverStore"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoverMac")}
                >
                  <span>Mac</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoverMac"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoveriPad")}
                >
                  <span>iPad</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoveriPad"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoveriPhone")}
                >
                  <span>iPhone</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoveriPhone"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoverWatch")}
                >
                  <span>Watch</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoverWatch"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoverTvandHome")}
                >
                  <span>Tv และบ้าน</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoverTvandHome"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoverEnvoriment")}
                >
                  <span>ความบันเทิง</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoverEnvoriment"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between `}
                  onMouseEnter={() => setHoverAnimate("HoverAccessories")}
                >
                  <span>อุปกรณ์เสริม</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoverAccessories"
                        ? "opacity-100 duration-75"
                        : "opacity-0 duration-75"
                    }`}
                  />
                </Link>
                <Link
                  href={""}
                  className={` text-xl text-gray-600 mb-2 font-bold flex justify-between items-center`}
                  onMouseEnter={() => setHoverAnimate("HoverHelp")}
                >
                  <span>บริการช่วยเหลือ</span>
                  <BsChevronRight
                    size={18}
                    className={`${
                      Hoveranimate === "HoverHelp"
                        ? " duration-75 opacity-100 "
                        : " duration-75 opacity-0 "
                    }`}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={` w-full  h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* Model List */}
        {/* Model Bag */}
        <BagModal ModalName={ModalName}  ModalCancel={ModalCancel} setModalCancel={setModalCancel} setModalName={setModalName} />
        {/* Model bag */}
         {/* Model Search*/}
         <SearchModal ModalName={ModalName}  ModalCancel={ModalCancel} setModalCancel={setModalCancel} setModalName={setModalName} />
        {/* Model Searc */}
      </nav>
      {/* Text slide Down */}
      <article className="lg:hidden w-full  flex justify-center  items-center text-sm  overflow-hidden ">
        <div
          className={`${
            (ModalName === "" && ModalCancel === "")
              ? "w-full h-full flex justify-center items-center gap-2 py-4 max-md:flex-col max-md:py-2 animate-animation-textslide  duration-500"
              : "w-full h-full flex justify-center items-center gap-2 py-4  max-md:flex-col max-md:py-2"
          } `}
        >
          มีการผ่อนชำระในอัตราดอกเบี้ย 0% นานสูงสุด 10 เดือน{" "}
          <Link href={""} className="text-blue-600 flex items-center  ">
            ดูเพิ่มเติม <BsChevronRight size={14} />
          </Link>
        </div>
      </article>
    </>
  );
}
