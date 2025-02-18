"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ProcessList } from "./ProcessList";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <div>
      <nav className="flex bg-neutral-900 items-center justify-between lg:py-4 top-0 left-0 w-full z-50">
        {/* Logo & Email */}
        <div className="flex items-center lg:ml-28 ml-12 my-4 lg:my-2">
          <span>
            <Image
              src={"/images/favicon.png"}
              alt="Language Flag"
              width={70}
              height={70}
              className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
            />
          </span>
          <span className="hidden lg:block text-base ml-8 font-bold text-white">
            huynhbutforwork@gmail.com
          </span>
        </div>

        {/* Hire Me Button */}
        <button
          onClick={() => window.open("https://huynh.vercel.app/#contact", "_blank")}
          className="mr-12 lg:mr-40 px-8 py-[15px] text-base text-white rounded-full transition-all duration-300 font-bold bg-[linear-gradient(90deg,_rgb(42,20,84)_0%,_rgb(135,80,247)_51%,_rgb(42,20,84)_100%)] bg-[length:300%_100%] bg-right hover:bg-left"
        >
          Hire Me!
        </button>
      </nav>
      <ProcessList />
      <FooterSection />
    </div>
  );
}
