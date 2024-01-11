"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BsApple,
  BsSearch,
  BsBag,
  BsArrowRight,
  BsChevronRight,
} from "react-icons/bs";
import SearchModal from "./SerchModal";
import BagModal from "./BagModal";

export default function Navbar() {
  const [ModalName, setModalName] = useState("");
  const [ModalCancel, setModalCancel] = useState("");
  return (
    <>
      <nav className={`hidden lg:block fixed w-full z-100 `}>
        <div
          className={`text-center flex   justify-center  ${
            ModalName === ""
              ? "bg-gray-100 duration-500"
              : "bg-white  duration-500"
          }`}
        >
          <div className="max-w-4xl w-full flex justify-between items-center gap-3 py-3 text-xs">
            <span className="">
              <Link className="" href={"/"}>
                <BsApple size={14} className="text-gray-700" />
              </Link>
            </span>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("Modalstore");
                  setModalCancel("duration-700");
                } else {
                  setModalName("Modalstore");
                  setModalCancel("hidden");
                }
              }}
            >
              <Link href={"/pages/Store"} className="">
                ร้าน
              </Link>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModalMac");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModalMac");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">Mac</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("Modalipads");
                  setModalCancel("duration-700");
                } else {
                  setModalName("Modalipads");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">iPads</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModaliPhone");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModaliPhone");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">iPhone</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModalWatch");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModalWatch");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">Watch</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModalAirPods");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModalAirPods");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">AirPods</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModalTvandHome");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModalTvandHome");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">Tvและบ้าน</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModalEnvoriment");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModalEnvoriment");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">ความบันเทิง</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModalAccessdories");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModalAccessdories");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">อุปกรณ์เสริม</span>
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => {
                if (ModalName === "" && ModalCancel === "") {
                  setModalName("ModalHelp");
                  setModalCancel("duration-700");
                } else {
                  setModalName("ModalHelp");
                  setModalCancel("hidden");
                }
              }}
            >
              <span className="">บริการช่วยเหลือ</span>
            </div>
            <button
              className="cursor-pointer"
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
              <BsSearch size={14} />
            </button>
            <button
              className="cursor-pointer"
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
              <BsBag size={14} />
            </button>
          </div>
        </div>
        {/* Model Store */}
        <div
          className={` overflow-hidden   ${
            (ModalName === "Modalstore" && ModalCancel === "duration-700") ||
            (ModalName === "Modalstore" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
              : ` z-50 absolute w-full h-0 ${ModalCancel}`
          }`}
        >
          <div
            className={`w-full flex justify-center  ${
              ModalName === ""
                ? "bg-gray-100 duration-500"
                : "bg-white duration-500"
            }`}
          >
            <div
              className={`max-w-5xl w-full pt-12 mb-5 grid grid-cols-3  justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>เลือกซื้อ</p>
                <Link
                  href={"/pages/Store"}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อผลิตภัณฑ์ล่าสุด
                </Link>
                <Link
                  href={"/pages/Shop/buy-mac"}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Mac
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPhone
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Watch
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  อุปกรณ์เสริม
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>ลิงก์ด่วน</p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อของขวัญสำหรับช่วงเทศกาล
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ค้นหาร้าน
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  สถานะคำสั่งซื้อ
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Trade In
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการด้านการเงิน
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  เลือกซื้อในร้านค้าพิเศษ
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  การศึกษา
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ธุรกิจ
                </Link>
              </div>
            </div>
          </div>
          <div
            className={` w-full h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* Model Store */}

        {/* ModelMac */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModalMac" && ModalCancel === "duration-700") ||
            (ModalName === "ModalMac" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50 absolute h-110 backdrop-blur-md flex flex-col duration-700`
              : ` z-50 absolute w-full  h-0 ${ModalCancel}`
          }`}
        >
          <div
            className={`w-full flex justify-center  ${
              ModalName === ""
                ? "bg-gray-100 duration-500"
                : "bg-white duration-500"
            }`}
          >
            <div
              className={`max-w-5xl w-full pt-12 mb-7 grid grid-cols-3  justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>ดูข้อมูล Mac</p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูล Mac ทั้งหมด
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  MacBook Air
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  MacBook Pro
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iMac
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Mac mini
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Mac Studio
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Mac Pro
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  จอภาพ
                </Link>
                <div className="mt-3 flex flex-col">
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold `}
                  >
                    เปรียบเทียบ Mac
                  </Link>
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold `}
                  >
                    Mac จัดให้
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>เลือกซื้อ Mac</p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อ Mac
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  อุปกรณ์เสริม Mac
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Trade In
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการด้านการเงิน
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  อีกมากมายจาก Mac
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ Mac
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  AppleCare + สำหรับ Mac
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  MacOs Sonoma
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  แอปต่างๆ จาก Apple
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ความต่อเนื่อง
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  iCloud+
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Mac สำหรับธุรกิจ
                </Link>
                <Link
                  href={"/123"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  การศึกษา
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-full  h-full `}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* ModelMac */}

        {/* Modalipads*/}
        <div
          className={`overflow-hidden ${
            (ModalName === "Modalipads" && ModalCancel === "duration-700") ||
            (ModalName === "Modalipads" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
              : ` z-50 absolute w-full h-0 ${ModalCancel}`
          }`}
        >
          <div
            className={`w-full flex justify-center ${
              ModalName === ""
                ? "bg-gray-100 duration-500"
                : "bg-white duration-500"
            }`}
          >
            <div
              className={`max-w-5xl w-full pt-12 mb-4 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>ดูข้อมูล iPad</p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูล iPad ทั้งหมด
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPad Pro
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPad Air
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iMac
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPad mini
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Pencil
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  คีย์บอร์ด
                </Link>
                <div className="mt-3 flex flex-col">
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold ${
                      ModalName === "Modalipads" ? "" : ""
                    }`}
                  >
                    เปรียบเทียบ iPad
                  </Link>
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold ${
                      ModalName === "Modalipads" ? "" : ""
                    }`}
                  >
                    ทำไมต้อง iPad
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>เลือกซื้อ iPad</p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อ iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  อุปกรณ์เสริม iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Trade In
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการด้านการเงิน
                </Link>
              </div>
              <div className="flex flex-col">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  อีกมากมายจาก iPad
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  AppleCare + สำหรับ iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  iPadOs 17
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  แอปต่างๆ จาก Apple
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  iCloud+
                </Link>
                <Link
                  href={"/123"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  การศึกษา
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-full  h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* Modalipads */}

        {/* ModeliPones */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModaliPhone" && ModalCancel === "duration-700") ||
            (ModalName === "ModaliPhone" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
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
            <div
              className={`max-w-5xl w-full pt-12 mb-7 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>ดูข้อมูล iPhone</p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูล iPhone ทั้งหมด
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPhone 15 Pro
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPhone 15
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPhone 14
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPhone 13
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPhone SE
                </Link>
                <div className="mt-3 flex flex-col">
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold`}
                  >
                    เปรียบเทียบ iPhone
                  </Link>
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold `}
                  >
                    เปลี่ยนจาก Android
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  เลือกซื้อ iPhone
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อ iPhone
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  อุปกรณ์เสริม iPhone
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Trade In
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการด้านการเงิน
                </Link>
              </div>
              <div className="flex flex-col">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  อีกมากมายจาก iPhone
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ iPhone
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  AppleCare + สำหรับ iPhone
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  IOS 17
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  แอปต่างๆ จาก Apple
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ความเป็นส่วนตัวของ iPhone
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  iCloud+
                </Link>
                <Link
                  href={"/123"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  กระเป๋าสตางค์
                </Link>
                <Link
                  href={"/123"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Siri
                </Link>
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
        {/* ModeliPones */}

        {/* ModalWatch */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModalWatch" && ModalCancel === "duration-700") ||
            (ModalName === "ModalWatch" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
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
            <div
              className={`max-w-5xl w-full pt-12 mb-4 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>ดูข้อมูล Watch</p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูล Apple Watch ทั้งหมด
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Watch Series 9
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Watch Ultra 2
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Watch SE
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Watch Nike
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Watch Hermès
                </Link>
                <div className="mt-3 flex flex-col">
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold `}
                  >
                    เปรียบเทียบ Watch
                  </Link>
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold `}
                  >
                    ทำไมต้อง Apple Watch
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>เลือกซื้อ Watch</p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อ Apple Watch
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Watch Studio
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  สาย Apple Watch
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  อุปกรณ์เสริม Apple Watch
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Trade In
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการด้านการเงิน
                </Link>
              </div>
              <div className="flex flex-col">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  อีกมากมายจาก Watch
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ Apple Watch
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  AppleCare+
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  watchOS10
                </Link>
                <Link
                  href={"/"}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  แอปต่างๆ จาก Apple
                </Link>
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
        {/* ModalWatch */}

        {/*ModalAirPods */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModalAirPods" && ModalCancel === "duration-700") ||
            (ModalName === "ModalAirPods" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
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
            <div
              className={`max-w-5xl w-full pt-12 mb-4 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  ดูข้อมูล AirPods
                </p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูล AirPods ทั้งหมด
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  AirPods Pro รุ่นที่ 2
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  AirPods รุ่นที่ 3
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  AirPods Max
                </Link>
                <div className="mt-3 flex flex-col">
                  <Link
                    href={""}
                    className={`text-xs text-gray-600 mb-2 font-bold `}
                  >
                    เปรียบเทียบ AirPods
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  เลือกซื้อ AirPods
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อ AirPods
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  อุปกรณ์เสริม AirPods
                </Link>
              </div>
              <div className="flex flex-col">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  อีกมากมายจาก AirPods
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ AirPods
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  AppleCare+ for Headphones
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Music
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-full  h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* ModalAirPods */}

        {/* ModalTvandHome */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModalTvandHome" &&
              ModalCancel === "duration-700") ||
            (ModalName === "ModalTvandHome" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
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
            <div
              className={`max-w-5xl w-full pt-12 mb-3 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  ดูข้อมูล Tv และบ้าน
                </p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูล Tv และบ้าน
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple TV 4K
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  เลือกซื้อ Tv และบ้าน
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อ Apple TV 4K
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  เลือกซื้อ Apple TV Remote
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  อุปกรณ์เสริม TV และบ้าน
                </Link>
              </div>
              <div className="flex flex-col">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  อีกมากมายจาก TV และบ้าน
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ Apple TV
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  AppleCare+
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  แอป Apple TV
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple TV+
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  แอปบ้าน
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple Music
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Siri
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  AirPlay
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-full  h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* ModalTvandHome */}

        {/*ModalEnvoriment */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModalEnvoriment" &&
              ModalCancel === "duration-700") ||
            (ModalName === "ModalEnvoriment" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
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
            <div
              className={`max-w-5xl w-full pt-12 mb-4 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  ดูข้อมูลความบันเทิง
                </p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูลความบันเทิง
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple One
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Tv+
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Music
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Arcade
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Podcasts
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Books
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Apple Store
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>บริการช่วยเหลือ</p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ Apple TV+
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  บริการช่วยเหลือสำหรับ Apple Music
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-full  h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* ModalEnvoriment */}

        {/* ModalAccessdories */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModalAccessdories" &&
              ModalCancel === "duration-700") ||
            (ModalName === "ModalAccessdories" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
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
            <div
              className={`max-w-5xl w-full pt-12 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2`}>
                  เลือกซื้ออุปกรณ์เสริม
                </p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  เลือกซื้ออุปกรณ์เสริมทั้งหมด
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  Mac
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  iPhone
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  Apple Watch
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  AirPods
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  Tv และบ้าน
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold`}
                >
                  Apple Store
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2`}>
                  ดูข้อมูลอุปกรณ์เสริม
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold`}
                >
                  เลือกซื้อของขวัญสำหรับช่วงเทศกาล
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold`}
                >
                  สร้างสรรค์โดย Apple
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold`}
                >
                  Beats by Dr. Dre
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold`}
                >
                  AirTag
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-full  h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* ModalAccessdories */}

        {/* ModalHelp */}
        <div
          className={`overflow-hidden ${
            (ModalName === "ModalHelp" && ModalCancel === "duration-700") ||
            (ModalName === "ModalHelp" && ModalCancel === "hidden")
              ? `opacity-100 w-full z-50  absolute h-110 backdrop-blur-md  flex flex-col duration-700`
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
            <div
              className={`max-w-5xl w-full pt-12 mb-5 grid grid-cols-3 justify-center overflow-hidden`}
            >
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  ดูข้อมูลบริการความช่วยเหลือ
                </p>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPhone
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Mac
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  iPad
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Watch
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  AirPods
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  เพลง
                </Link>
                <Link
                  href={""}
                  className={`text-xl text-gray-600 mb-2 font-bold `}
                >
                  Tv
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ดูข้อมูลบริการความช่วยเหลือ
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  รับความช่วยเหลือ
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ชุมชน
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ตรวจสอบความคุ้มครอง
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ซ่อม
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ติดต่อเรา
                </Link>
              </div>
              <div className="flex flex-col ">
                <p className={`text-xs text-gray-600 mb-2 `}>
                  หัวข้อที่เป็นประโยชน์
                </p>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ซื้อ AppleCare+
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  Apple ID และ รหัสผ่าน
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  การเรียกเก็บเงินและการสมัครรับ
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ค้นหาของฉัน
                </Link>
                <Link
                  href={""}
                  className={`text-xs text-gray-600 mb-2 font-bold `}
                >
                  ความช่วยเหลือการเข้าถึง
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-full  h-full`}
            onMouseEnter={() => {
              setModalCancel("duration-700");
              setModalName("");
            }}
          ></div>
        </div>
        {/* ModalHelp */}

        {/* ModalSearch  */}
        <SearchModal
          ModalName={ModalName}
          ModalCancel={ModalCancel}
          setModalCancel={setModalCancel}
          setModalName={setModalName}
        />
        {/* ModalSearch */}

        {/* ModalBag  */}
        <BagModal
          ModalName={ModalName}
          ModalCancel={ModalCancel}
          setModalCancel={setModalCancel}
          setModalName={setModalName}
        />
        {/* ModalBag  */}

        {/* Text slide Down
        <article className=" hidden lg:w-full lg:z-2  lg:flex justify-center  lg:items-center lg:text-sm  lg:overflow-hidden ">
          <div
            className={`${
              (ModalName === "") & (ModalCancel === "")
                ? "w-full h-full flex justify-center items-center gap-2   py-4 animate-animation-textslide  duration-500"
                : "w-full h-full flex justify-center items-center gap-2   py-4 "
            } `}
          >
            มีการผ่อนชำระในอัตราดอกเบี้ย 0% นานสูงสุด 10 เดือน{" "}
            <Link href={""} className="text-blue-600 flex items-center  ">
              ดูเพิ่มเติม <BsChevronRight size={14} />
            </Link>
          </div>
        </article> */}
      </nav>
    </>
  );
}
