import React, { useContext } from "react";
import { languageOptions } from "../languages";
import { LanguageContext } from "../container/Language";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext); // this helps change the language with useContext

  const handleLanguageChange = (e) => userLanguageChange(e.target.value); // this records the language chosen by user and puts it into value variable

  return (
    <select
      className="rounded-[5px] select text-[15px] md:ml-3 tracking-[3px] focus:bg-black text-white bg-transparent md:relative border-none absolute right-0 md:mr-0 mr-[4.5rem] p-1"
      onChange={handleLanguageChange} // on change of select element it calls the handleLanguageChange
      value={userLanguage} // the value
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
