"use client";
import React, { useEffect, useState } from "react";
import Carousel from "../Slideloop/Carousel";
import { BsPauseFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import BtnunderSlide from "../BtnSlideLoop/BtnUnder";

const SlideHome = () => {
  const [valueX, setValueX] = useState(100);
  const [cards, setCards] = useState([
    {
      idx: 0,
      text: "https://is1-ssl.mzstatic.com/image/thumb/yz8wdRYi6Dput1ZLlsV0MA/1960x1102.jpg",
      catagories: "คลกเบาสมอง",
      desc: "หัวใจดีๆกลับมาอีกครั้ง",
      active: "false",
    },
    {
      idx: 1,
      text: "https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/1960x1102.jpg",
      catagories: "ผจญภัย",
      desc: "บางความลับใหญ่เกินจะปกปิด",
      active: "true",
    },
    {
      idx: 2,
      text: "https://is1-ssl.mzstatic.com/image/thumb/tPJwMGtsAr_psAVlyf2Rzg/1960x1102.jpg",
      catagories: "ตลกเบาสมอง",
      desc: "โร้ดทริปสุดฮาที่พาความตื่นเต้นเต็มพิกัด",
      active: "false",
    },
    {
      idx: 3,
      text: "https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/1960x1102.jpg",
      catagories: "ระทึกขวัญ",
      desc: "เปิดศึกสายลับปะทะสายลับ",
      active: "false",
    },
    {
      idx: 4,
      text: "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1960x1102.jpg",
      catagories: "ดราม่า",
      desc: "รายการต่อไป พบกับความเปลี่ยนแปลง",
      active: "false",
    },
    {
      idx: 5,
      text: "https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/1960x1102.jpg",
      catagories: "ดราม่า",
      desc: "ชีวิตไม่มีสูตรตายตัว",
      active: "false",
    },
    {
      idx: 6,
      text: "https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/1960x1102.jpg",
      catagories: "ดราม่า",
      desc: "เปิดฉากการแสวงโชคครั้งใหม่",
      active: "false",
    },
    {
      idx: 7,
      text: "https://is1-ssl.mzstatic.com/image/thumb/9ewxNiQdC032DQcorTcsvA/1960x1102.jpg",
      catagories: "ดราม่า",
      desc: "ยศถาที่เธอมองหากับเงินตราที่เขาต้องการ",
      active: "false",
    },
    {
      idx: 8,
      text: "https://is1-ssl.mzstatic.com/image/thumb/zI2CDCT1wdz22rTE-yIAww/1960x1102.jpg",
      catagories: "เทศกาลวันหยุด",
      desc: "คริสต์มาสหรรษารวมดาราอลังการ!",
      active: "false",
    },
    {
      idx: 9,
      text: "https://is1-ssl.mzstatic.com/image/thumb/IzI6CBn2WOcZClkPGzh-Wg/1960x1102.jpg",
      catagories: "ระทึกขวัญ",
      desc: "พบเล่ห์เหลี่ยมแยบยลที่ทำให้คนร้ายตายใจ",
      active: "false",
    },
    {
      idx: 10,
      text: "https://is1-ssl.mzstatic.com/image/thumb/yz8wdRYi6Dput1ZLlsV0MA/1960x1102.jpg",
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
  const DataSet = cards.slice(1,11);


  useEffect(() => {
    if (StatusStop === false) {
      const intervalId1 = setInterval(() => {
        setValueX((prevValue) => prevValue + 100);
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
        }
        if (PosIndex === 9) {
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
        .animation-slide {
          transform: translateX(-${valueX}%);
        }
      `}</style>
      <div className="bg-white w-full h-full flex justify-center overflow-hidden relative">
        <div>
          <div
            className={`max-w-6xl w-full animation-slide duration-1000 ease-in-out`}
          >
            <Carousel card={DataImg} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 bg-white gap-3 items-center w-full py-3">
        <div className="w-full"></div>
        <BtnunderSlide PosIndex={PosIndex}  DataImg={DataImg}  NextIndex={NextIndex} valueX={valueX} setPosIndex={setPosIndex}  setValueX={setValueX} setDataImg={setDataImg} setNextIndex={setNextIndex} DataSet={DataSet}/>
        <div className="flex justify-end pr-5">
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

export default SlideHome;
