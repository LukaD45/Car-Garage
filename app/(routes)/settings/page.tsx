"use client";

import Navbar from "@/components/layout/main-layout/navbar";
import { useState } from "react";

const SettingsPage = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    "dark:bg-black bg-white"
  );
  const [fontSize, setFontSize] = useState("text-base");
  const [textColor, setTextColor] = useState<string>("dark:#ffffff #000000");
  const [lineHeight, setLineHeight] = useState<string>("leading-normal");

  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
  };
  const handleTextColorChange = (color: string) => {
    setTextColor(color);
  };

  const handleLineHeightChange = (heigth: string) => {
    setLineHeight(heigth);
  };

  return (
    <div className={`h-screen ${backgroundColor}  ${fontSize}`}>
      <Navbar />

      <h1 className="  font-bold py-10 text-3xl justify-center mb-20 flex">
        Change the settings on this page
      </h1>
      <div className="p-5">
        <div className="flex justify-center space-x-10 items-center">
          <div className="mb-4 space-x-3 ">
            <label htmlFor="backgroundColor" className=" mb-2 font-bold">
              Background Color:
            </label>

            <select
              id="backgroundColor"
              className="border border-gray-300 rounded px-3 py-1"
              value={backgroundColor}
              onChange={(e) => handleBackgroundColorChange(e.target.value)}
            >
              <option value="bg-white">White</option>
              <option value="bg-gray-400">Gray</option>
              <option value="bg-blue-400">Blue</option>
              <option value="bg-green-400">Green</option>
              <option value="bg-red-400">Red</option>
              <option value="bg-violet-400">Violet</option>
              <option value="bg-orange-400">Orange</option>
            </select>
          </div>
          <div className="mb-4 space-x-3 ">
            <label htmlFor="fontSize" className=" mb-2 font-bold">
              Font Size:
            </label>
            <select
              id="fontSize"
              className="border border-gray-300 rounded px-3 py-1"
              value={fontSize}
              onChange={(e) => handleFontSizeChange(e.target.value)}
            >
              <option value="text-xs">Extra Small</option>
              <option value="text-sm">Small</option>
              <option value="text-base">Normal</option>
              <option value="text-lg">Large</option>
              <option value="text-xl">Extra Large</option>
              <option value="text-2xl">Extra Extra Large</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-10 justify-center">
          <div className="mb-4 space-x-3 ">
            <label htmlFor="paragraphColor" className=" mb-2 font-bold">
              Text Color:
            </label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => handleTextColorChange(e.target.value)}
              className="bg-black w-20 h-10 rounded-md appearance-none"
            />
          </div>
          <div className="space-x-3">
            <label htmlFor="lineHeight" className="mb-2 font-bold">
              Line Height:
            </label>
            <select
              id="lineHeight"
              className="border border-gray-300 rounded px-3 py-1"
              value={lineHeight}
              onChange={(e) => handleLineHeightChange(e.target.value)}
            >
              <option value="leading-none">None</option>
              <option value="leading-tight">Tight</option>
              <option value="leading-normal">Normal</option>
              <option value="leading-loose">Loose</option>
            </select>
          </div>
        </div>

        <p
          className={` max-w-[700px] mx-auto mt-20 mb-4 ${lineHeight}`}
          style={{ color: textColor }}
        >
          Modern cars have become more than just modes of transportation;
          they're symbols of personal freedom and technological advancement.
          From sleek sports cars designed for speed enthusiasts to spacious SUVs
          built for family adventures, there's a vehicle to suit every
          lifestyle. With advancements in electric and autonomous technologies,
          the future of cars promises to be even more exciting. Whether it's the
          thrill of the open road or the convenience of daily commutes, cars
          continue to play an integral role in our lives.
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;
