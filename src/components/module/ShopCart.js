"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sp } from "@/utils/replaceNumber";
import { IoCloseSharp } from "react-icons/io5";
import productData from "@/data/ProductData";
import { useDispatch } from "react-redux";
import { decreaseProduct } from "src/redux/features/ShopProductSlice";

function ShopCart({ id, number}) {
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const filterData = productData.filter((i) => i.id === id);
    setProduct({ ...filterData[0] });
  }, []);

  const deleteHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(decreaseProduct({ id }));
  };

  return (
    <Link href={`/products/${id}`}>
      <div
        onClick={() => console.log("product")}
        className="group w-full h-[90px] relative flex flex-row items-center border-t-[1px] cursor-pointer "
      >
        <div className="w-2/5 z-20 ml-3">
          <img
            src={`/images/image-shop/${product.imgS}`}
            alt="logo"
            // width={1000000}
            // height={100000}
            className="w-[160px]  h-[80px] !object-cover"
          />
        </div>

        <div className="w-full  h-full pt-5">
          <p className=" tracking-wider text-[#585956] ">{product.title}</p>
          <div className="flex flex-row items-center text-[#69765a] gap-x-1 transitionTimeHover group-hover:text-black">
            <span className="opacity-40">{sp(number)} × </span>
            <span className="text-base">{product.price}</span>
            <span className="text-xs">تومان</span>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-start items-center h-full pt-4  ">
          <IoCloseSharp
            onClick={(e) => deleteHandler(e)}
            className="w-6 h-6 p-1 z-20 text-[#585956]  hover:bg-white hover:shadow-lg rounded-full transitionTimeHover"
          />
        </div>
        <div className="w-full h-full absolute inset-0 group-hover:bg-gray-200 group-hover:opacity-30 transitionTimeHover"></div>
      </div>
    </Link>
  );
}

export default ShopCart;
