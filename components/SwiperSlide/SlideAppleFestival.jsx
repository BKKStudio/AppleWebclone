"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function SlideAppleFestival() {
  const [value, setValue] = useState("!w-max");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setValue("!w-max");
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setValue("!w-max");
      } else if (window.innerWidth <= 768 && window.innerWidth >= 0) {
        setValue("!w-full");
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className={`mySwiper !z-0  !px-5 !pb-10  `}
    >
      <SwiperSlide className={`!max-w-mg  ${value} !h-102 !rounded-xl`}>
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-102   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-ase-announce-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1700080787089"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-ase-announce-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1700080787089, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-ase-announce-202311_GEO_TH_LANG_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1700080787089 2x"
              className="rounded-xl w-full h-full "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
                กิจกรรมช็อปปิ้งของ Apple Store
              </span>
              <span className="text-xl text-black font-bold  pb-2">
                ซื้อผลิตภัณฑ์ที่เข้าเกณฑ์ก็รับบัตรของขวัญ Apple Store ได้เลย***
              </span>
              <span className="text-base text-black pb-2">
                กิจกรรมเริ่ม 24 พฤศจิกายน ที่ Apple เท่านั้น
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-2  items-center  !h-102  ">
            <div className="relative w-72 h-52 flex justify-center  bg-white rounded-xl shadow-lg hover:scale-104 hover:shadow-xl duration-500">
              <div className="w-full h-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 42 56"
                  className="w-10 ml-5 mt-5"
                  aria-hidden="true"
                  color="red"
                  role="img"
                  fill="red"
                >
                  <g>
                    <rect width="20" height="20" fill="none"></rect>
                    <path d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"></path>
                  </g>
                </svg>
                <div className="ml-5 mt-1 ">
                  <span className="text-xl font-bold ">
                    จ่ายดอกเบี้ย 0% นานสุด 10 เดือน
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-72 h-52 flex justify-center  bg-white rounded-xl shadow-lg hover:scale-104 hover:shadow-xl duration-500">
              <div className="w-full h-max">
                <svg
                  viewBox="0 0 49 56"
                  className="w-12 ml-5 mt-5"
                  aria-hidden="true"
                  role="img"
                  fill="red"
                >
                  <path d="m0 0h49v56h-49z" fill="none"></path>
                  <path d="m47.8447 27.501-6.6757-7.1289a4.37 4.37 0 0 0 -3.4854-1.3721h-4.6836v-4a5 5 0 0 0 -5-5h-23a5 5 0 0 0 -5 5v21a5 5 0 0 0 5 5h1.15a5.6216 5.6216 0 0 0 11.2 0h13.8a5.6216 5.6216 0 0 0 11.2 0h2.6436c2.5464 0 4.0064-1.4092 4.0064-3.8657v-6.7515a4.15 4.15 0 0 0 -1.1553-2.8818zm-32.5202 13.499a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2844-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.051.5zm15.6755-2h-13.8335a5.6187 5.6187 0 0 0 -10.833 0h-1.3335a3.0033 3.0033 0 0 1 -3-3v-21a3.0033 3.0033 0 0 1 3-3h23a3.0033 3.0033 0 0 1 3 3zm9.3245 2a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2839-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.0505.5zm6.6755-3.8657c0 1.3257-.581 1.8657-2.0068 1.8657h-2.8267a5.6127 5.6127 0 0 0 -9.1665-2.6843v-15.3157h4.6836a2.4292 2.4292 0 0 1 2.03.7437l6.6875 7.1411a2.18 2.18 0 0 1 .5989 1.498zm-3.3913-8.0216a1.2119 1.2119 0 0 1 .3913.8873h-7.7773a1.1432 1.1432 0 0 1 -1.2227-1.2324v-5.7676h2.4131a1.6822 1.6822 0 0 1 1.3364.6244z"></path>
                </svg>
                <div className="ml-5 mt-1 ">
                  <span className="text-lg font-bold ">
                    รับบริการจัดส่งฟรี หรือ <br />
                    ไปรับสินค้าที่มีพร้อม
                    <br />
                    จำหน่ายที่ Apple Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className=" !flex !w-max gap-4">
        <Link href={""} className="rounded-xl ">
          <div className="grid grid-col-2  items-center  !h-102  ">
            <div className="relative w-72 h-52 flex justify-center  bg-white rounded-xl shadow-lg hover:scale-104 hover:shadow-xl duration-500">
              <div className="w-full h-max">
                <svg
                  viewBox="0 0 43 56"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 ml-5 mt-5"
                  aria-hidden="true"
                  role="img"
                  fill="red"
                >
                  <path d="m0 0h43v56h-43z" fill="none"></path>
                  <path d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"></path>
                  <path d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"></path>
                  <path d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"></path>
                  <path d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"></path>
                </svg>
                <div className="px-5 mt-1 ">
                  <span className="text-red-500 text-lg font-bold">
                    นำอุปกรณ์ของคุณมาแลก
                  </span>
                  <span className="text-lg font-bold ">
                    {" "}
                    เพื่อรับเครดิตสำหรับการใช้ซื้อเครื่องใหม่
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-72 h-52 flex justify-center  bg-white rounded-xl shadow-lg hover:scale-104 hover:shadow-xl duration-500">
              <div className="w-full h-max">
                <svg
                  viewBox="0 0 36 56"
                  className="w-12 ml-5 mt-5"
                  aria-hidden="true"
                  fill="red"
                >
                  <path
                    d="m.0072.0046h35.9856v55.9908h-35.9856z"
                    fill="none"
                  ></path>
                  <path d="m29 12c2.757 0 5 2.243 5 5v22c0 2.757-2.243 5-5 5h-22c-2.757 0-5-2.243-5-5v-22c0-2.757 2.243-5 5-5zm0-2h-22c-3.866 0-7 3.134-7 7v22c0 3.866 3.134 7 7 7h22c3.866 0 7-3.134 7-7v-22c0-3.866-3.134-7-7-7zm-3.5 11h-2.5378c-.1951-2.46-2.3293-4.4048-4.9622-4.4048s-4.7672 1.9448-4.9622 4.4048h-2.5378c-1.3807 0-2.5 1.1193-2.5 2.5v14c0 1.3807 1.1193 2.5 2.5 2.5h15c1.3807 0 2.5-1.1193 2.5-2.5v-14c0-1.3807-1.1193-2.5-2.5-2.5zm-3.9586 10.849c-.1356.3135-.2965.6016-.4744.8727-.2457.3643-.449.6185-.61.754-.2373.2288-.4999.3474-.7795.3559-.1948 0-.4406-.0593-.7202-.1779-.2796-.1187-.5422-.1779-.7794-.1779-.2457 0-.5084.0593-.7964.1779s-.5168.1779-.6947.1863c-.2627.0085-.5253-.1101-.7964-.3643-.1694-.1525-.3813-.4066-.6354-.7794-.2711-.3983-.4913-.8473-.6693-1.3726-.1863-.5591-.2796-1.1099-.2796-1.6351 0-.6016.1271-1.1183.3813-1.5589.1948-.3474.4659-.627.7964-.8303.3389-.2033.6947-.3051 1.0845-.3135.2118 0 .4913.0593.8387.1948.3389.1356.5591.2034.6608.2034.0762 0 .322-.0763.7371-.2372.3897-.144.7286-.2034.9997-.1779.7371.0593 1.2878.3558 1.6605.8981-.6608.4152-.9912.9913-.9827 1.7283.0084.5761.2118 1.059.6016 1.4318.1863.1779.3896.3135.61.4067-.0424.144-.1017.2795-.1526.4151zm-3.5584-5.1511c0-.4406.161-.8472.4915-1.2285.1694-.1949.3728-.3474.627-.4745.2457-.127.4829-.2033.7117-.2118.0085.0593.0085.1187.0085.1779 0 .449-.161.8812-.483 1.2708-.3897.466-.8387.6778-1.3471.6354-.0086-.0507-.0086-.11-.0086-.1693zm-3.8446-5.6979c.1945-1.8496 1.8414-3.3047 3.8616-3.3047s3.6671 1.4551 3.8616 3.3047z"></path>
                </svg>
                <div className="px-5 ">
                  <span className=" text-lg font-bold ">สัมผัสประสบการณ์</span>
                  <span className="text-lg font-bold text-red-500">
                    {" "}
                    การเลือกซื้อที่ปรับมาให้เป็นคุณ{" "}
                    <span className="text-lg font-bold text-black">ใน</span> แอป
                    Apple Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={`!max-w-mg  ${value} !h-102 !rounded-xl`}>
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-102   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt="Apple Watch Studio ที่มีซีรีส์ 9 กำลังแสดงสายที่ให้เลือก ได้แก่ สายแบบ Sport Band สีสตาร์ไลท์, สายแบบ Braided Solo Loop สีน้ำเงินสตอร์มบลู และสายแบบ Sport Loop สีชมพูสว่าง"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-studio-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696271645942"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-studio-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696271645942, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-studio-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696271645942 2x"
              className="rounded-xl w-full h-full "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xl text-black font-bold  pb-2">
                ช่วงเวลาเพิ่มความสุข
              </span>
              <span className="text-base text-gray-700 pb-2">
                เลือกตัวเรือน เลือกสาย เลือกตัวเรือน เลือกสาย เลือกสร้างสรร์
                Apple Watch ในแบบ เฉพาะตัวของพวกเขา
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={`!max-w-mg  ${value} !h-102 !rounded-xl`}>
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-102   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-mac-customize-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698124287919"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-mac-customize-202311_GEO_TH_LANG_TH?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698124287919, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-mac-customize-202311_GEO_TH_LANG_TH?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698124287919 2x"
              className="rounded-xl w-full h-full "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xl text-black font-bold  pb-2">
                ปรับแต่ง Mac ของคุณ
              </span>
              <span className="text-base text-gray-700 pb-2">
                กำหนดสเปคในแบบที่คุณต้องการ เลือกได้ทั้งหน่วยความจำ
                พื้นที่จัดเก็บ กราฟฟิก แม้แต่สีสัน
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={`!max-w-mg  ${value} !h-102 !rounded-xl`}>
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-102   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-specialist-help-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696362492013"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-specialist-help-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696362492013, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-specialist-help-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696362492013 2x"
              className="rounded-xl w-full h-full "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
                APPLE SPECIALIST
              </span>
              <span className="text-xl text-black font-bold  pb-2">
                รับความช่วยเหลือในการหาของขวัญที่ใช่ทั้งที่ร้านหรือทางออนไลน์
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={`!max-w-mg  ${value} !h-102 !rounded-xl`}>
        <Link href={""} className="rounded-xl ">
          <div className=" flex rounded-xl shadow-lg h-102   hover:scale-104 hover:shadow-xl duration-500 ">
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697149577145"
              srcSet="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697149577145, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697149577145 2x"
              className="rounded-xl w-full h-full "
            ></img>
            <div className="z-50 absolute p-10 flex flex-col  w-full">
              <span className="text-xs text-gray-500 pb-2 ">
               TODAY AT APPLE
              </span>
              <span className="text-xl text-black font-bold  pb-2">
                เข้าร่วมเซสซั่นฟรีที่ Apple Store
              </span>
              <span className="text-base text-gray-700 pb-2">
                ดูเพิ่มเติมเกี่ยวกับคุณสมบัติล่าสุดและวิธีทำอะไรๆ ได้มากกว่าเดิมด้วยอุปกรณ์ Apple ของคุณ
              </span>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
