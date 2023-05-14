import React from "react";
import icon from "../images/icon.png";
import react from "../images/react.png";
import Header from "./Header";
import { motion } from "framer-motion";

const iconVariant = {
  spinning: {
    rotate: 360,
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Carosel = () => {
  return (
    // returning jsx
    <div className=" h-[700px]   bg-backgroundImage">
      {/* Carosla container */}
      <div className=" w-full h-full">
        <header className=" bg-backgroundColor relative bg-opacity-80 text-[rgb(22, 28, 45)] mx-auto leading-6 mb-5 bg-backgroundColor w-full h-full">
          {/* Header component*/}
          <Header />

          {/* icon and text */}
          <div className="flex justify-center items-center pt-72 pb-[180px]">
            <div className="text-center text-white font-bold  leading-normal">
              <motion.img
                variants={iconVariant}
                animate="spinning"
                src={icon}
                alt=""
                className="mx-auto h-20 w-20"
              />
              <p className=" mt-8 font-semibold text-4xl">
                Upwind - React Tailwind Landing Page Template
              </p>
              <p className="mt-6 font-semibold text-base">
                (Light & Dark + LTR & RTL Theme Available)
              </p>
            </div>
          </div>

          {/* Concepts links */}
          <div className="relative mb-5">
            <div className=" container pb-6 flex mx-auto justify-center w-full absolute text-center top-0 right-0 left-0">
              <p>
                <img src={react} alt="" className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg mx-2 align-middle " />
              </p>
              <p>
                <img src={react} alt="" className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg mx-2 align-middle " />
              </p>
              <p>
                <img src={react} alt="" className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg mx-2 align-middle " />
              </p>
              <p>
                <img src={react} alt="" className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg mx-2 align-middle " />
              </p>
              <p>
                <img src={react} alt="" className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg mx-2 align-middle " />
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Carosel;
