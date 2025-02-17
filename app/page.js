"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ProcessList } from "./ProcessList";
import { MdOutlineNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVietMode, setIsVietMode] = useState(false);

  const toggleLanguage = () => {
    onLanguageToggle(!isVietMode);
  };

  // Toggle between dark and light mode
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to apply the background color and text color based on the mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--background", "#0a0a0a");
      document.documentElement.style.setProperty("--foreground", "#ededed");
    } else {
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#171717");
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav className="flex bg-neutral-900 items-center justify-between lg:py-4 top-0 left-0 w-full z-50">
        {/* Logo & Email */}
        <div className="flex items-center lg:ml-28 ml-12 my-4 lg:my-2">
          <span>
            <Image
              src={"/image/bg.png"}
              alt="Language Flag"
              width={70}
              height={70}
              className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
            />
          </span>
          <span
            className={`hidden lg:block text-base ml-8 font-bold ${
              isDarkMode ? "text-white" : "text-[#2A1454]"
            }`}
          >
            huynhbutforwork@gmail.com
          </span>
        </div>

        {/* Hire Me Button */}
        <button
          onClick={() => window.open("https://huynh.vercel.app/", "_blank")}
          className="mr-12 lg:mr-40 px-8 py-[15px] text-base text-white rounded-full transition-all duration-300 font-bold bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] bg-[length:300%_100%] bg-right hover:bg-left"
        >
          {isVietMode ? "Liên Hệ!" : "Hire Me!"}
        </button>
      </nav>
      <ProcessList />

      {/* Dark/Light Mode Toggle Button */}
      <button
        onClick={handleToggle}
        className="fixed top-52 lg:top-80 h-10 w-11 text-white group hover:w-28 right-0 flex items-center justify-start pl-3 border-none shadow-none rounded-l-full transition-all duration-300 
    bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] 
    bg-[length:300%_100%] bg-[position:30%] hover:bg-left z-50"
      >
        <div className="flex items-center w-24">
          {isDarkMode ? (
            <>
              <CiLight className="w-6 h-6 flex-shrink-0" />
              <span className="mx-2 text-lg whitespace-nowrap overflow-hidden transition-all duration-300 group-hover:w-20 w-0">
                {isVietMode ? "Sáng" : "Light"}
              </span>
            </>
          ) : (
            <>
              <MdOutlineNightlight className="w-6 h-6 flex-shrink-0" />
              <span className="mx-2 text-lg whitespace-nowrap overflow-hidden transition-all duration-300 group-hover:w-20 w-0">
                {isVietMode ? "Tối" : "Dark"}
              </span>
            </>
          )}
        </div>
      </button>
    </div>
  );
}
