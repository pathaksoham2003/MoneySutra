import React from "react";
import { LogoLight } from "../../assets";
// https://drive.google.com/drive/u/0/folders/1_PylJQrfQTMVvC2kwM9rY46EYjeo-zW5
const Navbar = () => {
  return (
    <div className="w-full flex justify-center h-[64px] ">
      <div className="flex-1 bg-white hidden lg:flex"></div>
      <div className="w-full max-w-[1204px] flex justify-between">
        <div className="flex flex-1 items-center">
          <h2 className="text-primary text-3xl font-anton font-thin ml-5">
            Money
            <span className="text-accent font-serif font-semibold ">Sutra</span>
          </h2>
        </div>
        <div onClick={()=>window.open("https://drive.google.com/drive/u/0/folders/1_PylJQrfQTMVvC2kwM9rY46EYjeo-zW5","__blank")} className="relative bg-accent md:max-w-[300px] rounded-l-full md:rounded-none pl-4 flex justify-center items-center">
          <div className="w-auto hidden md:block md:w-[120px] h-[64px] absolute -left-16 top-0 bg-accent -skew-x-[55deg]"></div>
          <div className="bg-white z-20 px-8 py-1 font-semibold rounded-xl ">
            Certificate
          </div>
        </div>
      </div>
      <div className="flex-1 bg-accent hidden lg:flex"></div>
    </div>
  );
};

export default Navbar;
