import React from "react";
import bg from "../images/mobile/sunMB_shadows.png";
import vite from "../images/vite.png";
import figma from "../images/figma.png";
import { Text } from "../container/Language";

const Skills = () => {
  return (
    <section className="bg-black max-w-[1800px] mx-auto" id="skills">
      <div className="bg-black relative text-center">
        <h2 className="text-[#001987] font-space md:text-[2.5rem] text-[2rem] mx-auto md:absolute z-[80] md:left-0 md:right-0">
          <Text tid="skills" />
        </h2>
      </div>
      <div className="h-[100%] mx-auto xl:max-w-[1250px] bg-black relative">
        <img src={bg} alt="" />
        <div className="absolute grid overflow-hidden grid-cols-12 grid-rows-6 gap-0 top-0 right-0 bottom-0 left-0">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box col-span-2"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box col-span-2"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="javascript box col-span-2 relative">
            <div className="tooltip hvr-bob tooltip-js absolute w-[100%] md:top-10 top-5 left-[49%]">
              <svg
                className=" icon fill-yellow-500 hover:stroke-[0.8]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -3 50 29"
              >
                <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
              </svg>
              <span className="tooltiptext">JavaScript: 50%</span>
            </div>
          </div>
          <div className="box"></div>
          <div className="figma relative box">
            <div className="tooltip hvr-bob tooltip-figma absolute max-w-full h-auto bottom-3 md:bottom-5">
              <img className="icon_image" src={figma} alt="/" />
              <span className="tooltiptext">Figma: Beginner</span>
            </div>
          </div>
          <div className="box col-span-2"></div>
          <div className="box row-span-2"></div>
          <div className="box row-span-2"></div>
          <div className="vscode box row-span-2 relative">
            <div className="hvr-bob tooltip tooltip-vsc absolute w-[100%] top-[40%] left-0">
              <svg
                className=" icon fill-blue-500 hover:stroke-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-10 -10 35 35"
              >
                <path d="m21.29 4.1-4.12-2a1.36 1.36 0 0 0-.48-.1h-.08a1.18 1.18 0 0 0-.72.24l-.14.12-7.88 7.19L4.44 7a.83.83 0 0 0-.54-.17.88.88 0 0 0-.53.17l-1.1 1a.8.8 0 0 0-.27.61.84.84 0 0 0 .27.62l3 2.71-3 2.72a.84.84 0 0 0 0 1.23l1.1 1a.89.89 0 0 0 .6.22.93.93 0 0 0 .47-.17l3.43-2.61 7.88 7.19a1.2 1.2 0 0 0 .76.36h.17a1 1 0 0 0 .49-.12l4.12-2a1.25 1.25 0 0 0 .71-1.1V5.23a1.26 1.26 0 0 0-.71-1.13zM17 16.47l-6-4.53 6-4.53z" />
              </svg>
              <span className="tooltiptext">VSC: Advanced</span>
            </div>
          </div>
          <div className=" box "></div>
          <div className="html box row-span-2 col-span-2 relative">
            <div className="tooltip hvr-bob  html absolute w-[70%] right-1 top-2">
              <svg
                className="fill-red-700 icon relative"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
              >
                <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z" />
              </svg>
              <span className="tooltiptext">HTML: 85%</span>
            </div>
          </div>
          <div className="css box row-span-2 col-span-2 relative">
            <div className="tooltip hvr-bob  tooltip-css absolute w-[100%] bottom-0 left-1">
              <svg
                className="icon fill-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-3 0 35 25"
              >
                <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z" />
              </svg>
              <span className="tooltiptext">CSS: 65%</span>
            </div>
          </div>
          <div className="vite box row-span-2 relative">
            <div className="hvr-bob tooltip tooltip-vite absolute w-[70%] h-auto left-3 top-10 md:top-[30%] md:left-10">
              <img className="icon_image" src={vite} alt="/" />
              <span className="tooltiptext">Vite: Advanced</span>
            </div>
          </div>
          <div className="box row-span-2"></div>
          <div className="tailwind box row-span-2 relative">
            <div className="hvr-bob tooltip tooltip-tail absolute w-[75%] top-[20%] right-[-0.7rem]">
              <svg
                className="icon hover:stroke-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 70 70"
              >
                <defs>
                  <linearGradient
                    x1="0"
                    y1="-21.333"
                    y2="85.333"
                    id="A"
                    x2="64"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2383ae" offset="0%" />
                    <stop stopColor="#6dd7b9" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                  fill="url(#A)"
                  fillRule="evenodd"
                />
              </svg>
              <span className="tooltiptext">Tailwind: 90%</span>
            </div>
          </div>
          <div className="box row-span-2"></div>
          <div className="react box row-span-2 relative">
            <div className="hvr-bob tooltip tooltip-react absolute w-[100%] top-[30%]">
              <svg
                className="icon fill-cyan-300 stroke-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
              >
                <circle cx="12" cy="11.245" r="1.785" />
                <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z" />
                <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z" />
                <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z" />
                <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z" />
              </svg>
              <span className="tooltiptext">React: 30%</span>
            </div>
          </div>
          <div className="box row-span-2"></div>
          <div className="box row-span-3"></div>
          <div className="box row-span-2"></div>
          <div className="box row-span-2"></div>
          <div className="box row-span-2 col-span-2"></div>
          <div className="box row-span-2"></div>
          <div className="box row-span-2"></div>
          <div className="box row-span-2 col-span-2"></div>
          <div className="box row-span-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
