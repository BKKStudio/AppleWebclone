"use client";
import React from "react";
import Link from "next/link";
import ImgShopping from "../public/Images/ase-hero-202311_GEO_TH_LANG_TH.png";
import ImgAppleWatch from "../public/Images/hero_apple_watch_series_9_order__d0fi9mb84dci_largetall_2x.png";
import Image from "next/image";
import { BsChevronRight, BsApple } from "react-icons/bs";
import { useRouter } from "next/navigation";
import SlideHome from "@/components/SwiperSlide/SlideHome";

export default function Home() {
  const router = useRouter();

  const HandleLink = () => {
    router.push("/pages/Store");
  };
  return (
    <>
      <main className="bg-gray-100">
        {/* Shopping Of Apple Store Content */}
        <article className="flex justify-center bg-black w-full">
          <figure className="w-full flex justify-center">
            <Link
              href={""}
              className="relative flex justify-center w-full h-max text-white"
            >
              <div className="w-full h-full overflow-hidden flex justify-center">
                <img
                  src={
                    "https://www.apple.com/v/home/bf/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_mediumtall_2x.jpg"
                  }
                  alt=""
                  className="max-w-7xl  w-full object-fill max-md:hidden"
                ></img>
                <img
                  src={
                    "https://www.apple.com/v/home/bf/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_small.jpg"
                  }
                  alt=""
                  className="w-full h-max object-contain  md:hidden"
                ></img>
              </div>
              <div className="absolute  md:pt-20  w-full flex justify-center">
                <div className="max-md:pt-7 flex flex-col items-center gap-5">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl max-md:text-xl font-bold flex gap-1 ">
                      iPhone 15 Pro
                    </span>
                    <span className="text-xl max-lg:text-base">
                      ไทเทเนียม สุดแกร่ง สุดเบา สุดโปร
                    </span>
                    <div className="pt-2 flex gap-2">
                      <span className="text-base flex items-center gap-1 text-blue-600 hover:underline">
                        <span>ดูก่อนใคร</span>
                        <BsChevronRight size={12} />
                      </span>
                      <span className="text-base flex items-center gap-1 text-blue-600 hover:underline">
                        <span>ซื้อ</span>
                        <BsChevronRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </figure>
        </article>
        <article className="flex justify-center w-full ">
          <figure className="max-w-7xl w-full h-full">
            <div
              href={""}
              className="p-2 w-full cursor-pointer"
              onClick={HandleLink}
            >
              <div className="w-full flex justify-center">
                <div className="pt-7 flex flex-col items-center max-md:gap-5">
                  <span className="text-5xl text-center font-bold max-lg:text-3xl">
                    iPhone 15
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-xl  max-lg:text-base text-gray-700">
                      กล้องใหม่ ดีไซน์ใหม่ รักครั้งใหม่
                    </span>
                    <div className="flex  items-center gap-3 mt-3">
                      <span className="text-base  max-lg:text-xs flex items-center gap-1 text-blue-600 hover:underline">
                        <span>ดูเพิ่มเติม</span>
                        <BsChevronRight size={12} />
                      </span>
                      <span className="text-base max-lg:text-xs   flex items-center gap-1 text-blue-600 hover:underline">
                        <span>ซื้่อ</span>
                        <BsChevronRight size={12} />
                      </span>
                    </div>
                    <div className="flex justify-center  ">
                      <img
                        src="/Images/iPhone15.jpg"
                        className=" object-cover max-w-7xl  w-full"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full h-full">
          <figure className=" w-full h-full flex justify-center overflow-hidden">
            <Link href={""} className="relative w-full h-full text-white">
              <div className="flex justify-center w-full  h-full relative">
                <video autoPlay muted loop width="1920" height="360">
                  <source src="/Video/Apple.mp4" type="video/mp4" />
                </video>
                <div className="absolute  flex justify-center items-end w-full h-full lg:pb-12 max-lg:pb-4">
                  <div className="flex justify-center ">
                    <div className="flex justify-center items-end w-full">
                      <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex items-end text-4xl font-bold ">
                          <BsApple className="p-1 mb-1 text-5xl max-lg:text-xl" />
                          <span className="max-lg:text-xl"> WATCH</span>
                        </div>
                        <span className="text-center max-lg:text-xs">
                          SERIES 9
                        </span>
                        <span className="text-center text-xl max-lg:text-xs">
                          แตะสองครั้ง วิธีใหม่ที่มหัศจรรย์ในการใช้ Apple Watch
                        </span>
                        <div className="flex items-center justify-center gap-4 mt-3 w-full max-lg:text-xs ">
                          <span className="max-lg:w-16 w-24 py-2 max-lg:text-xs bg-white rounded-full text-black text-center">
                            ดูเพิ่มเติม
                          </span>
                          <span className="px-5 py-2 max-lg:text-xs bg-white rounded-full text-black">
                            ซื้อ
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </figure>
        </article>
        <article className="flex justify-center bg-white w-full">
          <figure className="w-full h-full flex justify-center p-3">
            <div className=" w-full h-full grid grid-cols-2 gap-3  max-md:grid-cols-1">
              <Link
                href={""}
                className="relative flex justify-center w-full h-full bg-white-gray relative"
              >
                <div className="flex justify-center w-full h-full">
                  <img
                    src={
                      "https://www.apple.com/th/home/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_large_2x.jpg"
                    }
                    alt=""
                    className="w-max h-max pt-14 object-contain"
                  ></img>
                </div>
                <div className="absolute w-full flex justify-center absolute">
                  <div className="lg:pt-7 pt-5 flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex items-end text-3xl">
                        <BsApple className="p-1 mb-1 " />
                        <span className="text-xl font-bold"> WATCH</span>
                      </div>
                      <span className="text-xs text-orange-600">ULTRA 2</span>
                      <span className="text-lg text-gray-600 max-lg:text-xs">
                        อีกขั้นของการผจญภัย
                      </span>
                      <div className="max-lg:pt-2 flex gap-2">
                        <span className="text-base flex max-lg:text-xs items-center gap-1 text-blue-600 hover:underline">
                          <span>ดูก่อนใคร</span>
                          <BsChevronRight size={12} />
                        </span>
                        <span className="text-base flex  max-lg:text-xs items-center gap-1 text-blue-600 hover:underline">
                          <span>ซื้อ</span>
                          <BsChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={""}
                className="relative flex justify-center w-full h-full  bg-gray-100"
              >
                <div className="flex justify-center ">
                  <img
                    src={"/Images/promo_mbp__ek7p477bkp6q_large.png"}
                    alt=""
                    className="  w-full h-max pt-14   object-fill"
                  ></img>
                </div>
                <div className="absolute w-full flex justify-center">
                  <div className="pt-7 flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl max-lg:text-2xl max-md:text-2xl font-bold flex gap-1 ">
                        MacBook Pro
                      </span>
                      <span className="text-xl max-lg:text-base text-gray-600">
                        พลังเหลือร้าย สวยเหลียวหลัง
                      </span>
                      <div className="pt-2 flex gap-2">
                        <span className="text-base flex max-lg:text-xs items-center gap-1 text-blue-600 hover:underline">
                          <span>ดูก่อนใคร</span>
                          <BsChevronRight size={12} />
                        </span>
                        <span className="text-base flex items-center max-lg:text-xs gap-1 text-blue-600 hover:underline">
                          <span>ซื้อ</span>
                          <BsChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={""}
                className="relative flex justify-center w-full h-full bg-gray-100"
              >
                <div className="flex justify-center">
                  <img
                    src={"/Images/promo_ipad__fioegapg12qi_large_2x.png"}
                    alt=""
                    className="max-w-7xl  w-full h-max pt-20  object-fill"
                  ></img>
                </div>
                <div className="absolute w-full flex justify-center">
                  <div className="pt-7 flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl max-lg:text-xl font-bold flex gap-1 ">
                        iPad
                      </span>
                      <span className="text-lg  max-lg:text-base  text-center text-gray-500">
                        รักเลย วาดเลย เอาใจไปเลย
                      </span>
                      <div className="pt-2 flex gap-2">
                        <span className="text-base max-lg:text-xs flex items-center gap-1 text-blue-600 hover:underline">
                          <span>ดูก่อนใคร</span>
                          <BsChevronRight size={12} />
                        </span>
                        <span className="text-base flex  max-lg:text-xs items-center gap-1 text-blue-600 hover:underline">
                          <span>ซื้อ</span>
                          <BsChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={""}
                className="relative flex justify-center w-full h-full text-white bg-black"
              >
                <div className="flex justify-center">
                  <img
                    src={
                      "/Images/promo_airpods_pro_order__d8xv36p4uwae_large_2x.jpg"
                    }
                    alt=""
                    className="max-w-7xl  w-full h-max pt-20  object-fill"
                  ></img>
                </div>
                <div className="absolute w-full flex justify-center">
                  <div className="pt-7 flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl max-lg:text-2xl font-bold flex gap-1 ">
                        AirPods Pro
                      </span>
                      <span className="text-lg   max-lg:text-base text-center text-white">
                        เสียงที่ปรับตามสภาพแวดล้อม <br />{" "}
                        ฟังความแตกต่างได้แล้ววันนี้
                      </span>
                      <div className="pt-2 flex gap-2">
                        <span className="text-base  max-lg:text-xs flex items-center gap-1 text-blue-600 hover:underline">
                          <span>ดูก่อนใคร</span>
                          <BsChevronRight size={12} />
                        </span>
                        <span className="text-base  max-lg:text-xs flex items-center gap-1 text-blue-600 hover:underline">
                          <span>ซื้อ</span>
                          <BsChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={""}
                className="relative flex justify-center w-full h-full  bg-gray-100"
              >
                <div className="flex justify-center">
                  <img
                    src={
                      "/Images/promo_imac_preorder__d3qgowjdhqs2_large_2x.png"
                    }
                    alt=""
                    className="max-w-7xl  w-full h-full  pt-20 object-cover"
                  ></img>
                </div>
                <div className="absolute w-full flex justify-center">
                  <div className="pt-7 flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl max-lg:text-2xl font-bold flex gap-1 ">
                        iMac
                      </span>
                      <span className="text-lg  max-lg:text-base text-center text-gray-600">
                        จัดจ้านในพลัง
                      </span>
                      <div className="pt-2 flex gap-2">
                        <span className="text-base flex  max-lg:text-xs items-center gap-1 text-blue-600 hover:underline">
                          <span>ดูก่อนใคร</span>
                          <BsChevronRight size={12} />
                        </span>
                        <span className="text-base flex  max-lg:text-xs items-center gap-1 text-blue-600 hover:underline">
                          <span>ซื้อ</span>
                          <BsChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={""}
                className="relative flex justify-center  w-full h-full  "
              >
                <div className="flex flex-col justify-center">
                  <div className=" w-full flex justify-center">
                    <div className="pt-7 pt-2 flex flex-col items-center gap-5 bg-black w-full">
                      <div className="flex flex-col items-center">
                        <span className="text-3xl max-lg:text-lg font-bold flex gap-1 text-white ">
                          iPad Pro
                        </span>
                        <div className="flex  items-center gap-1">
                          <span className="text-base  max-lg:text-xs   text-center text-white">
                            อัดฉีดพลังแรงโดย
                          </span>
                          <img
                            src={
                              "https://www.apple.com/v/home/bh/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_large_2x.png"
                            }
                            alt=""
                            className="w-8 object-cover"
                          ></img>
                        </div>
                        <div className="pt-2 flex gap-2">
                          <span className="text-base  max-lg:text-xs flex items-center gap-1 text-blue-600 hover:underline">
                            <span>ดูก่อนใคร</span>
                            <BsChevronRight size={12} />
                          </span>
                          <span className="text-base  max-lg:text-xs flex items-center gap-1 text-blue-600 hover:underline">
                            <span>ซื้อ</span>
                            <BsChevronRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={
                      "https://www.apple.com/th/home/images/promos/ipad-pro/promo_ipadpro_refresh__evi9utuixwuq_large_2x.jpg"
                    }
                    alt=""
                    className="max-w-7xl  w-full h-full object-cover"
                  ></img>
                </div>
              </Link>
            </div>
          </figure>
        </article>
        <SlideHome />
        
      </main>
    </>
  );
}
