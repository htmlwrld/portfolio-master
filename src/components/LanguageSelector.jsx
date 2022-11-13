import React, { useContext } from "react";
import { languageOptions } from "../languages";
import { LanguageContext } from "../container/Language";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);
  return (
    <select
      className="rounded-[5px] md:ml-3 font-Poppins focus:bg-black text-white bg-transparent md:relative border-none absolute right-0 md:mr-0 mr-[4.5rem]"
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
