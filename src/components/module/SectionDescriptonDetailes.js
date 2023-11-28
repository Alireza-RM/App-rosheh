import { useState } from "react";
import { sp } from "@/utils/replaceNumber";


function SectionDescriptonDetailes({ brand, prop, productTexture, skinType, volume, country ,Description}) {

  const [condition, setCondition] = useState("Description");


  return (
    <div className="hidden lg:flex flex-col border-y-[1px] ">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-x-5">
          <div className="w-full flex flex-col items-center gap-y-6">
            <span
              className={`h-[2px]  bg-[#67696a] ${
                condition === "Description" ? "w-[60px]" : "w-0"
              } transitionTimeHover`}
            ></span>
            <p
              className={`text-lg font-semibold cursor-pointer ${
                condition === "Description" ? "opacity-100" : "opacity-60"
              } transitionTimeHover `}
              onClick={() => setCondition("Description")}
            >
              توضیحات
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-y-6">
            <span
              className={`h-[2px] bg-[#67696a]  ${
                condition === "Specifications" ? "w-[60px]" : "w-0"
              } transitionTimeHover`}
            ></span>
            <p
              className={`text-lg font-semibold cursor-pointer ${
                condition === "Specifications" ? "opacity-100" : "opacity-60"
              } transitionTimeHover `}
              onClick={() => setCondition("Specifications")}
            >
              مشخصات
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        {/* Description */}
        <div
          className={`${
            condition === "Description" ? "flex" : "hidden"
          } px-4 text-[#848882] tracking-wider`}
        >
          <p>{Description}</p>
        </div>

        {/* Specifications */}
        <div
          className={`${
            condition === "Specifications" ? "flex" : "hidden"
          } flex-col items-center `}
        >
          <ul className="w-2/3">
            <li className="flex flex-row justify-between py-4 ">
              <p className="font-semibold">برند</p>
              <p className="text-[#7f827c] ">{brand}</p>
            </li>
            <li className="flex flex-row justify-between py-4 border-y-[1px] ">
              <p className="font-semibold">نوع پوست</p>
              <p className="text-[#7f827c] ">{skinType}</p>
            </li>
            <li className="flex flex-row justify-between py-4 border-y-[1px] ">
              <p className="font-semibold">بافت محصول</p>
              <p className="text-[#7f827c] ">{productTexture}</p>
            </li>
            <li className="flex flex-row justify-between py-4 border-y-[1px] ">
              <p className="font-semibold">حجم</p>
              <p className="text-[#7f827c] ">{sp(volume)} میل</p>
            </li>
            <li className="flex flex-row justify-between py-4 border-y-[1px] ">
              <p className="font-semibold">کارایی</p>
              <p className="text-[#7f827c] ">{prop}</p>
            </li>
            <li className="flex flex-row justify-between py-4  ">
              <p className="font-semibold">کشور سازنده</p>
              <p className="text-[#7f827c] ">{country}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionDescriptonDetailes;
