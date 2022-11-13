import React from "react";
import { Text } from "../container/Language";
import neptuneDs from "../images/desktop/neptune-half.png";
import neptuneMb from "../images/mobile/neptune1.png";

const Home = () => {
  return (
    <div className="md:h-[100%] sm:h-[850px] background_home">
      <div className="mx-auto md:w-[90%]">
        <div className="grid md:grid-cols-2">
          <div className="relative md:flex md:flex-col z-10">
            <div className="absolute right-8 z-10 mt-[10rem] md:right-0 md:mt-[6.5rem] md:mr-[-4rem] text-blue-800 font-oswald_bold text-right md:rotate-[270deg]">
              <div className="mr-3">
                <h2 className=" sm2:text-[2.7rem] sm:text-[2.5rem] mb-[-20px] md:text-[2.4rem]">
                  <Text tid="home_hello" />
                </h2>
              </div>
              <h1 className=" text-[6rem] md:text-[5.5rem] sm2:text-[7rem] text-transparent bg-clip-text bg-gradient-to-b from-[#4062FA] to-[#001987]">
                CLAUDIA
              </h1>
            </div>
            <div className="font-oswald_semi mt-[21rem] md:mt-[20rem] sm2:mt-[23rem] text-right">
              <h3 className="md:mt-10 md:text-[1.2rem] sm2:text-[1.7rem] text-[1.5rem] mr-10 text-[#A7B0FF] md:mr-[9rem] ">
                <Text tid="home_frontend" />
              </h3>
            </div>
            <div className="md:relative text-center md:text-right md:mt-4 md:mr-5 my-[15rem] ">
              <p className="md:absolute md:right-0 mx-auto font-Barlow text-gray-600 sm:text-[1rem] sm2:text-[1.2rem] md:text-[1rem] sm:max-w-[20rem] md:max-w-[20rem] sm2:max-w-[30rem] font-Poppins">
                <Text tid="home_bio" />
              </p>
            </div>
          </div>
          <div className="m-0 p-0">
            <img
              className="hidden md:block mt-10 w-[15rem] h-auto "
              src={neptuneDs}
              alt="/"
            />
          </div>
          <div className="absolute left-[-13rem] z-0">
            <img
              className="md:hidden pr-[9rem] pt-[3rem] h-auto"
              src={neptuneMb}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
