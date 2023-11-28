import Link from "next/link";
import Image from "next/image";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { LiaWhatsapp } from "react-icons/lia";
import { FaTelegram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

function Footer() {
  return (
    <footer className=" bg-no-repeat  relative flex flex-col justify-center items-center lg:flex-row lg:h-[350px] min-[1100px]:h-[380px] min-[1220px]:h-[400px] xl:h-[430px]  w-full lg:justify-between lg:items-center">
      <div className="absolute -z-10  xl:top-0 xl:left-0 xl:right-0 hidden lg:flex">
        <img
          src={"/images/اسلاید-روشه-01-1 (1).png"}
          alt="logo"
          // width={1000000}
          // height={100000}
          className="w-full h-full "
        />
      </div>

      <div className="h-full w-full  lg:w-1/4 lg:p-2 flex justify-center ">
        <div className="p-[8.5px] flex flex-col items-center justify-center">
          <Link href="/">
            <Image
              src={"/images/logo-rosheh.png"}
              alt="logo"
              width={240}
              height={184}
              className="w-[150px] h-[60px] flex lg:hidden"
            />
          </Link>
          <Link href="/">
            <Image
              src={"/images/logo-rosheh-white.png"}
              alt="logo"
              width={240}
              height={184}
              className="w-[280px] h-[110px] hidden lg:flex"
            />
          </Link>
        </div>
      </div>

      <div className="w-full relative mb-4 lg:mb-0  lg:w-2/4 h-full md:items-center lg:flex lg:flex-col justify-center lg:justify-center">
        <div className="my-4">
          <ul className="flex flex-col items-center lg:justify-center  gap-y-4 lg:text-white lg:flex-row lg:gap-x-5 ">
            <Link href="/">
              <li>برندها</li>
            </Link>
            <Link href="/">
              <li>فروشگاه</li>
            </Link>
            <Link href="/">
              <li>تماس با ما</li>
            </Link>
            <Link href="/">
              <li>شرایط و مقررات</li>
            </Link>
            <Link href="/">
              <li>سوالات متداول</li>
            </Link>
          </ul>
        </div>

        <div className="h-full w-full lg:w-auto lg:p-2 flex justify-center mb-4 lg:hidden">
          <Link href="/" className="p-[8.5px] ">
            <Image
              src={"/images/ENAMADpng.parspng.com_.png"}
              alt="logo"
              width={240}
              height={184}
              className="w-[140px] h-[140px]"
            />
          </Link>
        </div>

        <div>
          <div className="flex justify-center gap-x-1 lg:gap-x-3">
            <Link href="/">
              <div className="hover:opacity-70 transitionTimeHover rounded-full w-10 h-10 flex justify-center items-center p-2  bg-[#545454] lg:bg-black  box-border">
                <MdOutlineFacebook className="w-7 h-7 bg-[#545454] lg:bg-black text-white overflow-hidden " />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:opacity-70 transitionTimeHover rounded-full w-10 h-10 flex justify-center items-center p-2  bg-[#545454] lg:bg-black box-border">
                <FaTwitter className="w-7 h-7 bg-[#545454] lg:bg-black text-white overflow-hidden " />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:opacity-70 transitionTimeHover rounded-full w-10 h-10 flex justify-center items-center p-2  bg-[#545454] lg:bg-black box-border">
                <RiInstagramLine className="w-7 h-7 bg-[#545454] lg:bg-black text-white overflow-hidden " />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:opacity-70 transitionTimeHover rounded-full w-10 h-10 flex justify-center items-center p-2  bg-[#545454] lg:bg-black box-border">
                <AiFillYoutube className="w-7 h-7 bg-[#545454] lg:bg-black text-white overflow-hidden " />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:opacity-70 transitionTimeHover rounded-full w-10 h-10 flex justify-center items-center p-2  bg-[#545454] lg:bg-black box-border">
                <LiaWhatsapp className="w-7 h-7 bg-[#545454] lg:bg-black text-white overflow-hidden " />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:opacity-70 transitionTimeHover rounded-full w-10 h-10 flex justify-center items-center p-2  bg-[#545454] lg:bg-black box-border">
                <FaTelegram className="w-7 h-7 bg-[#545454] lg:bg-black text-white overflow-hidden " />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:opacity-70 transitionTimeHover rounded-full w-10 h-10 flex justify-center items-center p-2  bg-[#545454] lg:bg-black box-border">
                <SiAparat className="w-7 h-7 bg-[#545454] lg:bg-black text-white overflow-hidden " />
              </div>
            </Link>
          </div>
        </div>
        <div />

        <div className="hidden lg:flex text-gray-300 text-sm lg:mb-8 absolute bottom-0">
          <p>© ۱۴۰۲ | تمامی حقوق برای روشه محفوظ است.</p>
        </div>
      </div>

      <div className="h-full w-full lg:w-1/4  lg:p-2 justify-center mb-4 md:mb-0 hidden lg:flex lg:items-end">
        <Link href="/" className="p-[8.5px] ">
          <Image
            src={"/images/ENAMADpng.parspng.com_.png"}
            alt="logo"
            width={240}
            height={184}
            className="w-[100px] h-[100px]"
          />
        </Link>
      </div>
    </footer>
  );
}

// #545454
// #ffffff

export default Footer;
