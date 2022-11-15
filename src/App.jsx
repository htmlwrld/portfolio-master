import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { LanguageProvider } from "./container/Language";
import Home2 from "./components/Home2";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-black">
        <div className="sticky top-0 z-[99]">
          <Navbar />
        </div>
        <div className="xl:max-w-[1250px] mx-auto">
          <Home2 />
          <Skills />
          <Projects />
          <Home />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
