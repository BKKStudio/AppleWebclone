import Link from "next/link";
import {
  BsApple,
  BsSearch,
  BsBag,
  BsArrowRight,
  BsChevronRight,
} from "react-icons/bs";
export default function Footer() {
  return (
    <div className="w-full h-screen bg-gray-100  flex justify-center">
      <div className="max-w-7xl max-xl:px-7  mb-2 gap-5 w-full">
        <div className="w-full bg-gray-300 h-0.5 mt-4"></div>
        <span className="text-xs w-full  flex pt-4 gap-2 items-center text-gray-600">
          <Link href={""}>
            <BsApple size={12} />
          </Link>
          <BsChevronRight size={12} />
          <span>Apple Store Online</span>
        </span>
        <div className="max-lg:hidden mt-3 grid grid-cols-5 w-full text-xs">
          <div className="flex flex-col gap-2">
            <span className="font-bold">เลือกซื้อและเรียนรู้</span>
            <Link href={""} className="text-gray-500 hover:underline">
              ร้าน
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Mac
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              iPad
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              iPhone
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Watch
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              AirPods
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Tv และบ้าน
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              AirTag
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              อุปกรณ์เสริม
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              บัตรของขวัญ
            </Link>
            <span className="font-bold">กระเป๋าสตางค์ Apple</span>
            <Link href={""} className="text-gray-500 hover:underline">
              กระเป๋าสตางค์
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">บัญชี</span>
            <Link href={""} className="text-gray-500 hover:underline">
              จัดการกับ Apple ID ของคุณ
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              บัญชีสำหรับ Apple Store
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              iCloud.com
            </Link>
            <span className="font-bold">ความบันเทิง</span>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple One
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple Tv+
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple Music
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple Arcade
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple Podcasts
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple Books
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple Store
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Apple Store</span>
            <Link href={""} className="text-gray-500 hover:underline">
              ค้นหาร้าน
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Genius Bar
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Today at Apple
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              แอป Apple Store
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple Trade In
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              บริการด้านการเงิน
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              โครงสร้างรีไซเคิลของ Apple
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              สถานะคำสั่งซื้อ
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              บริการช่วยเหลือด้านการซื้อ
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">สำหรับธุรกิจ</span>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple กับธุรกิจ
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              เลือกซื้อสินค้าสำหรับธุรกิจของคุณ
            </Link>
            <span className="font-bold">สำหรับการศึกษา</span>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple กับการศึกษา
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              เลือกซื้อสินค้าสำหรับมหาวิทยาลัย
            </Link>
            <span className="font-bold">สำหรับการดูแลสุขภาพ</span>
            <Link href={""} className="text-gray-500 hover:underline">
              Apple กับการดูแลสุขภาพ
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">ค่านิยมของ Apple</span>
            <Link href={""} className="text-gray-500 hover:underline">
              การช่วยการเข้าถึง
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              สิ่งแวดล้อม
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              ความเป็นส่วนตัว
            </Link>
            <Link href={""}>ความรับผิดชอบของซัพพลายเออร์</Link>
            <span className="font-bold">เกี่ยวกับ Apple</span>
            <Link href={""} className="text-gray-500 hover:underline">
              Newsroom
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              ผู้บริหาร Apple
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              ร่วมงานกับเรา
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              นักลงทุน
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              จริยธรรมและการปฎิบัติตาม
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              กิจกรรม
            </Link>
            <Link href={""} className="text-gray-500 hover:underline">
              ติดต่อ Apple
            </Link>
          </div>
        </div>
        {/* Responsive Footer */}
        <div className="lg:hidden text-gray-500">
          <div className="mt-3 flex flex-col gap-3 w-full text-xs">
            <div className="flex flex-col gap-4">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">เลือกซื้อและเรียนรู้</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">กระเป๋าสตางค์ Apple</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">บัญชี</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">ความบันเทิง</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">Apple Store</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">สำหรับธุรกิจ</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">สำหรับการศึกษา</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">สำหรับการดูแลสุขภาพ</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">ค่านิยมของ Apple</span>
                <span className="font-bold">+</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-300 h-0.5 "></div>
              <div className="flex justify-between w-full">
                <span className="">เกี่ยวกับ Apple</span>
                <span className="font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
        {/*End Responsive Footer */}
        <div className="mt-4">
          <span className="w-full text-xs pt-5 text-gray-500">
            อีกหลากหลายวิธีในการเลือกซื้อ{" "}
            <Link href={""} className="text-blue-500 underline">
              ค้นหาร้าน Apple Store
            </Link>{" "}
            หรือ{" "}
            <Link href={""} className="text-blue-500 underline">
              ร้านค้าอื่นๆ
            </Link>{" "}
            ใกล้คุณ หรือ โทร 1800-01-9209
          </span>
        </div>
        <div className="w-full bg-gray-300 h-0.5 mt-4"></div>
        <div className="w-full flex  justify-between text-xs py-2">
          <span className="text-gray-500">
            Copyright © 2023 Apple Inc. สงวนสิทธิ์ทุกประการ
          </span>
          <span className="text-gray-500">
            <Link href={""} className="text-gray-500 hover:underline">
              ไทย
            </Link>{" "}
            |{" "}
            <Link href={""} className="text-gray-500 hover:underline">
              English
            </Link>
          </span>
        </div>
        <div className="text-xs">
          {" "}
          <span className="text-gray-500">
            <Link href={""} className="text-gray-500 hover:underline">
              นโยบายความเป็นส่วนตัว
            </Link>{" "}
            |{" "}
            <Link href={""} className="text-gray-500 hover:underline">
              ข้อกำหนดการใช้งาน
            </Link>
            |{" "}
            <Link href={""} className="text-gray-500 hover:underline">
              การขายและการคืนเงิน
            </Link>
            |{" "}
            <Link href={""} className="text-gray-500 hover:underline">
              ข้อมูลทางกฎหมาย
            </Link>
            |{" "}
            <Link href={""} className="text-gray-500 hover:underline">
              แผนผังเว็บไซต์
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
