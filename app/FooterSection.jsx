"use client";

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-neutral-900 pt-10 pb-3 text-center">
      {/* Logo */}
      <div className="flex justify-center items-center text-7xl font-bold pb-10">
        <span>
          <Image
            src={"/image/favicon.png"}
            alt="Language Flag"
            width={70}
            height={70}
            className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
          />
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center gap-8 pb-6 mt-4 text-sm md:text-base text-white">
        {[{ id: "contact", label: "Liên hệ" }].map((link) => (
          <button
            key={link.id}
            onClick={() => window.open("https://huynh.vercel.app/#contact", "_blank")}
            className="hover:text-purple-400 transition relative group"
          >
            {link.label}
            <span className="absolute left-0 bottom-[-4px] rounded-full w-0 h-[3px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        {[
          {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/imodnoliub",
          },
          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/hu%E1%BB%B3nh-nguy%E1%BB%85n-h%E1%BB%AFu/",
          },
          { icon: <FaGithub />, link: "https://github.com/huynhnguyenday" },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/hhuyn._.hn/",
          },
        ].map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center bg-transparent text-purple-400 border border-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-transform duration-200 hover:scale-95`}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-6 text-xs lg:text-sm text-gray-500">
        © 2025 All rights reserved by{" "}
        <span className="text-sm lg:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
          Nguyễn Hữu Huỳnh
        </span>
      </p>
    </footer>
  );
};

export default FooterSection;
