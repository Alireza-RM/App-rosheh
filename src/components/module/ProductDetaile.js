"use client";

import Link from "next/link";
import { sp } from "@/utils/replaceNumber";
import { SlHeart } from "react-icons/sl";
import { TbArrowsShuffle } from "react-icons/tb";
import { PiCopySimpleLight } from "react-icons/pi";
import SectionDescriptonDetailes from "./SectionDescriptonDetailes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseProduct } from "src/redux/features/ShopProductSlice";

function ProductDetaile({
  data: {
    id,
    title,
    nameEn,
    imgS,
    price,
    factoryImg,
    Property,
    Description,
    code,
    Specifications,
  },
}) {
  const dispatch = useDispatch();
  const [number, SetNumber] = useState(1);
  const [product, setProduct] = useState();

  const data = useSelector((state) => state.ShopProduct.shopProducts);

  const filterData = data.filter((i) => i.id === id);

  const changeNumberHandler = (name) => {
    if (name === "increase") {
      SetNumber((prev) => prev + 1);
    } else if (name === "decrease") {
      if (number === 1) {
        return;
      } else {
        SetNumber((prev) => prev - 1);
      }
    }
  };

  return (
    <section className="bg-white max-w-screen-xl m-auto">
      <div className="flex flex-col md:flex-row mb-20">
        <div className=" w-full min-[1110px]:w-5/6">
          <img
            src={`/images/image-shop/${imgS}`}
            alt="logo"
            // width={1000000}
            // height={100000}
            className="w-full !object-cover lg:h-[550px]"
          />
        </div>

        <div className="px-3 pt-6 gap-y-2 flex flex-col items-start w-full">
          <div>
            <span className="text-[#7f827c] font-light opacity-90 hover:opacity-100 cursor-pointer">
              {" "}
              خانه/
            </span>
            <span className="text-[#7f827c] font-light opacity-90 hover:opacity-100 cursor-pointer">
              {" "}
              پوست/
            </span>
            <span className="text-[#7f827c] font-light opacity-90 hover:opacity-100 cursor-pointer">
              {" "}
              صورت/
            </span>
            <span className="text-[#7f827c] font-light opacity-90 hover:opacity-100 cursor-pointer">
              {" "}
              شوینده صورت
            </span>
          </div>

          <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-between gap-x-3">
            <Link href="/" className="-order-2 ">
              <img
                src={`/images/image-factory/${factoryImg}`}
                alt="logo"
                // width={1000000}
                // height={100000}
                className="w-16 h-12 lg:h-20 md:w-24 lg:w-40 lg:hover:shadow-md  cursor-pointer transitionTimeHover  object-contain bg-white lg:border-2 lg:border-[#d4d4d433] "
              />
            </Link>

            <div className="flex flex-col gap-y-4 lg:-order-3  ">
              <p className="text-2xl font-med tracking-wider text-[#585956]">
                {title}
              </p>
              <p className="text-base font-semibold tracking-wider">{nameEn}</p>
            </div>
          </div>

          <div className="flex flex-row items-end text-[#69765a] gap-x-1">
            <span className="text-xl">{sp(price)}</span>
            <span className="">تومان</span>
          </div>

          {/* btn */}
          <div className="flex flex-row w-full md:w-64 h-11 border-[1px] rounded-full overflow-hidden">
            <div className=" w-full flex flex-row items- justify-center">
              <span
                onClick={() => changeNumberHandler("increase")}
                className="w-full flex items-center justify-center hover:bg-black hover:text-white transitionTimeHover cursor-pointer text-[#69765a] text-2xl "
              >
                +
              </span>
              <span className="w-full flex items-center justify-center text-[#69765a] text-lg border-2 border-y-0">
                {sp(number)}
              </span>
              <span
                onClick={() => changeNumberHandler("decrease")}
                className="w-full flex items-center justify-center hover:bg-black hover:text-white transitionTimeHover cursor-pointer text-[#69765a] text-2xl "
              >
                -
              </span>
            </div>
            <div
              onClick={() => dispatch(increaseProduct({ id, price, number }))}
              className="bg-[#69765a] text-lg text-white w-full cursor-pointer flex items-center justify-center"
            >
              خرید
            </div>
          </div>

          {filterData[0] ? (
            <div className="my-6 text-[#949791] text-xs flex items-center justify-start  h-8 flex-row min-[370px]:tracking-wider">
                هم اکنون
                <div className="w-5 h-5 flex   mb-2 mx-1 justify-center  text-white rounded-full bg-[#69765a]">
                  {sp(filterData[0].number)}
                </div>
                عدد از این محصول در سبد خرید شما موجود است
            </div>
          ) : null}

          <div className=" flex flex-row justify-start -mr-[6px] gap-x-3">
            <span className=" flex items-end  justify-center text-base">
              <TbArrowsShuffle className="hover:cursor-pointer w-7 h-7 p-[4px] lg:flex text-[#605f5f]" />
              مقایسه
            </span>
            <span className=" flex flex-row items-end justify-center text-base ">
              <SlHeart className=" hover:cursor-pointer w-7 h-7 p-[4px] lg:flex text-[#605f5f]" />
              لایک
            </span>
            <span className="w-full flex flex-row items-end  justify-center text-base  border-r-2">
              <PiCopySimpleLight className=" hover:cursor-pointer w-7 h-7 p-[4px] lg:flex text-[#605f5f]" />
              کپی لینک
            </span>
          </div>

          <div className="w-full mt-2">
            <ul className="list-disc list-inside border-y-[1px] text-[#7f827c] font-light flex flex-col py-5 gap-y-2">
              {Property.map((i) => (
                <li key={i} className="">
                  {i}
                </li>
              ))}
            </ul>

            <div className="flex flex-row items-end text-[#7f827c] gap-x-1 pt-4">
              <span className="text-black text-base">کد کالا :</span>
              <span className="">{code}</span>
            </div>
          </div>
        </div>
      </div>

      <SectionDescriptonDetailes
        {...Specifications}
        Description={Description}
      />

      <div className="flex flex-col p-4 gap-y-2">
        <p className="text-2xl font-semibold">شاید نیاز داشته باشید</p>
        <span className="h-[2px] w-[40px] bg-black"></span>
      </div>
    </section>
  );
}

export default ProductDetaile;
