"use client";
import React from "react";
import Link from "next/link";
import ImgShopping from "../public/Images/ase-hero-202311_GEO_TH_LANG_TH.png";
import ImgAppleWatch from "../public/Images/hero_apple_watch_series_9_order__d0fi9mb84dci_largetall_2x.png";
import Image from "next/image";
import { BsChevronRight, BsApple } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import NavbarDontSlide from "@/components/NavbarDontext/NavbarDontSlide";
import NavbarMobileDontSlide from "@/components/NavbarDontext/NavbarMobileDontSlide";
export default function Home() {
  const router = useRouter();
  const HandleLink = () => {
    router.push("/pages/Store");
  };
  return (
    <>
    {/* <div className="fixed w-full z-50">
      <NavbarDontSlide/>
      <NavbarMobileDontSlide/>
    </div> */}
      <main className="bg-gray-100">
        {/* Shopping Of Apple Store Content */}
        <article className="flex justify-center w-full ">
          <figure className="max-w-7xl w-full h-full">
            <div
              href={""}
              className="p-2 w-full cursor-pointer"
              onClick={HandleLink}
            >
              <div className="w-full flex justify-center">
                <div className="pt-7 flex flex-col items-center gap-5">
                  <span className="text-5xl text-center font-bold max-md:text-3xl">
                    กิจกรรมช้อปปิ้่งของ <br /> Apple Store
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-xl  max-md:text-lg">
                      รับบัตรของขวัญ Apple Store
                    </span>
                    <span className="text-xl max-md:text-lg">
                      มูลค่าสูงสุด ฿7,200 เมื่อซื้อ
                    </span>
                    <span className="text-xl max-md:text-lg">
                      ผลิตภัณฑ์ที่เข้าเกณฑ์
                    </span>
                    <div className="flex flex-col items-center gap-3 mt-3">
                      <span className="text-lg text-gray-600 max-md:text-base">
                        ข้อเสนอเริ่มต้น 24 พ.ย.
                      </span>
                      <span className="text-lg max-md:text-base  flex items-center gap-1 text-blue-600 hover:underline">
                        <span>ดูก่อนใคร</span>
                        <BsChevronRight size={12} />
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={ImgShopping}
                        alt=""
                        className="max-w-7xl  w-full h-full"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center bg-black w-full">
          <figure className="w-full flex justify-center">
            <Link href={""} className="relative w-full h-max text-white">
              <div className="w-full flex justify-center">
                <div className="pt-12 flex flex-col items-center gap-5">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold flex gap-1 ">
                      <BsApple size={30} /> WATCH
                    </span>
                    <span className="text-base font-bold  text-red-700">
                      SERIES 9
                    </span>
                    <span className="text-xl ">
                      ฉลาดขึ้น สว่างขึ้น ทรงพลังขึ้น
                    </span>
                    <div className="flex gap-2">
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
              <div className="flex justify-center">
                <Image
                  src={ImgAppleWatch}
                  alt=""
                  className="max-w-7xl  w-full object-fill"
                ></Image>
              </div>
            </Link>
          </figure>
        </article>
        <article className="flex justify-center bg-black w-full">
          <figure className="w-full flex justify-center">
            <Link href={""} className="relative flex justify-center w-full h-max text-white">
              <div className="flex justify-center">
                <img
                  src={
                    "https://www.apple.com/v/home/bf/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_mediumtall_2x.jpg"
                  }
                  alt=""
                  className="max-w-7xl  w-full object-fill"
                ></img>
              </div>
              <div className="absolute  pt-24  w-full flex justify-center">
                <div className="pt-7 flex flex-col items-center gap-5">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold flex gap-1 ">
                      iPhone 15 Pro
                    </span>
                    <span className="text-xl ">
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
      </main>
    </>
  );
}
