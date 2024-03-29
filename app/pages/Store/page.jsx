import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import SlideLatestProducts from "@/components/SwiperSlide/StorePages/SlideLatestProducts";
import SlideCustomizeProducts from "@/components/SwiperSlide/StorePages/SlideCustomizeProducts";
import SlideCategoryProduct from "@/components/SwiperSlide/StorePages/SlideCategoryProduct";
import SlideHappy from "@/components/SwiperSlide/StorePages/SlideHappy";
import SlideAppleFestival from "@/components/SwiperSlide/StorePages/SlideAppleFestival";
import SlideSurprise from "@/components/SwiperSlide/StorePages/SlideSurprise";
import SlideForStudent from "@/components/SwiperSlide/StorePages/SlideForStudent";

export default function Storepage() {
  return (
    <>
      <main className="bg-gray-100">
        {/* Category Product Contents */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="lg:py-20 py-16 flex justify-between  gap-9 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="hidden max-md:flex  md:flex-col  text-5xl font-bold text-gray-500 md:gap-2 max-lg:text-3xl">
                <span>
                  <span className="text-red-600">ร้านของเรา </span>
                  ช่วงเทศกาลมาถึงแล้วเซอร์ไพรส์ดีๆ รอคุณอยู่
                </span>
              </div>
              <div className="hidden md:flex  flex-col text-5xl font-bold text-gray-500 md:gap-2 max-lg:text-3xl">
                <span>
                  <span className="text-red-600">ร้านของเรา</span>
                  ช่วงเทศกาลมาถึง
                </span>
                <span>แล้วเซอร์ไพรส์ดีๆ รอคุณอยู่</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <img
                    src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202311_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1696434169764"
                    alt=""
                    width={35}
                    height={35}
                  ></img>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold">
                      ต้องการความช่วยเหลือในการช้อปปิ้งใช่มั๊ย
                    </span>
                    <Link
                      href={""}
                      className="text-sm text-blue-800 hover:underline"
                    >
                      ถาม Specialist ได้เลย
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex justify-center ">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 25 35"
                      className="dd-glyph-svg dd-glyph-base"
                      aria-hidden="true"
                      fill="red"
                    >
                      <path d="m0 0h25v35h-25z" fill="none"></path>
                      <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold">
                      แวะไปที่ Apple Store
                    </span>
                    <Link
                      href={""}
                      className="text-sm text-blue-800 flex items-center hover:underline"
                    >
                      ค้นหาร้านที่อยู่ใกล้คุณ <BsChevronRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl overflow-visible w-full">
            <div className=" 2xl:w-4/5 px-7 ">
              <SlideCategoryProduct />
            </div>
          </figure>
        </article>
        {/*End Category Product Contents */}
        {/* Lastest Product Contents */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ผลิตภัณฑ์ล่าสุดของเรา </span>
                  ของขวัญชิ้นพิเศษสำหรับทุกคนพิเศษ
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center ">
          <figure className="max-w-9xl max-lg:px-4  pb-3">
            <div className="">
              <SlideLatestProducts />
            </div>
          </figure>
        </article>
        {/*End Lastest Product Contents */}
        {/* Customize Product Contents */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">
                    ปรับแต่งให้มีความเฉพาะตัว{" "}
                  </span>
                  สร้างความประทับใจแบบไม่ลืมเลือน
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center ">
          <figure className="max-w-9xl w-full   pb-6">
            <div className="">
              <SlideCustomizeProducts />
            </div>
          </figure>
        </article>
        {/*End  Customize Product Contents */}
        {/* Happy give everyone in list Product Contents */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ความสุขเล็กๆ </span>
                  จัดให้ทุกคนในลิสต์ได้ในพริบตา
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center ">
          <figure className="max-w-9xl w-full h-max  pb-3">
            <div className="w-full h-full">
              <SlideHappy />
            </div>
          </figure>
        </article>
        {/*End  Customize Product Contents */}
        {/* Lastest Product Contents */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">เฉพาะที่ Apple </span>
                  ที่ที่สมบูรณ์แบบสำหรับช่วงเทศกาลนี้
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center ">
          <figure className="max-w-9xl w-full h-max pb-3">
            <div className="w-full h-full">
              <SlideAppleFestival />
            </div>
          </figure>
        </article>
        {/*End Lastest Product Contents */}
        {/* Surprise Product Contents */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ประสบการณ์แบบ Apple </span>
                  มีอะไรรอเซอร์ไพรส์อีกเยอะในร้าน
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center ">
          <figure className="max-w-9xl max-lg:px-4  pb-3">
            <div className="">
              <SlideSurprise />
            </div>
          </figure>
        </article>
        {/*End Surprise Product Contents */}
        {/* For Student Product Contents */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold text-gray-500 md:gap-2 ">
                <span>
                  <span className="text-red-600">ร้านพิเศษของเรา </span>
                  ส่วนลดพิเศษสำหรับนักศึกษา นักการศึกษา และนักธุรกิจ
                </span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center ">
          <figure className="max-w-9xl max-lg:px-4 w-full  pb-3">
            <div className="w-full">
              <SlideForStudent />
            </div>
          </figure>
        </article>
        {/*End For Student Product Contents */}
        {/*  Before Footer */}
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className="pt-10 pb-5 flex justify-between  gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <div className="text-2xl font-bold  md:gap-2 ">
                <span>ลิงก์ด่วน</span>
              </div>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-8xl w-full">
            <div className=" pb-5 flex gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <Link
                href={""}
                className="px-5 py-2 bg-gray-200 text-xs rounded-full"
              >
                สถานะคำสั่งซื้อ
              </Link>
              <Link
                href={""}
                className="px-5 py-2 bg-gray-200 text-xs rounded-full"
              >
                บริการช่วยเหลือด้านการซื้อ
              </Link>
              <Link
                href={""}
                className="px-5 py-2 bg-gray-200 text-xs rounded-full"
              >
                การคืนสินค้า
              </Link>
              <Link
                href={""}
                className="px-5 py-2 bg-gray-200 text-xs rounded-full"
              >
                บันทึกของคุณ
              </Link>
            </div>
          </figure>
        </article>
        <article className="flex justify-center w-full">
          <figure className="max-w-7xl w-full">
            <div className="pt-5 text-xs text-gray-500 pb-5 flex gap-4 max-md:flex-col max-lg:px-7 max-2xl:px-7">
              <span>
                ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
                และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท Apple Pencil
                จำหน่ายแยกต่างหาก ⁺ เฉพาะสมาชิกใหม่เท่านั้น ฿139/เดือน
                หลังหมดช่วงทดลองใช้ฟรี
                ข้อเสนอมีให้ในระยะเวลาจำกัดสำหรับสมาชิกใหม่ที่เชื่อมต่ออุปกรณ์ที่เข้าเกณฑ์กับอุปกรณ์
                Apple ที่ใช้ iOS 15 หรือ iPadOS 15 หรือใหม่กว่า
                ข้อเสนอมีระยะเวลา 3 เดือนหลังจับคู่อุปกรณ์ที่เข้าเกณฑ์
                เจ้าของปัจจุบันของอุปกรณ์ที่เข้าเกณฑ์ไม่จำเป็นต้องซื้อผลิตภัณฑ์เสียงเพิ่ม
                แผนบริการจะมีการต่ออายุโดยอัตโนมัติจนกว่าจะยกเลิก
                อาจมีการใช้ข้อจำกัดและ ข้อกำหนด อื่นๆ ***
                ข้อเสนอสามารถใช้ได้กับการซื้อที่มีคุณสมบัติเข้าเกณฑ์สำหรับผลิตภัณฑ์ที่ร่วมรายการของ
                Apple ตั้งแต่วันที่ 24 พฤศจิกายน 2023 จนถึงวันที่ 27 พฤศจิกายน
                2023 ที่ร้านที่ร่วมรายการ
                โดยข้อเสนอขึ้นอยู่กับความพร้อมในการวางจำหน่าย
                จนกว่าผลิตภัณฑ์จะหมด
                การซื้อที่มีคุณสมบัติเข้าเกณฑ์จะได้รับส่วนลดเทียบเท่ากับมูลค่าบัตรของขวัญ
                Apple ที่เข้าเกณฑ์จากราคาของผลิตภัณฑ์ที่ร่วมรายการ
                สินค้าทุกรายการจะมีการเรียกเก็บเงินในขั้นตอนชำระเงิน
                รวมถึงบัตรของขวัญ Apple Store ที่เข้าเกณฑ์ด้วย
                ผลิตภัณฑ์ที่ร่วมรายการที่ซื้อผ่านบริการด้านการเงินที่ร้านที่ร่วมรายการตามที่กำหนด
                อาจจะไม่มีสิทธิ์ได้รับโปรโมชันนี้
                โปรดดูรายละเอียดเพิ่มเติมที่ขั้นตอนการชำระเงิน
                ข้อเสนอนี้ยังไม่สามารถใช้ร่วมกับแผนการซื้อสำหรับพนักงาน Apple
                หรือราคาสำหรับลูกค้าประจำประเภทสถานศึกษาหรือภาคธุรกิจได้
                ทั้งนี้อาจมีข้อกำหนดเพิ่มเติมอีก
                โปรดพิจารณาเงื่อนไขและข้อกำหนดทั้งหมดที่นี่ °
                เฉพาะสมาชิกใหม่และสมาชิกที่กลับมาใช้บริการที่มีคุณสมบัติตรงตามเงื่อนไขเท่านั้น
                ฿249/เดือน หลังหมดช่วงทดลองใช้ฟรี จำกัดหนึ่ง Apple ID
                ต่อหนึ่งข้อเสนอเท่านั้น
                และจำกัดหนึ่งครอบครัวต่อหนึ่งข้อเสนอเท่านั้นหากคุณเป็นสมาชิกในกลุ่มการแชร์กันในครอบครัว
                ไม่ว่าคุณหรือครอบครัวของคุณจะซื้ออุปกรณ์กี่เครื่องก็ตาม
                คุณหรือครอบครัวของคุณจะไม่มีสิทธิ์รับข้อเสนอนี้
                หากเคยรับข้อเสนอใช้งาน Apple TV+ ฟรี 3 เดือน หรือ ฟรี 1
                ปีมาก่อนหน้านี้ ข้อเสนอมีระยะเวลา 3
                เดือนหลังการเปิดใช้งานอุปกรณ์ที่เข้าเกณฑ์
                แผนบริการจะมีการต่ออายุโดยอัตโนมัติจนกว่าจะยกเลิก
                อาจมีข้อจำกัดและ ข้อกำหนดอื่นๆ 1.
                บริการแลกอุปกรณ์ดำเนินการโดยพันธมิตรด้านการแลกอุปกรณ์ของ Apple
                มูลค่าการแลกอุปกรณ์เป็นการประมาณเท่านั้น
                และมูลค่าที่แท้จริงอาจต่ำกว่าที่ประมาณไว้
                มูลค่าการแลกแตกต่างกันไปตามสภาพ ปี
                และรุ่นของอุปกรณ์ที่คุณนำมาแลก
                อุปกรณ์บางเครื่องอาจไม่เข้าเกณฑ์การรับเครดิต
                คุณต้องมีอายุอย่างน้อย 20 ปี
                จึงจะมีคุณสมบัติเข้าเกณฑ์การแลกรับเครดิตหรือบัตรของขวัญ Apple
                Store
                มูลค่าการแลกสามารถนำไปใช้ซื้ออุปกรณ์เครื่องใหม่ที่มึคุณสมบัติเข้าเกณฑ์
                หรือเพิ่มลงในบัตรของขวัญ Apple Store
                มูลค่าจริงที่จ่ายให้นั้นอ้างอิงจากการได้รับอุปกรณ์ที่เข้าเกณฑ์และตรงตามคำอธิบายขณะทำการประเมิน
                ภาษีมูลค่าเพิ่ม (VAT)
                อาจคิดจากมูลค่าเต็มของอุปกรณ์เครื่องใหม่ที่ซื้อ
                การนำอุปกรณ์มาแลกภายในร้านจำเป็นต้องแสดงบัตรประจำตัวที่มีรูปถ่ายซึ่งออกให้โดยรัฐบาลและยังไม่หมดอายุ
                (อาจต้องมีการบันทึกข้อมูลนี้ตามกฎหมายท้องถิ่น)
                ข้อเสนออาจใช้ไม่ได้ในร้านค้าทุกแห่ง
                และยังอาจแตกต่างกันไประหว่างการแลกอุปกรณ์ที่ร้านและทางออนไลน์
                การนำคอมพิวเตอร์มาแลกอาจใช้ไม่ได้ในร้านค้าทุกแห่ง
                ร้านค้าบางแห่งอาจมีข้อกำหนดเพิ่มเติม
                พันธมิตรด้านการแลกอุปกรณ์ของ Apple
                ขอสงวนสิทธิ์ในการปฏิเสธหรือจำกัดจำนวนธุรกรรมการแลกซื้ออุปกรณ์ไม่ว่าจะด้วยเหตุผลใดก็ตาม
                สามารถดูรายละเอียดเพิ่มเติมจาก พันธมิตรด้านการแลกอุปกรณ์ ของ
                Apple สำหรับการแลก และ พันธมิตรด้านการรีไซเคิล
                สำหรับการรีไซเคิลอุปกรณ์ที่มีคุณสมบัติเข้าเกณฑ์
                อาจมีการใช้ข้อกำหนดและข้อจำกัด
                อาจมีการใช้ข้อกำหนดและข้อจำกัดอื่นๆ
                สำหรับอุปกรณ์ที่มีคุณสมบัติเข้าเกณฑ์การรีไซเคิล 2.
                เงื่อนไขสำหรับการผ่อนชำระเงินเป็นระยะเวลา 3 เดือน 6 เดือน และ 10
                เดือน ด้วยอัตราดอกเบี้ย 0% ธนาคารซิตี้แบงก์ ธนาคารไทยพาณิชย์
                จำกัด มหาชน (SCB) ธนาคารกสิกรไทย จำกัด มหาชน (KBank) และ UOB
                มีโครงการรับผ่อนชำระเงินด้วยอัตราดอกเบี้ย 0%
                และจะมีขึ้นในบางช่วงเวลาเท่านั้น โดยดอกเบี้ย 0%
                สำหรับการผ่อนชำระ 3 เดือน 6 เดือน หรือ 10
                เดือนจะมีขึ้นต่อเมื่อซื้อสินค้าที่มีราคามากกว่า 5,000 บาท
                ทั้งนี้ธนาคารเจ้าของบัตรเครดิตเป็นผู้ขอสงวนสิทธิ์ในการพิจารณาอนุมัติการผ่อนชำระค่าสินค้าด้วยอัตราดอกเบี้ย
                0% ที่คุณซื้อทั้งหมด โปรดดูเงื่อนไข ค่าธรรมเนียม
                และค่าบริการอื่นๆ ที่กำหนดไว้ในเว็บไซต์ของ Citi PayLite, SCB,
                KBank หรือ UOB ข้อตกลงและเงื่อนไข
                ข้อเสนอการผ่อนชำระมีให้กับเฉพาะลูกค้า Apple ลูกค้าธุรกิจ
                และลูกค้าเพื่อการศึกษา ที่ใช้บัตรเครดิตเพื่อการบริโภค
                การซื้อสินค้าด้วยบัตร อเมริกัน เอ็กซ์เพรส (AMEX)
                และบัตรเดบิตจะไม่ได้รับสิทธิตามข้อเสนอนี้
                ระบบจะเรียกเก็บเงินจากบัตรของคุณในช่วงเย็นของวันที่คุณทำการสั่งซื้อ
                อนึ่งข้อเสนอเหล่านี้ใช้บังคับไปถึงการซื้อสินค้าผ่านโครงการซื้อสินค้าของลูกจ้าง
                (Employee Purchase Program) และการซื้อสินค้ามือสองด้วย
                เจ้าหน้าที่ Apple ไม่มีหน้าที่ในการชี้แจงเหตุผลใดๆ
                ในกรณีที่ธนาคารเจ้าของบัตรเครดิตไม่อนุมัติการสั่งซื้อสินค้าดังกล่าว
                หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับการผ่อนชำระค่าสินค้า
                กรุณาติดต่อสอบถามไปยังธนาคารเจ้าของบัตรเครดิตของท่าน
                ธนาคารกรุงไทย จำกัด (มหาชน) ธนาคารกรุงเทพ จำกัด (มหาชน)
                ธนาคารกรุงศรีอยุธยา จำกัด (มหาชน) และธนาคารธนชาต จำกัด (มหาชน)
                อาจเรียกเก็บดอกเบี้ยสำหรับการผ่อนชำระค่าสินค้าเป็นรายงวดผ่านบัตรของธนาคารดังกล่าว
                ค่าธรรมเนียมทางการเงินที่เกี่ยวข้องจะเป็นไปตามที่ปรากฏในใบแจ้งยอดค่าใช้จ่ายผ่านบัตร
                อนึ่งข้อเสนอนี้อยู่ภายใต้ราคาที่โฆษณา
                หรือราคาที่แสดงอยู่ที่สินค้า
                ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
                จัดส่งฟรีสำหรับทุกยอดสั่งซื้อ ข้อมูลนี้เป็นข้อมูลล่าสุด ณ วันที่
                16 เมษายน 2021 ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
                และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท 3.
                ราคาพิเศษสำหรับลูกค้าที่มีคุณสมบัติตรงตามเงื่อนไข
                หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับเกณฑ์คุณสมบัติในการเลือกซื้อสินค้าราคาพิเศษ
                แวะมาที่ร้านเพื่อพูดคุยกับ Specialist ของ Apple หรือโทรหาเราที่
                1800-01-9209 ** ราคาที่แสดงเป็นของ MacBook Pro พร้อมชิป M3
              </span>
            </div>
          </figure>
        </article>
        {/*  End Before Footer*/}
      </main>
    </>
  );
}
