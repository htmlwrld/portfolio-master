import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { Text } from "../container/Language";
import LangSelector from "./LangSelector";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black md:block flex items-center justify-between">
      <header className="bg-black text-[14px] font-poppins font-light uppercase tracking-[3px] flex items-center md:justify-center h-20 md:mx-auto md:px-[6rem] px-[2rem] max-w-[1400px] ">
        {/* <h1 className="font-space italic w-full text-3xl font-Barlow font-[800] text-[#001987]">
          claudia.
        </h1> */}
        <ul className="font-Poppins hidden md:flex">
          <li className="px-5 text-white font-light">
            <a href="#home">home</a>
          </li>
          <li className="px-5 text-white font-light">
            <a href="#skills">skills</a>
          </li>
          <li className="px-5 text-white font-light">
            <a href="#projects">
              <Text tid="headerLink3" />
            </a>
          </li>
          <li className="px-5 text-white font-light">
            <a href="#contacts">
              <Text tid="headerLink4" />
            </a>
          </li>
        </ul>
        <LangSelector />
      </header>
      <div onClick={handleNav} className="block mr-[2rem] md:hidden sm:z-50">
        {<CgMenu className="cursor-pointer" color={"white"} size={27} />}
      </div>

      <div
        className={
          nav
            ? "fixed top-0 w-[100%] h-[100vh] text-center bg-black z-99"
            : "fixed left-[100%]"
        }
      >
        <ul className="m-4">
          <li className="mt-[10rem] font-medium text-[1.5rem] text-gray-500">
            home
          </li>
          <li className="mt-8 font-medium text-[1.5rem] text-gray-500">
            skills
          </li>
          <li className="mt-8 font-medium text-[1.5rem] text-gray-500">
            <Text tid="headerLink3" />
          </li>
          <li className="mt-8 font-medium text-[1.5rem] text-gray-500">
            <Text tid="headerLink4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
