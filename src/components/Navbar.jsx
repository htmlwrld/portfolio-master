import { useState } from "react";
import { CgMenu } from "react-icons/Cg";
import { Text } from "../container/Language";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black md:block flex items-center justify-between">
      <header className="bg-black flex items-center md:justify-between h-20 md:mx-auto md:px-[8rem] px-[2rem] max-w-[1400px] ">
        <h1 className="font-space italic w-full text-3xl font-Barlow font-[800] text-[#001987]">
          claudia.
        </h1>
        <ul className="font-Poppins text-[15px] hidden md:flex">
          <li className="px-5 text-white font-medium">
            <a href="#home">home</a>
          </li>
          <li className="px-5 text-white font-medium">
            <a href="#skills">skills</a>
          </li>
          <li className="px-5 text-white font-medium">
            <a href="#projects">
              <Text tid="headerLink3" />
            </a>
          </li>
          <li className="px-5 text-white font-medium">
            <a href="#contacts">
              <Text tid="headerLink4" />
            </a>
          </li>
        </ul>
        <LanguageSelector />
      </header>
      <div onClick={handleNav} className="block mr-[2rem] md:hidden">
        {<CgMenu className="cursor-pointer" color={"white"} size={27} />}
      </div>

      <div
        className={
          nav
            ? "fixed top-20 w-[100%] h-[100%] text-center bg-black z-20"
            : "fixed left-[100%]"
        }
      >
        <ul className="m-4">
          <li className="mt-[5rem] font-medium text-[1.5rem] text-gray-500">
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
