import { sp } from "@/utils/replaceNumber";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import ShopCart from "./ShopCart";
import { TbShoppingCartX } from "react-icons/tb";
import Link from "next/link";

function InnerModal({ isModalNav, setIsModalNav }) {
  let sumNumberData;
  const data = useSelector((state) => state.ShopProduct.shopProducts);
  if (data.length) {
    sumNumberData = data
      .map((i) => {
        return i.number * i.price;
      })
      .reduce((acc, cur) => cur + acc, 0);
  }

  return (
    <div
      className={`w-[270px] lg:w-[350px] transitionTimeModal -translate-x-96 overflow-scroll ${
        isModalNav ? "translate-x-0" : "-translate-x-96"
      } h-screen fixed top-0 bottom-0 left-0 flex flex-col  bg-white z-20`}
    >
      <div className="flex flex-row justify-between items-center p-4 gap-x-2 ">
        <p className="text-xl font-light">سبد خرید</p>
        <IoCloseSharp
          className="w-8 h-8 cursor-pointer"
          onClick={() => setIsModalNav(!isModalNav)}
        />
      </div>
      <div
        className={`border-b-2 ${
          data.length ? "min-h-[530px] overflow-y-scroll" : ""
        } `}
      >
        {data ? data.map((i) => <ShopCart key={i.id} {...i} />) : null}
      </div>

      {data.length ? (
        <div className="flex flex-col p-4">
          <div className="flex flex-row justify-between items-center mb-4">
            <p className="text-xl">جمع :</p>
            <div className="flex flex-row items-center text-[#69765a] gap-x-1">
              <span className="text-2xl">
                {data.length ? sp(sumNumberData) : ""}
              </span>
              <span className="text-sm">تومان</span>
            </div>
          </div>
          <div className="flex flex-row w-full h-11 border-[1px] rounded-full overflow-hidden">
            <div className="bg-[#69765a] text-base text-white w-full cursor-pointer flex items-center justify-center">
              تکمیل سفارش
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[400px] flex flex-col items-center pt-6 gap-y-4">
          <TbShoppingCartX className="w-full h-20 text-[#dedede]" />
          <p className="text-base">منتظر انتخاب شما هستیم</p>
          <Link href="/" className="flex flex-row w-3/6  h-11  rounded-full overflow-hidden">
            <div className="bg-[#69765a]  text-white w-full cursor-pointer flex items-center justify-center">
              بازگشت به صفحه اصلی
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default InnerModal;
