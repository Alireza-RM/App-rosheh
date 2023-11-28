function Banner() {
  return (
    <div className="p-4 md:gap-x-5 w-full flex flex-col items-center gap-y-6 md:flex-row md:justify-evenly max-w-screen-xl m-auto">
 
      <div className="group bg-yellow-300 w-full h-60 md:h-36 lg:h-[477px] overflow-hidden relative cursor-pointer">
        <img
          src={"/images/portrait-beautiful-woman-with-clear-skin-posing-with-baby-s-breath-flowers-scaled.jpg"}
          alt="logo"
          // width={1000000}
          // height={100000}
          className=" scale-[1.2] group-hover:scale-100 h-full group-hover:w-[50rem]  sm:h-[280px]  md:h-full md:group-hover:h-[150px] md:group-hover:w-[35rem] lg:group-hover:h-[480px] lg:group-hover:w-[55rem] group-hover:h-[240px] w-[60rem] cursor-pointer transitionTime object-cover "
        />
        <div className="w-full h-full absolute !z-20 bg-neutral-600 opacity-30 group-hover:bg-neutral-900 group-hover:opacity-70 transitionTime top-0"></div>
        <div className="w-full h-full absolute !z-30 text-gray-50 text-4xl top-0 flex items-end pb-5 justify-center font-medium md:text-2xl lg:text-5xl">پوست</div>
      </div>

      <div className="group bg-yellow-300 w-full h-60 md:h-36 lg:h-[477px] overflow-hidden relative cursor-pointer">
        <img
          src={"/images/hair-min.jpeg"}
          alt="logo"
          // width={1000000}
          // height={100000}
          className=" scale-[1.2] group-hover:scale-100 h-full group-hover:w-[50rem]  sm:h-[280px]  md:h-full md:group-hover:h-[150px] md:group-hover:w-[35rem] lg:group-hover:h-[480px] lg:group-hover:w-[55rem] group-hover:h-[240px] w-[60rem]       cursor-pointer transitionTime object-cover "
        />
        <div className="w-full h-full absolute !z-20 bg-neutral-600 opacity-30 group-hover:bg-neutral-900 group-hover:opacity-70 transitionTime top-0"></div>
        <div className="w-full h-full absolute !z-30 text-gray-50 text-4xl top-0 flex items-end pb-5 justify-center font-medium md:text-2xl lg:text-5xl">مو</div>
      </div>

      <div className="group bg-yellow-300 w-full h-60 md:h-36 lg:h-[477px] overflow-hidden relative cursor-pointer">
        <img
          src={"images/seductive-woman-touching-face-with-makeup-brush-scaled.jpg"}
          alt="logo"
          // width={1000000}
          // height={100000}
          className=" scale-[1.2] group-hover:scale-100 h-full group-hover:w-[50rem]  sm:h-[280px]  md:h-full md:group-hover:h-[150px] md:group-hover:w-[35rem] lg:group-hover:h-[480px] lg:group-hover:w-[55rem] group-hover:h-[240px] w-[60rem]       cursor-pointer transitionTime object-cover "
        />
        <div className="w-full h-full absolute !z-20 bg-neutral-600 opacity-30 group-hover:bg-neutral-900 group-hover:opacity-70 transitionTime top-0"></div>
        <div className="w-full h-full absolute !z-30 text-gray-50 text-4xl top-0 flex items-end pb-5 justify-center font-medium md:text-2xl lg:text-5xl">آرایش</div>
      </div>

      <div className="group bg-yellow-300 w-full h-60 md:h-36 lg:h-[477px] overflow-hidden relative cursor-pointer">
        <img
          src={"/images/concept-female-perfume-white-background-scaled.jpg"}
          alt="logo"
          // width={1000000}
          // height={100000}
          className=" scale-[1.2] group-hover:scale-100 h-full group-hover:w-[50rem]  sm:h-[280px]  md:h-full md:group-hover:h-[150px] md:group-hover:w-[35rem] lg:group-hover:h-[480px] lg:group-hover:w-[55rem] group-hover:h-[240px] w-[60rem]       cursor-pointer transitionTime object-cover "
        />
        <div className="w-full h-full absolute !z-20 bg-neutral-600 opacity-30 group-hover:bg-neutral-900 group-hover:opacity-70 transitionTime top-0"></div>
        <div className="w-full h-full absolute !z-30 text-gray-50 text-4xl top-0 flex items-end pb-5 justify-center md:pb-3 font-medium md:text-2xl lg:text-5xl">عطر</div>
      </div>

    </div>
  );
}

export default Banner;
