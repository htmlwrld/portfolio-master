import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosGlobe } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import i18next from "i18next";
import { IconContext } from "react-icons";

const languages = [
  {
    code: "it",
    name: "IT",
    country_code: "it",
  },
  {
    code: "en",
    name: "EN",
    country_code: "gb",
  },
];

const LangSelector = () => {
  const [cssDisplay, setCssDisplay] = useState("none");
  const { t } = useTranslation();

  const showDropdown = () => {
    if (cssDisplay === "none") {
      setCssDisplay("block");
    } else {
      setCssDisplay("none");
    }
  };

  return (
    <div className="menu w-[70px] text-white">
      <button
        className="dropdown-menu cursor-pointer w-auto flex items-center bg-black text-white p-[4px] relative "
        onClick={showDropdown}
      >
        <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
          <IoIosGlobe />
        </IconContext.Provider>
        <FiChevronDown className=" ml-[5px]" />
      </button>
      <ul
        style={{ display: cssDisplay }}
        className=" absolute mt-2 sub-menu backdrop-blur-sm bg-white/10 m-0 list-none"
      >
        {languages.map(({ code, name, country_code }) => (
          <li key={country_code} className="menu-item w-[100%]">
            <button
              className="dropdown-item hover:bg-black text-[1rem] hover:cursor-pointerm pl-[10px] pt-[10px] w-[100%] pr-8 pb-[10px]"
              onClick={() => i18next.changeLanguage(code)}
            >
              <span className={`fi fi-${country_code}`}></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSelector;
