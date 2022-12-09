import React from "react";
import { Text } from "../container/Language";
import neptuneDs from "../images/desktop/neptune-half.png";
import neptuneMb from "../images/mobile/neptune1.png";
import Spline from "@splinetool/react-spline";
import stars from "../images/desktop/stars-front.png";
import Arrow from "./Arrow";
import { useTranslation } from "react-i18next";

const Home2 = () => {
  const { t } = useTranslation();
  return (
    <div className="md:h-[screen] sm:h-[850px] md:flex ">
      <div className="wrapper mx-auto md:w-[100vw] m-auto h-[100vh] relative md:overflow-hidden">
        <div className="grid md:grid-cols-2 md:absolute md:mt-[5rem] right-0 left-0 ">
          <div className="relative md:flex md:flex-col z-10 md:h-[32rem] md:mr-[3.5rem]">
            <div className="absolute right-8 z-10 mt-[10rem] md:right-0 md:mt-[6.5rem] md:mr-[-4rem] text-blue-800 font-oswald_bold text-right md:rotate-[270deg]">
              <div className="mr-3">
                <h2 className="sm2:text-[2.7rem] sm:text-[2.5rem] mb-[-20px] md:text-[2.4rem]">
                  {t("home_hello")}
                </h2>
              </div>
              <h1 className=" text-[6rem] md:text-[5.5rem] sm2:text-[7rem] text-transparent bg-clip-text bg-gradient-to-b from-[#4062FA] to-[#001987]">
                CLAUDIA
              </h1>
            </div>
            <div className="font-oswald_semi mt-[21rem] md:mt-[20rem] sm2:mt-[23rem] text-right">
              <h3 className="md:mt-10 md:text-[1.2rem] sm2:text-[1.7rem] text-[1.5rem] mr-10 text-[#A7B0FF] md:mr-[9rem] ">
                {t("home_frontend")}
              </h3>
            </div>
            <div className="md:relative text-center md:text-right md:mt-4 md:mr-5 my-[15rem] ">
              <p className="md:absolute md:right-0 mx-auto font-Barlow text-gray-600 sm:text-[1rem] sm2:text-[1.2rem] md:text-[1rem] sm:max-w-[20rem] md:max-w-[20rem] sm2:max-w-[30rem] font-Poppins">
                {t("home_bio")}
              </p>
            </div>
          </div>

          <div className="hidden md:block absolute overflow-hidden z-[9] right-[7rem] mt-[-15rem]">
            <Spline scene="https://prod.spline.design/5btbDaioI8BnKceJ/scene.splinecode" />
          </div>
          <div className="absolute left-[-13rem] z-0">
            <img
              className="md:hidden mr-[9rem] pt-[3rem] h-auto"
              src={neptuneMb}
            ></img>
          </div>
        </div>
        <Arrow />

        <div id="scene">
          <div className="pos stars1"></div>
          <div className="pos stars2"></div>
          <img
            src={stars}
            alt=""
            className="object top-0 absolute stars3"
            data-value="-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home2;
