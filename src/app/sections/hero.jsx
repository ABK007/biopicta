"use client";
import React from "react";
import Image from "next/image";
import Header from "@/app/images/Header image.svg";
import Time from "@/app/sections/timeticker"; // Import the Time component

const Hero = () => {
  return (
    <div className="flex flex-col">
      {/* Full-width Time component at the top with same background color */}
      {/* Main hero content with the same background color */}
      <div className="bg-[#DFE6E5] max-sm:pt-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-lg text-center lg:text-left lg:pl-24 lg:pt-8">
          <h1 className="text-5xl font-bold mb-2 text-black">
            Design Your Research Posters With{" "}
            <span
              className="text-5xl relative font-semibold bg-gradient-to-r from-[#2A5650] to-[#5CBCAF] bg-clip-text text-transparent"
              style={{
                backgroundSize: "100%",
                backgroundPosition: "0 0",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PosterPro
              <sup
                className="text-sm absolute font-bold top-2"
                style={{
                  background: "inherit",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                TM
              </sup>
            </span>
          </h1>
          <p className="text-gray-700 mt-4 break-keep">
            Create professional Scientific Posters with pre-designed templates.
            Save time and get research posters with a few clicks.
          </p>
          <a href="#foam">
          <button className="mt-6 capitalize bg-[#B7512C] text-white px-5 rounded-full py-2 w-44 hover:bg-orange-800">
            Try for free
          </button></a>
        </div>

        <div className="mt-8 lg:mt-0">
          <Image
            className="w-[625px] lg:pl-8 object-contain"
            src={Header}
            alt="Header illustration for PosterPro"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
