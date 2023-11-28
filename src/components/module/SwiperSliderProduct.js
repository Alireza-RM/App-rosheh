"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import productData from "data/ProductData";
import productData from "@/data/ProductData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "@/module/SwiperSliderProduct.module.css";
// import "@/app/globals.css";
import "@/module/SwiperSliderProduct.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { SlHeart } from "react-icons/sl";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiCheck } from "react-icons/hi2";
import { TbArrowsShuffle } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { increaseProduct } from "src/redux/features/ShopProductSlice";

export default function SwiperSliderProduct() {
  const dispatch = useDispatch();

 

  return (
    <div className="!h-72 pt-5 !w-full !flex justify-center items-center px-6 mt-6">
      <Swiper
        spaceBetween={60}
        // centeredSlides={true}
        slidesPerView={2}
        breakpoints={{
          577: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1322: {
            slidesPerView: 6,
          },
          1422: {
            slidesPerView: 7,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="  !justify-end !items-end !h-full !w-full !md:h-full"
        id="alireza"
      >
        {productData.map((i) => (
          <SwiperSlide
            key={i.id}
            className="group  h-[300px] cursor-pointer !bg-white !bg-opacity-0 !flex !flex-col !justify-center !items-center"
          >
            <div className=" relative w-[160px] min-[370px]:w-[180px] h-[170px]">
              <Link href={`/products/${i.id}`} className=" group ">
                <img
                  src={`/images/image-shop/${i.imgS}`}
                  alt="logo"
                  // width={1000000}
                  // height={100000}
                  className="w-[160px] min-[370px]:w-[180px] h-[170px] !object-cover"
                />
                <div className="absolute bg-white shadow-md flex flex-row items-center justify-center gap-x-2 lg:opacity-0 bottom-2 lg:bottom-0 rounded-full lg:rounded-none right-12 lg:right-5 h-10 w-20 lg:w-36  lg:group-hover:opacity-100 lg:group-hover:bottom-2  transitionTimeHover">
                  <PiShoppingCartSimple
                    className="w-7 h-7 p-[4px]"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        increaseProduct({
                          id: i.id,
                          price: i.price,
                          number: 1,
                        })
                      );
                    }}
                  />
                  <TbArrowsShuffle className="w-8 h-8 p-[5px] hidden lg:flex text-[#3f3e3e]" />
                  <SlHeart className="w-7 h-8 p-[4px]" />
                </div>
              </Link>
            </div>
            <div className="group w-full h-full p-1 gap-y-2 flex flex-col pt-2  ">
              <Link href={`/products/${i.id}`} className=" group ">
                <p className="text-base group-hover:opacity-50 transition-all 0.4">
                  {i.title}
                </p>
              </Link>

              <p className="text-[#69765a] text-base  ">
                {sp(i.price)} هزار تومان
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
