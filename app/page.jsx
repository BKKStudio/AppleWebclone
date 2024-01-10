"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsChevronRight, BsApple } from "react-icons/bs";
import { useRouter } from "next/navigation";
import SlideHome from "@/components/SwiperSlide/SlideHome";
import { useState, useEffect, useRef } from "react";
import { BsFillPauseFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import SlideHomeResponsive from "@/components/SwiperSlide/SlideHomeResponsive";
import BtnunderSlide from "@/components/BtnSlideLoop/BtnUnder";

export default function Home() {
  const [value, setValue] = useState(0);
  const [statusVideo, setStatusvideo] = useState(false);
  const [currenttime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  const HandlsStop = () => {
    setStatusvideo(!statusVideo);
    if (videoRef.current && statusVideo === false) {
      videoRef.current.pause();
      videoRef.current.currentTime = currenttime;
    } else {
      videoRef.current.play();
      videoRef.current.currentTime = currenttime;
    }
  };

  const router = useRouter();
  useEffect(() => {
    let intervalId;
    if (currenttime <= 10) {
      const updateCurrentTime = () => {
        setCurrentTime((prevTime) => prevTime + 1);
      };
      intervalId = setInterval(updateCurrentTime, 1000);
    } else setCurrentTime(0);

    const handleResize = () => {
      setValue(window.innerWidth);
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, [value, currenttime]); // Empty dependency array ensures that this effect runs once on mount

  const HandleLink = () => {
    router.push("/pages/Store");
  };
  return (
    <>
      <main className="bg-gray-100">
        {/* Shopping Of Apple Store Content */}
        <article className="flex  justify-center bg-black w-full">
          <figure className="w-full flex justify-center">
            <Link
              href={""}
              className="relative flex flex-col justify-center w-full h-max text-white"
            >
              <div className="md:pt-20  w-full flex justify-center">
                <div className="max-md:pt-3  flex flex-col items-center gap-5">
                  <div className="absolute z-40    flex flex-col gap-2 max-md:pt-8 items-center">
                    <span className="text-5xl max-md:text-3xl font-bold flex gap-1 ">
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
              <div className="w-full h-full overflow-hidden flex justify-center">
                <Image
                  src={
                    "/Images/Iphone15/hero_iphone15pro__i70z9oz3hj2i_mediumtall.jpg"
                  }
                  alt=""
                  width={value}
                  height={736}
                  className="max-w-7xl scale-125 max-md:scale-200 py-24   w-full h-full object-contain  max-md:hidden "
                  style={{ width: "auto", height: "auto" }}
                ></Image>
                <Image
                  src={
                    "/Images/Iphone15/hero_iphone15pro__i70z9oz3hj2i_small.jpg"
                  }
                  alt=""
                  width={value}
                  height={736}
                  className="max-w-7xl scale-150 pb-24 pt-14  w-full  object-cover md:hidden"
                  style={{ width: "auto", height: "auto" }}
                ></Image>
              </div>
            </Link>
          </figure>
        </article>
        <article className="flex justify-center w-full ">
          <figure className=" w-full h-full">
            <div
              href={""}
              className="p-2 w-full overflow-hidden cursor-pointer"
              onClick={HandleLink}
            >
              <div className="w-full  flex justify-center">
                <div className="md:pt-7 w-full  md:h-105  flex flex-col items-center ">
                  <div className="absolute z-40 md:pt-14 max-md:pt-6 w-full flex flex-col gap-3  h-full  text-center">
                    <span className="md:text-6xl max-md:text-4xl text-center font-bold ">
                      iPhone 15
                    </span>
                    <div className="flex flex-col  items-center">
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
                    </div>
                  </div>
                  <div className=" flex justify-center   w-full h-full ">
                    <Image
                      src="/Images/Iphone15/hero_iphone15_announce__uuemlcwczn6u_small_2x.jpg"
                      className=" object-contain scale-175    w-full  h-full  max-md:hidden   bg-cover"
                      alt=""
                      width={value}
                      height={736}
                      style={{ width: "auto", height: "auto" }}
                    ></Image>
                    <Image
                      src="/Images/Iphone15/hero_iphone15_announce__uuemlcwczn6u_small_2x.jpg"
                      className=" object-contain scale-175   py-20 w-full  md:hidden   bg-cover"
                      alt=""
                      width={value}
                      height={736}
                      style={{ width: "auto", height: "auto" }}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center items-end w-full  h-full">
          <figure className=" w-full h-full flex justify-center  overflow-hidden">
            <Link
              href={""}
              className="relative  max-md:py-48 w-full h-full text-white"
            >
              <div className="flex flex-col  justify-center w-full  h-full relative">
                <div className="md:scale-100    scale-275 w-full h-full max-h-2xl h-full ">
                  <video autoPlay muted loop width={value} ref={videoRef}>
                    <source src="/Video/Apple.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute flex justify-center  items-end w-full h-full md:pt-64 bg max-md:pt-80">
                  <div className="flex justify-center  w-full h-full">
                    <div className="flex flex-col justify-center items-end w-full h-full">
                      <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex items-end text-4xl font-bold ">
                          <BsApple className="p-1 mb-1 text-5xl max-lg:text-xl" />
                          <span className="max-lg:text-xl"> WATCH</span>
                        </div>
                        <span className="text-center max-lg:text-xs font-bold">
                          SERIES 9
                        </span>
                        <span className="max-md:hidden text-center text-xl max-lg:text-lg">
                          แตะสองครั้ง วิธีใหม่ ที่มหัศจรรย์ในการใช้ Apple Watch
                        </span>
                        <span className="md:hidden text-center text-xl max-lg:text-lg">
                          แตะสองครั้ง วิธีใหม่ <br /> ที่มหัศจรรย์ในการใช้{" "}
                          <br /> Apple Watch
                        </span>

                        <div className="flex items-center justify-center gap-4 mt-3 w-full max-lg:text-xs ">
                          <span className="max-lg:w-24 w-24 py-2 max-lg:text-base bg-white rounded-full text-black text-center">
                            ดูเพิ่มเติม
                          </span>
                          <span className="px-7 py-2 max-lg:text-base bg-white rounded-full text-black">
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
          <div className="w-full absolute flex justify-end pr-4 pb-4">
            <div
              className="bg-zinc-600 w-8 h-8 rounded-full text-xl flex items-center justify-center text-white cursor-pointer max-md:hidden"
              onClick={HandlsStop}
            >
              <BsFillPauseFill
                className={`${statusVideo === false ? "block" : "hidden"}`}
              />
              <BsFillPlayFill
                className={`${statusVideo === true ? "block" : "hidden"}`}
              />
            </div>
          </div>
        </article>
        <article className="bg-white">
          <figure className=" grid grid-cols-2 w-full h-full  gap-3 max-md:grid-cols-1 lg:p-3">
            {/* Watch */}
            <Link
              href={""}
              className="  bg-white-gray  w-full h-full    overflow-hidden  "
            >
              <div className="relative  flex flex-col w-full h-max pb-24 items-center">
                <div className="absolute  flex flex-col justify-center items-center   z-40 pt-8  w-full">
                  <span className="flex font-bold text-3xl">
                    <BsApple />
                    <h2 className="pt-1">WATCH</h2>
                  </span>
                  <span className="flex  text-base">
                    <h2 className="text-orange-500 font-medium">ULTRA 2</h2>
                  </span>
                  <span className="flex  lg:text-xl">
                    <h2 className="text-gray-600 ">อีกขั้นของการผจญภัย</h2>
                  </span>
                  <span className="flex gap-5 pt-2 lg:text-base text-base">
                    <span className="text-blue-600 flex items-center hover:underline">
                      ดูเพิ่มเติม <BsChevronRight />
                    </span>
                    <span className="text-blue-600 flex items-center hover:underline">
                      ซื้อ <BsChevronRight />
                    </span>
                  </span>
                </div>
                <div className="md:pt-20  max-md:pt-24 flex  ">
                  <Image
                    src="/Images/SmartWatch/promo_apple_watch_ultra2_order__dyxqj5ia98om_medium_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="lg:px-10 md:hidden scale-125  object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Image
                    src="/Images/SmartWatch/promo_apple_watch_ultra2_order__dyxqj5ia98om_large.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="lg:px-10 max-md:hidden scale-150  object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </Link>
            {/* Watch */}
            {/* MacBook Pro */}
            <Link
              href={""}
              className="  bg-white-gray  w-full h-full    overflow-hidden  "
            >
              <div className="relative flex flex-col w-full h-max max-md:pb-24  items-center">
                <div className=" flex flex-col justify-center items-center  z-40 pt-8  w-full">
                  <span className="flex font-bold text-3xl">
                    <h2 className="pt-1">MacBook Pro</h2>
                  </span>
                  <span className="flex  lg:text-xl">
                    <h2 className="text-gray-600 ">
                      พลังเหลือร้าย สวยเหลียวหลัง
                    </h2>
                  </span>
                  <span className="flex gap-5 pt-2 lg:text-base text-base">
                    <span className="text-blue-600 flex items-center hover:underline">
                      ดูเพิ่มเติม <BsChevronRight />
                    </span>
                    <span className="text-blue-600 flex items-center hover:underline">
                      ซื้อ <BsChevronRight />
                    </span>
                  </span>
                </div>
                <div className=" flex w-full h-full pb-3">
                  <Image
                    src="/Images/Imac/promo_mbp__ek7p477bkp6q_large_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="px-10 max-md:hidden  scale-150 object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Image
                    src="/Images/Imac/promo_mbp__ek7p477bkp6q_medium_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="md:hidden px-24 scale-175    object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </Link>
            {/* MacBook Pro */}
            {/* ipad */}
            <Link
              href={""}
              className="   bg-white-gray  w-full h-full    overflow-hidden  "
            >
              <div className="relative flex flex-col w-full h-max pb-24 items-center">
                <div className=" flex flex-col justify-center items-center  z-40 pt-8  w-full">
                  <span className="flex font-bold text-3xl">
                    <h2 className="pt-1">iPad</h2>
                  </span>
                  <span className="flex  lg:text-xl">
                    <h2 className="text-gray-600 ">รักเลย วาดเลย เอาใจไปเลย</h2>
                  </span>
                  <span className="flex gap-5 pt-2 lg:text-lg text-base">
                    <span className="text-blue-600 flex items-center hover:underline">
                      ดูเพิ่มเติม <BsChevronRight />
                    </span>
                    <span className="text-blue-600 flex items-center hover:underline">
                      ซื้อ <BsChevronRight />
                    </span>
                  </span>
                </div>
                <div className=" flex  ">
                  <Image
                    src="/Images/Ipads/promo_ipad__fioegapg12qi_large_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="max-md:hidden px-10  scale-175  object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Image
                    src="/Images/Ipads/promo_ipadpro_refresh__evi9utuixwuq_medium_2x.jpg"
                    alt=""
                    width={value}
                    height={548}
                    className="md:hidden px-10 scale-125  object-contain bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </Link>
            {/*Ipad */}
            {/* Airpod */}
            <Link
              href={""}
              className="  bg-black w-full h-full    overflow-hidden  "
            >
              <div className="relative flex flex-col w-full h-max pb-12 items-center">
                <div className="  flex flex-col gap-2 justify-center items-center  z-40 pt-8  w-full">
                  <span className="flex font-bold text-3xl">
                    <h2 className="pt-1 text-white">AirPods Pro</h2>
                  </span>
                  <span className="flex  lg:text-xl">
                    <h2 className="text-white ">
                      เสียงที่ปรับตามสภาพแวดล้อม <br />{" "}
                      ฟังความแตกต่างได้แล้ววันนี้
                    </h2>
                  </span>
                  <span className="flex gap-5 pt-2 lg:text-base text-base">
                    <span className="text-blue-600 flex items-center hover:underline">
                      ดูเพิ่มเติม <BsChevronRight />
                    </span>
                    <span className="text-blue-600 flex items-center hover:underline">
                      ซื้อ <BsChevronRight />
                    </span>
                  </span>
                </div>
                <div className=" flex  ">
                  <Image
                    src="/Images/AirPods/promo_airpods_pro_order__d8xv36p4uwae_large_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="max-md:hidden px-10   scale-175   object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Image
                    src="/Images/AirPods/promo_airpods_pro_order__d8xv36p4uwae_medium_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="md:hidden scale-125 pt-20   object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </Link>
            {/*Airpod */}
            {/* iMac */}
            <Link
              href={""}
              className="   bg-white-gray  w-full h-full    overflow-hidden  "
            >
              <div className="relative flex flex-col w-full h-max pb-24 items-center">
                <div className="bg-white-gray flex flex-col justify-center items-center  z-40 pt-8  w-full">
                  <span className="flex font-bold text-3xl">
                    <h2 className="pt-1 ">iMac</h2>
                  </span>
                  <span className="flex  lg:text-xl">
                    <h2 className="text-gray-600 ">จัดจ้านในพลัง</h2>
                  </span>
                  <span className="flex gap-5 pt-2 lg:text-base text-base">
                    <span className="text-blue-600 flex items-center hover:underline">
                      ดูเพิ่มเติม <BsChevronRight />
                    </span>
                    <span className="text-blue-600 flex items-center hover:underline">
                      ซื้อ <BsChevronRight />
                    </span>
                  </span>
                </div>
                <div className="scale-150 flex  ">
                  <Image
                    src="/Images/Imac/promo_imac__crg641tip4q6_large_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="max-md:hidden px-10   object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Image
                    src="/Images/Imac/promo_imac__crg641tip4q6_medium_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="md:hidden px-10   object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </Link>
            {/* iMac */}
            {/* iPads */}
            <Link
              href={""}
              className="  bg-black w-full h-full    overflow-hidden  "
            >
              <div className="relative flex flex-col w-full h-max pb-24 items-center">
                <div className="bg-black flex flex-col justify-center items-center  z-40 pt-8  w-full">
                  <span className="flex font-bold text-3xl">
                    <h2 className="pt-1 text-white">iPad Pro</h2>
                  </span>
                  <span className="flex gap-2 items-center lg:text-xl">
                    <h2 className="text-white ">อัดฉีดพลังแรงโดย</h2>
                    <Image
                      src="/Images/promo_m2_chip__enw2kz91lsuq_large_2x.png"
                      alt=""
                      width={45}
                      height={74}
                      className="object-center bg-center"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </span>
                  <span className="flex gap-5 pt-2 lg:text-base text-base">
                    <span className="text-blue-600 flex items-center hover:underline">
                      ดูเพิ่มเติม <BsChevronRight />
                    </span>
                    <span className="text-blue-600 flex items-center hover:underline">
                      ซื้อ <BsChevronRight />
                    </span>
                  </span>
                </div>
                <div className="scale-150 flex  ">
                  <Image
                    src="/Images/Ipads/promo_ipadpro_refresh__evi9utuixwuq_large_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="max-md:hidden px-10   object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Image
                    src="/Images/Ipads/promo_ipadpro_refresh__evi9utuixwuq_medium_2x.jpg"
                    alt=""
                    width={value}
                    height={1160}
                    className="md:hidden px-10   object-center bg-center"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </Link>
            {/* iPads */}
          </figure>
        </article>
        <div className="max-md:hidden">
          <SlideHome />
        </div>
        <div className="md:hidden  overflow-hidden">
          <SlideHomeResponsive/>
        </div>
      </main>
    </>
  );
}
