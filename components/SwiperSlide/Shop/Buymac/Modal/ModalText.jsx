import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import React, { Children, useState } from "react";
import { BsXLg } from "react-icons/bs";
import SlideProduct from "./SlideProduct";
import SlideTextModal from "./SlideTextModal";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function ModalText({
  ModalOpen,
  setModalOpen,
  Clickset,
  setClickset,
  thumnailImg,
  setThumnailImg,
  idxthumnail,
  setidxthumnail,
  Colorproduct,
  setColorProduct,
}) {
  const [valueX3, setValueX3] = useState(0);

  const HandleNext = () => {
    setValueX3((prev) => prev + 100);
    if (thumnailImg.length > 0) {
      if (valueX3 >= idxthumnail) {
        setValueX3(idxthumnail);
      }
    }
  };
  const HandlePrev = () => {
    setValueX3((prev) => prev - 100);
    if (valueX3 <= 0) {
      setValueX3(0);
    }
  };
  return (
    <React.Fragment>
      {/* //BackDrop */}
      <div
        className={`fixed w-full  h-screen overflow-auto inset-0 z-110 flex justify-center  transition-colors ${
          ModalOpen ? "visible bg-black/90" : "invisible"
        }`}
      >
        {/* Modal */}
        <div
          className={`max-w-5xl w-full h-screen  transition-all mt-8  flex flex-col gap-8 ${
            ModalOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="flex">
            <button
              className="p-3 rounded-full bg-white"
              onClick={() => {
                setModalOpen(false);
                setThumnailImg([]);
              }}
            >
              <BsXLg />
            </button>
          </div>
          <div className="w-full bg-white  rounded-3xl p-1">
            <SlideTextModal
              Clickset={Clickset}
              setClickset={setClickset}
              setThumnailImg={setThumnailImg}
              Colorproduct={Colorproduct}
              setColorProduct={setColorProduct}
              setidxthumnail={setidxthumnail}
            />
          </div>
          <div>
            <div className="w-full grid lg:grid-cols-2 items-center  bg-white rounded-t-xl py-12 pl-10 lg:pr-24 pr-10">
              <div className="w-full flex flex-col overflow-hidden relative justify-center  ">
                <div className=" w-full h-full z-110 absolute pb-36   flex  justify-between">
                  <div className={` p-2 h-full  flex items-center text-3xl`}>
                    <BsChevronLeft
                      className={`cursor-pointer   ${
                        valueX3 <= 0
                          ? "duration-1000 opacity-0"
                          : "duration-1000 opacity-100 "
                      }`}
                      onClick={HandlePrev}
                    />
                  </div>
                  <div className={` p-2 h-full flex items-center text-3xl`}>
                    <BsChevronRight
                      className={`cursor-pointer  ${
                        valueX3 >= idxthumnail
                          ? "duration-1000 opacity-0"
                          : "duration-1000 opacity-100 "
                      }`}
                      onClick={HandleNext}
                    />
                  </div>
                </div>
                <div className="  w-full h-full relative    ">
                  <SlideProduct
                    valueX3={valueX3}
                    thumnailImg={thumnailImg}
                    setThumnailImg={setThumnailImg}
                  />
                </div>
                <div className=" w-full h-full z-110  py-2   flex items-end gap-4 justify-center">
                  {thumnailImg.map((data, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        valueX3 === data.idx ? "bg-gray-700" : "bg-gray-400"
                      }`}
                      onClick={() => {
                        setValueX3(data.idx);
                      }}
                    ></button>
                  ))}
                </div>
                <div className="py-12 flex   relative flex-col  items-center gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-600">
                      มีให้เลือก {Colorproduct.length} สี
                    </span>
                    <div className="flex gap-1">
                      {Colorproduct.map((data, index) => (
                        <img
                          src={data.text}
                          alt={data.desc}
                          key={index}
                          width={12}
                          height={12}
                        ></img>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-3xl font-bold">
                  MacBook Air <br /> รุ่น 13 นิ้ว พร้อมชิป M1
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-base text-gray-700">
                    เริ่มต้นที่ ฿34,900
                  </span>
                  <span className="px-4 py-1 bg-blue-600 rounded-full text-white">
                    ซื้อ
                  </span>
                </div>
                <div className="w-full flex flex-col pt-6 gap-2">
                  <div className="w-full flex items-center gap-2 py-3">
                    <svg
                      height="45"
                      viewBox="0 0 35 35"
                      width="45"
                      className="as-svgicon"
                      aria-hidden="true"
                      role="img"
                    >
                      <path d="m0 0h35v35h-35z" fill="none"></path>
                      <path d="m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.6562 8.0908a1.4863 1.4863 0 0 1 .9912-.5166.7251.7251 0 0 1 .0127.1367 1.5243 1.5243 0 0 1 -.3545.9434 1.3167 1.3167 0 0 1 -.919.4834.5255.5255 0 0 1 -.09-.0088.6771.6771 0 0 1 -.0127-.124 1.4632 1.4632 0 0 1 .3723-.9141zm1.9394 5.4131c-.2861.4141-.59.833-1.0508.833s-.581-.2685-1.1064-.2685c-.5215 0-.71.2773-1.1289.2773s-.7129-.3848-1.0508-.8594a4.1836 4.1836 0 0 1 -.709-2.247 1.8136 1.8136 0 0 1 1.7-2.0118c.4443 0 .82.294 1.1025.294.2647 0 .68-.3115 1.1924-.3115a1.5863 1.5863 0 0 1 1.3408.6748 1.5293 1.5293 0 0 0 -.73 1.2861 1.4937 1.4937 0 0 0 .9062 1.3721 3.5765 3.5765 0 0 1 -.466.9609zm6.5361.752h-.92v-3.3565h-.0683l-1.2637 3.3565h-.6465l-1.2647-3.3565h-.0683v3.3565h-.919v-4.9317h1.1817l1.3642 3.6094h.0616l1.36-3.6094h1.1826zm3.0547 0h-1.0312v-3.958h-.0628l-1.209.8408v-.93l1.2744-.8848h1.0286z"></path>
                    </svg>
                    <span className="text-base font-semibold">
                      ชิป Apple M1 มาพร้อมประสิทธิภาพด้าน CPU, GPU <br />{" "}
                      และการเรียนรู้ของระบบที่ทรงพลัง
                    </span>
                  </div>
                  <div
                    className="w-full h-px  rounde-full
                bg-gray-600"
                  ></div>
                  <div className="w-full flex items-center gap-2 py-3">
                    <svg
                      className="as-svgicon"
                      aria-hidden="true"
                      role="img"
                      height="45"
                      viewBox="0 0 35 35"
                      width="45"
                    >
                      <rect width="35" height="35" fill="none"></rect>
                      <path d="M27,14.5v6A2.5,2.5,0,0,1,24.5,23H7.5A2.5,2.5,0,0,1,5,20.5v-6A2.5,2.5,0,0,1,7.5,12h17A2.5,2.5,0,0,1,27,14.5Zm2,0v6A4.505,4.505,0,0,1,24.5,25H7.5A4.505,4.505,0,0,1,3,20.5v-6A4.505,4.505,0,0,1,7.5,10h17A4.505,4.505,0,0,1,29,14.5Zm-1,0A3.5,3.5,0,0,0,24.5,11H7.5A3.5,3.5,0,0,0,4,14.5v6A3.5,3.5,0,0,0,7.5,24h17A3.5,3.5,0,0,0,28,20.5ZM30,20a2.562,2.562,0,0,0,0-5Z"></path>
                    </svg>
                    <span className="text-base font-semibold">
                      แบตเตอรี่ใช้งานได้นานสูงสุด 18 ชั่วโมง คุณจึงใช้งาน
                      <br />
                      ได้นานกว่าที่เคยFootnote1
                    </span>
                  </div>
                  <div
                    className="w-full h-px  rounde-full
                bg-gray-600"
                  ></div>
                  <div className="w-full flex items-center gap-2 py-3">
                    <svg
                      height="45"
                      viewBox="0 0 35 35"
                      width="45"
                      className="as-svgicon"
                      aria-hidden="true"
                      role="img"
                    >
                      <path d="m0 0h35v35h-35z" fill="none"></path>
                      <path d="m29 7.5v7.5068a.5.5 0 0 1 -1 0v-7.3l-8.6445 8.6451a.5.5 0 0 1 -.7071-.7071l8.6441-8.6448h-7.2993a.5.5 0 0 1 0-1h7.5068a1.5017 1.5017 0 0 1 1.5 1.5zm-13.3555 11.1484-8.6445 8.6451v-7.3a.5.5 0 0 0 -1 0v7.5065a1.5017 1.5017 0 0 0 1.5 1.5h7.5068a.5.5 0 0 0 0-1h-7.2993l8.6441-8.6445a.5.5 0 0 0 -.7071-.7071z"></path>
                    </svg>
                    <span className="text-base font-semibold">
                      จอภาพ Retina ที่มาพร้อมสีสันอันสวยสดพร้อมราย
                      <br />
                      ละเอียดอันน่าทึ่ง
                    </span>
                  </div>
                  <div
                    className="w-full h-px  rounde-full
                bg-gray-600"
                  ></div>
                  <div className="w-full flex items-center gap-2 py-3">
                    <svg
                      height="45"
                      viewBox="0 0 35 35"
                      width="45"
                      className="as-svgicon"
                      aria-hidden="true"
                      role="img"
                    >
                      <path d="m0 0h35v35h-35z" fill="none"></path>
                      <path d="m21.8 4.1138-.0095.0248-3.8665 10.0957-.52 1.3577h1.4538l7.2.0027c-.0161.0244-.0359.0522-.0606.0834l-11.8059 15.1827c-.0124.0167-.0244.0315-.0356.0448l.0168-.0464 3.8675-10.0827.521-1.3581h-1.4551l-7.2083-.0022a1.1551 1.1551 0 0 1 .0689-.0965l11.8061-15.17zm.144-1.1138a1.12 1.12 0 0 0 -.2766.0365 1.28 1.28 0 0 0 -.6946.5126l-11.7954 15.1564a1.3552 1.3552 0 0 0 -.3374.8305.843.843 0 0 0 .26.6294.9246.9246 0 0 0 .6748.253h7.3316l-3.867 10.0827a1.2746 1.2746 0 0 0 -.0715.8695.886.886 0 0 0 .4348.5253.9149.9149 0 0 0 .429.1041 1.1527 1.1527 0 0 0 .2656-.0325 1.2489 1.2489 0 0 0 .6941-.5061l11.7954-15.17a1.3563 1.3563 0 0 0 .3374-.83.8233.8233 0 0 0 -.2595-.6228.94.94 0 0 0 -.6748-.2466h-7.3321l3.867-10.0957a1.2509 1.2509 0 0 0 .071-.8629.8794.8794 0 0 0 -.8518-.6334z"></path>
                    </svg>
                    <span className="text-base font-semibold">
                      ตัวจัดเก็บข้อมูลแบบ SSD ที่เร็วแบบสุดขั้วให้คุณเปิด
                      <br />
                      แอปและไฟล์ได้ในพริบตา
                    </span>
                  </div>
                  <div
                    className="w-full h-px  rounde-full
                bg-gray-600"
                  ></div>
                  <div className="w-full flex items-center gap-2 py-3">
                    <svg
                      height="45"
                      viewBox="0 0 35 35"
                      width="45"
                      className="as-svgicon"
                      aria-hidden="true"
                      role="img"
                    >
                      <path d="m0 0h35v35h-35z" fill="none"></path>
                      <path d="m27.5 22.4912a.5.5 0 0 1 -.5-.5v-9a.5.5 0 0 1 1 0v9a.5.5 0 0 1 -.5.5zm-3.5 5.1338v-20.25a.5.5 0 0 0 -1 0v20.25a.5.5 0 0 0 1 0zm-4-3.125v-14a.5.5 0 0 0 -1 0v14a.5.5 0 0 0 1 0zm-4 7v-28a.4961.4961 0 1 0 -.9922 0v28a.4961.4961 0 1 0 .9922 0zm-4-6v-16a.5.5 0 0 0 -1 0v16a.5.5 0 0 0 1 0zm-4-4.75v-6.5a.5.5 0 0 0 -1 0v6.5a.5.5 0 0 0 1 0z"></path>
                    </svg>
                    <span className="text-base font-semibold">
                      ดีไซน์แบบไม่มีพัดลมเพื่อการทำงานที่เงียบสนิท
                    </span>
                  </div>
                  <Link
                    href={""}
                    className="text-blue-500 flex items-center gap-1 hover:underline"
                  >
                    สำรวจ MacBook Air พร้อมชิป M1 เพิ่มเติม <BsChevronRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 grid grid-cols-3 pr-16 rounded-b-lg">
              <div className="w-full flex justify-center items-center py-5">
                <div className="flex  gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 42 56"
                    className="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated"
                    aria-hidden="true"
                    role="img"
                    width="22"
                    height="36"
                  >
                    <g>
                      <rect width="42" height="56" fill="none"></rect>
                      <path
                        d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
                        fill="#6cca4e"
                      ></path>
                    </g>
                  </svg>
                  <div className="flex flex-col pt-1">
                    <span className="text-base font-bold">
                      บริการด้านการเงิน
                    </span>
                    <span className="text-xs ">มีบริการผ่อนชำระ 0%*</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center py-5">
                <div className="flex  gap-2">
                  <svg
                    viewBox="0 0 43 56"
                    xmlns="http://www.w3.org/2000/svg"
                    className="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated"
                    aria-hidden="true"
                    role="img"
                    width="22"
                    height="36"
                  >
                    <path d="m0 0h43v56h-43z" fill="none"></path>
                    <path
                      d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"
                      fill="#ab45fb"
                    ></path>
                    <path
                      d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"
                      fill="#ab45fb"
                    ></path>
                    <path
                      d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"
                      fill="#ab45fb"
                    ></path>
                    <path
                      d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"
                      fill="#ab45fb"
                    ></path>
                  </svg>
                  <div className="flex flex-col pt-1">
                    <span className="text-base font-bold">Apple Trade In</span>
                    <span className="text-xs ">
                      แลกซื้อด้วยอุปกรณ์ที่เข้าเกณฑ์ของคุณ แล้วรับ <br />
                      เครดิตสำหรับใช้ซื้อชิ้นต่อไป**
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center py-5">
                <div className="flex  gap-2">
                  <svg
                    className="as-svgicon"
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                  >
                    <g id="b">
                      <rect id="c" width="26" height="25" fill="none"></rect>
                      <path
                        id="d"
                        d="M9.375,20.5c0,.1761,.0361,.3428,.092,.5h-1.717c-.2764,0-.5-.2236-.5-.5s.2236-.5,.5-.5h.25v-2H2.25c-1.2427,0-2.25-1.0074-2.25-2.25V6.25c0-1.2427,1.0073-2.25,2.25-2.25h15.5c1.2427,0,2.25,1.0073,2.25,2.25v4.75h-1V6c0-.5523-.4478-1-1-1H2c-.5522,0-1,.4477-1,1V14.25c0,.4142,.3359,.75,.75,.75H11v4h-.125c-.8271,0-1.5,.6729-1.5,1.5Zm16.25,0c0,.2764-.2236,.5-.5,.5H10.875c-.2764,0-.5-.2236-.5-.5s.2236-.5,.5-.5h1.125v-6.25c0-.9665,.7834-1.75,1.75-1.75h8.5c.9666,0,1.75,.7835,1.75,1.75v6.25h1.125c.2764,0,.5,.2236,.5,.5Zm-2.625-6.75c0-.4136-.3364-.75-.75-.75H13.75c-.4136,0-.75,.3364-.75,.75v6.25h10v-6.25Z"
                        fill="#06c"
                      ></path>
                    </g>
                  </svg>
                  <div className="flex flex-col pt-1">
                    <span className="text-base font-bold">
                      สร้างสรรค์ Mac ในแบบที่คุณต้องการ
                    </span>
                    <span className="text-xs ">
                      ปรับแต่งอะไรๆ บน Mac เครื่องใหม่ของคุณได้แทบ
                      <br />
                      ทุกอย่าง
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="text-xs text-white">
              * เงื่อนไขสำหรับการผ่อนชำระเงินเป็นระยะเวลา 3 เดือน 6 เดือน และ 10
              เดือน ด้วยอัตราดอกเบี้ย 0% ธนาคารซิตี้แบงก์ ธนาคารไทยพาณิชย์ จำกัด
              มหาชน (SCB) ธนาคารกสิกรไทย จำกัด มหาชน (KBank) และ UOB
              มีโครงการรับผ่อนชำระเงินด้วยอัตราดอกเบี้ย 0%
              และจะมีขึ้นในบางช่วงเวลาเท่านั้น โดยดอกเบี้ย 0% สำหรับการผ่อนชำระ
              3 เดือน 6 เดือน หรือ 10
              เดือนจะมีขึ้นต่อเมื่อซื้อสินค้าที่มีราคามากกว่า 5,000 บาท
              ทั้งนี้ธนาคารเจ้าของบัตรเครดิตเป็นผู้ขอสงวนสิทธิ์ในการพิจารณาอนุมัติการผ่อนชำระค่าสินค้าด้วยอัตราดอกเบี้ย
              0% ที่คุณซื้อทั้งหมด โปรดดูเงื่อนไข ค่าธรรมเนียม และค่าบริการอื่นๆ
              ที่กำหนดไว้ในเว็บไซต์ของ{" "}
              <Link href={""} className="text-blue-500 hover:underline">
                Citi PayLite
              </Link>
              ,
              <Link href={""} className="text-blue-500 hover:underline">
                SCB
              </Link>
              ,
              <Link href={""} className="text-blue-500 hover:underline">
                KBank
              </Link>{" "}
              หรือ{" "}
              <Link href={""} className="text-blue-500 hover:underline">
                UOB
              </Link>
            </div>
            <div className="text-xs text-white flex flex-col">
              <span className="font-bold">ข้อตกลงและเงื่อนไข</span>
              ข้อเสนอการผ่อนชำระมีให้กับเฉพาะลูกค้า Apple ลูกค้าธุรกิจ
              และลูกค้าเพื่อการศึกษา ที่ใช้บัตรเครดิตเพื่อการบริโภค
              การซื้อสินค้าด้วยบัตร อเมริกัน เอ็กซ์เพรส (AMEX)
              และบัตรเดบิตจะไม่ได้รับสิทธิตามข้อเสนอนี้
              ระบบจะเรียกเก็บเงินจากบัตรของคุณในช่วงเย็นของวันที่คุณทำการสั่งซื้อ
              อนึ่งข้อเสนอเหล่านี้ใช้บังคับไปถึงการซื้อสินค้าผ่านโครงการซื้อสินค้าของลูกจ้าง
              (Employee Purchase Program) และการซื้อสินค้ามือสองด้วย เจ้าหน้าที่
              Apple ไม่มีหน้าที่ในการชี้แจงเหตุผลใดๆ
              ในกรณีที่ธนาคารเจ้าของบัตรเครดิตไม่อนุมัติการสั่งซื้อสินค้าดังกล่าว
              หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับการผ่อนชำระค่าสินค้า
              กรุณาติดต่อสอบถามไปยังธนาคารเจ้าของบัตรเครดิตของท่าน ธนาคารกรุงไทย
              จำกัด (มหาชน) ธนาคารกรุงเทพ จำกัด (มหาชน) ธนาคารกรุงศรีอยุธยา
              จำกัด (มหาชน) และธนาคารธนชาต จำกัด (มหาชน)
              อาจเรียกเก็บดอกเบี้ยสำหรับการผ่อนชำระค่าสินค้าเป็นรายงวดผ่านบัตรของธนาคารดังกล่าว
              ค่าธรรมเนียมทางการเงินที่เกี่ยวข้องจะเป็นไปตามที่ปรากฏในใบแจ้งยอดค่าใช้จ่ายผ่านบัตร
              อนึ่งข้อเสนอนี้อยู่ภายใต้ราคาที่โฆษณา หรือราคาที่แสดงอยู่ที่สินค้า
              ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
              จัดส่งฟรีสำหรับทุกยอดสั่งซื้อ ข้อมูลนี้เป็นข้อมูลล่าสุด ณ วันที่
              16 เมษายน 2021 รา
            </div>
            <div className="text-xs text-white flex flex-col">
              <span className="font-bold">
                คาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
                และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท
              </span>
              **บริการแลกอุปกรณ์ดำเนินการโดยพันธมิตรด้านการแลกอุปกรณ์ของ Apple
              มูลค่าการแลกอุปกรณ์เป็นการประมาณเท่านั้น
              และมูลค่าที่แท้จริงอาจต่ำกว่าที่ประมาณไว้
              มูลค่าการแลกแตกต่างกันไปตามสภาพ ปี และรุ่นของอุปกรณ์ที่คุณนำมาแลก
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
              ร้านค้าบางแห่งอาจมีข้อกำหนดเพิ่มเติม พันธมิตรด้านการแลกอุปกรณ์ของ
              Apple
              ขอสงวนสิทธิ์ในการปฏิเสธหรือจำกัดจำนวนธุรกรรมการแลกซื้ออุปกรณ์ไม่ว่าจะด้วยเหตุผลใดก็ตาม
              สามารถดูรายละเอียดเพิ่มเติมจาก พันธมิตรด้านการแลกอุปกรณ์ ของ Apple
              สำหรับการแลก และ พันธมิตรด้านการรีไซเคิล
              สำหรับการรีไซเคิลอุปกรณ์ที่มีคุณสมบัติเข้าเกณฑ์
              อาจมีการใช้ข้อกำหนดและข้อจำกัด อาจมีการใช้ข้อกำหนดและข้อจำกัดอื่นๆ
              สำหรับอุปกรณ์ที่มีคุณสมบัติเข้าเกณฑ์การรีไซเคิล
            </div>
            <div className="text-xs text-white flex flex-col">
              1. Apple ทำการทดสอบในเดือนตุลาคม 2020 โดยใช้ระบบของ MacBook Air
              รุ่นก่อนการผลิตจริงที่มีชิพ Apple M1 และ GPU แบบ 8-core
              ซึ่งติดตั้ง RAM ขนาด 8GB และ SSD ความจุ 512GB
              การทดสอบการเล่นภาพยนตร์ในแอพ Apple TV
              วัดระยะเวลาการใช้งานของแบตเตอรี่โดยการเล่นภาพยนตร์ HD 1080p
              ขณะตั้งค่าความสว่างหน้าจออยู่ในระดับที่ 8 จากล่างสุด
              ระยะเวลาการใช้งานแบตเตอรี่แตกต่างกันไปตามการใช้งานและการกำหนดค่า
              ดูข้อมูลเพิ่มเติมได้ที่{" "}
              <Link href={""} className="text-blue-500 hover:underline">
                apple.com/th/batteries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
