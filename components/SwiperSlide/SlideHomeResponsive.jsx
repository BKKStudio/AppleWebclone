"use client";
import React, { useEffect, useState } from "react";
import { BsPauseFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import BtnunderSlide from "../BtnSlideLoop/BtnUnder";
import CarouselMobile from "../Slideloop/CarouselMobile";

const SlideHomeResponsive = () => {
  const [valueX2, setValueX2] = useState(100);
  const [cards, setCards] = useState([
    {
      idx: 0,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b3/fa/77/b3fa7718-b692-ca56-87ce-5af818a447f7/955d54ab-6986-4e68-981d-b11df46a0029.png/548x1186.jpg",
      catagories: "คลกเบาสมอง",
      desc: "หัวใจดีๆกลับมาอีกครั้ง",
      active: "false",
    },
    {
      idx: 1,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/70/36/e0/7036e04c-845f-61d1-bfb7-26334074376a/b0eae62f-8ea4-4883-8f26-245eb2f13e7f.png/548x1186.jpg",
      catagories: "ผจญภัย",
      desc: "บางความลับใหญ่เกินจะปกปิด",
      active: "true",
    },
    {
      idx: 2,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/c0/11/15/c0111558-3dd9-6fbe-705b-0afec6323294/6be3427d-8d09-4897-839f-5e93924496db.png/548x1186.jpg",
      catagories: "ตลกเบาสมอง",
      desc: "โร้ดทริปสุดฮาที่พาความตื่นเต้นเต็มพิกัด",
      active: "false",
    },
    {
      idx: 3,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/c8/7c/e0/c87ce004-c510-a128-9fae-ebe04c1d27bd/eeee2e40-1096-45e5-b78b-d6f73ed4db9b.png/548x1186.jpg",
      catagories: "ระทึกขวัญ",
      desc: "เปิดศึกสายลับปะทะสายลับ",
      active: "false",
    },
    {
      idx: 4,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/27/70/4a/27704afa-feb6-8ed8-9d0e-9d4f3536de2a/d404c65c-cb7e-481b-8ecd-846293327946.png/548x1186.jpg",
      catagories: "ดราม่า",
      desc: "รายการต่อไป พบกับความเปลี่ยนแปลง",
      active: "false",
    },
    {
      idx: 5,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/94/5f/1d/945f1d65-7665-7a01-aeec-23b5c26683d3/18a76c94-6d70-42d0-ae57-51ef7a2919c7.png/548x1186.jpg",
      catagories: "ดราม่า",
      desc: "ชีวิตไม่มีสูตรตายตัว",
      active: "false",
    },
    {
      idx: 6,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/fb/d7/5c/fbd75ca7-202f-80a1-3c0b-9df0be06f149/0a730dbf-3922-48fb-9357-f1bcf20c16c8.png/548x1186.jpg",
      catagories: "ดราม่า",
      desc: "เปิดฉากการแสวงโชคครั้งใหม่",
      active: "false",
    },
    {
      idx: 7,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/a7/51/8e/a7518ec9-23f6-be31-15dd-2245e33693b8/3c302c25-11fd-454e-9ac7-ef61ae3fa42c.png/548x1186.jpg",
      catagories: "ดราม่า",
      desc: "ยศถาที่เธอมองหากับเงินตราที่เขาต้องการ",
      active: "false",
    },
    {
      idx: 8,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/82/ec/dc/82ecdcfe-bddf-84e3-a274-71196d67f86b/e9cb19c8-70f2-4ea1-b2f5-db93e9994479.png/548x1186.jpg",
      catagories: "เทศกาลวันหยุด",
      desc: "คริสต์มาสหรรษารวมดาราอลังการ!",
      active: "false",
    },
    {
      idx: 9,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/48/53/dd/4853dd2e-2a74-cc54-1c3f-8cdf76c256b4/04d928bf-7b9a-481a-b4e0-17341c9e8fa2.png/548x1186.jpg",
      catagories: "ระทึกขวัญ",
      desc: "พบเล่ห์เหลี่ยมแยบยลที่ทำให้คนร้ายตายใจ",
      active: "false",
    },
    {
      idx: 10,
      text: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b3/fa/77/b3fa7718-b692-ca56-87ce-5af818a447f7/955d54ab-6986-4e68-981d-b11df46a0029.png/548x1186.jpg",
      catagories: "คลกเบาสมอง",
      desc: "หัวใจดีๆกลับมาอีกครั้ง",
      active: "false",
    },
  ]);
  const [DataImg, setDataImg] = useState(cards.slice(0, 11));
  const [NextIndex, setNextIndex] = useState(2);
  const [PosIndex, setPosIndex] = useState(0);
  const [StatusStop, setStatusStop] = useState(false);
  const interval1 = 4000;
  const DataSet = cards.slice(1, 11);

  useEffect(() => {
    if (StatusStop === false) {
      const intervalId1 = setInterval(() => {
        setValueX2((prevValue) => prevValue + 100);
        setDataImg((prevData) =>
          prevData.map((item, index) => ({
            ...item,
            active: index === NextIndex ? "true" : "false", // Set the second element to 'true', rest to 'false'
          }))
        );

        setNextIndex((prevNext) => prevNext + 1);
        //ตำแหน่งปัจจุบัน ที่ต้องเพิ่มค่า
        setPosIndex((prevNext) => prevNext + 1);

        if (PosIndex === 8) {
          DataImg.push(...DataSet);
        } else if (PosIndex === 9) {
          setPosIndex(0);
        }
      }, interval1);
      return () => clearInterval(intervalId1);
    }
  }, [PosIndex, DataImg, StatusStop]);
  const HandleStop = () => {
    setStatusStop(!StatusStop);
  };

  return (
    <>
      <style>{`
    .animation-slide2 {
      transform: translateX(-${valueX2}%);
    }
  `}</style>
      <div className="bg-white w-full px-12 pt-3   justify-center   relative">
        <div className=" flex">
          <div
            className={`max-w-72 w-full h-full animation-slide2 duration-1000  ease-in-out`}
          >
            <CarouselMobile
              card={DataImg}
              valueX2={valueX2}
              setDataImg={setDataImg}
              NextIndex={NextIndex}
            />
          </div>
        </div>
      </div>

      <div className="flex  bg-white  w-full   pl-12   items-center w-full">
        <BtnunderSlide
          PosIndex={PosIndex}
          DataImg={DataImg}
          NextIndex={NextIndex}
          valueX={valueX2}
          setPosIndex={setPosIndex}
          setValueX={setValueX2}
          setDataImg={setDataImg}
          setNextIndex={setNextIndex}
          DataSet={DataSet}
        />
        <div className="flex justify-end  pr-5">
          <div
            className="border-solid border-2 border-gray-500 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
            onClick={HandleStop}
          >
            <div
              className={`text-gray-500 ${
                StatusStop === false ? "hidden" : "block"
              }`}
            >
              <BsFillCaretRightFill size={12} />
            </div>
            <div
              className={`text-gray-500 ${
                StatusStop === true ? "hidden" : "block"
              }`}
            >
              <BsPauseFill size={12} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideHomeResponsive;
