"use client";

import InnerModal from "./InnerModal";

// import ModalNavFilter from "./ModalNavFilter";

const ModalNav = ({ isModalNav, setIsModalNav }) => {
  const closeModal = () => {
    setIsModalNav(!isModalNav);
  };

  return (
    <div className="flex justify-end   w-full h-full bg-green-400">
      <InnerModal isModalNav={isModalNav} setIsModalNav={setIsModalNav}/>

      {isModalNav ? (
        <div
          onClick={() => closeModal()}
          className={`w-full h-full  bg-stone-800 transitionTimeHover  fixed top-0 left-0 z-10 opacity-80`}
        ></div>
      ) : null}
    </div>
  );
};
export default ModalNav;
