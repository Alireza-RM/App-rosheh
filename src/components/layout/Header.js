"use client";

import Image from "next/image";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { SlHeart } from "react-icons/sl";
import { TbArrowsShuffle } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { e2p, sp } from "@/utils/replaceNumber";
import Modal from "@/module/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  let sumNumberData;
  const data = useSelector((state) => state.ShopProduct.shopProducts);
  if (data.length) {
    sumNumberData = data
      .map((i) => {
        return i.number;
      })
      .reduce((acc, cur) => cur + acc, 0);
  }

  const [isModalNav, setIsModalNav] = useState(false);

  return (
    <header className="bg-[#ffffff] shadow-md  z-50 !sticky top-0">
      <Modal isModalNav={isModalNav} setIsModalNav={setIsModalNav} />
      <div className=" flex justify-between  w-full h-full lg:pt-2 max-w-7xl m-auto">
        <div className="flex justify-start items-center w-1/5 h-[77px] pr-2 lg:hidden">
          <BsList className="w-8 h-[30px] p-[3.5px] " />
          <p className="hidden md:flex font-semibold text-[17px]">فروشگاه</p>
        </div>

        <div className="h-full w-full lg:w-auto lg:p-2 flex justify-center">
          <Link href="/" className="p-[8.5px] ">
            <Image
              src={"/images/logo-rosheh.png"}
              alt="logo"
              width={240}
              height={184}
              className="w-[150px] h-[60px]"
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-center items-center gap-x-4 h-auto">
          <Link
            href="/"
            className="font-semibold text-lg p-1 hover:opacity-60 transitionTimeHover"
          >
            برندها
          </Link>
          <Link
            href="/"
            className="font-semibold text-lg p-1 hover:opacity-60 transitionTimeHover"
          >
            پوست
          </Link>
          <Link
            href="/"
            className="font-semibold text-lg p-1 hover:opacity-60 transitionTimeHover"
          >
            مو
          </Link>
          <Link
            href="/"
            className="font-semibold text-lg p-1 hover:opacity-60 transitionTimeHover"
          >
            آرایش
          </Link>
          <Link
            href="/"
            className="font-semibold text-lg p-1 hover:opacity-60 transitionTimeHover"
          >
            عطر
          </Link>
        </div>

        <div className="w-1/5 flex justify-end gap-x-3 items-center pl-3 h-auto">
          <AiOutlineUser className="hover:opacity-60 transitionTimeHover hover:cursor-pointer w-7 h-7 p-[2px] hidden lg:flex text-[#605f5f]" />
          <IoSearchOutline className="hover:opacity-60 transitionTimeHover hover:cursor-pointer w-7 h-7 p-[3px]  hidden lg:flex text-[#605f5f]" />
          <SlHeart className="hover:opacity-60 transitionTimeHover hover:cursor-pointer w-7 h-7 p-[4px] hidden lg:flex text-[#605f5f]" />
          <span className="relative hidden lg:flex">
            <TbArrowsShuffle className="hover:opacity-60 transitionTimeHover hover:cursor-pointer w-8 h-8 p-[5px]  text-[#605f5f]" />
            <div className="text-white text-[10px] font-light absolute top-0 -left-1 bg-[#69765a] rounded-full h-4 w-4 flex justify-center items-center">
              {e2p(0)}
            </div>
          </span>
          <span
            className="relative flex"
            onClick={() => setIsModalNav(!isModalNav)}
          >
            <HiOutlineShoppingBag className="hover:opacity-60 transitionTimeHover hover:cursor-pointer w-8 h-8 p-[4px] text-[#605f5f]" />
            <div className="text-white text-[10px] font-light absolute top-0 -left-1 bg-[#69765a] rounded-full h-4 w-4 flex justify-center items-center">
              {data.length ? sp(sumNumberData) : sp(0)}
            </div>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
