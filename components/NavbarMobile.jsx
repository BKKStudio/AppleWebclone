"use client";
import React, { useState } from "react";
import { BsApple, BsSearch, BsBag, BsList,BsXLg } from "react-icons/bs";
import Link from "next/link";

export default function NavbarMobile() {
  const [modalSearch, setModalSearch] = useState(false);
  const [modalBasket, setModalBasket] = useState(false);
  const [modalList, setModalList] = useState(false);
  return (
    <nav
      className={`hidden max-lg:block px-7 ${
        modalList ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      <div className="flex justify-center">
        <div className="max-w-5xl w-full flex justify-between items-center gap-3 py-2 text-xs">
          <span className="">
            <Link className="" href={"/"}>
              <BsApple size={20} className="text-gray-700" />
            </Link>
          </span>
          <div className="flex gap-5 items-center text-gray-500">
            <span className="">
              <BsSearch size={15} />
            </span>
            <span
              className=""
              onMouseEnter={() => setModalBasket(true)}
              onMouseLeave={() => setModalBasket(false)}
            >
              <BsBag size={17} />
            </span>
            {modalList === false && (
              <button className="" onClick={() => setModalList(!modalList)}>
                <BsList size={17} />
              </button>
            )}
               {modalList === true && (
              <button className="" onClick={() => setModalList(!modalList)}>
                <BsXLg size={17} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-full${
          modalList
            ? `opacity-100 h-96 duration-700`
            : "hidden opacity-0 h-0 duration-700"
        }`}
      >
        <div
          className={`w-full${
            modalList
              ? `opacity-100 h-96 duration-700`
              : "hidden opacity-0 h-0 duration-700"
          }`}
        >
          Hello
        </div>
      </div>
    </nav>
  );
}
