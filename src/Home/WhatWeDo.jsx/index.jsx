import React from "react";
import { Code, Design, Marketing } from "../../assets";

const WhatWeDo = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="absolute -top-[350px] -left-[150px] -z-40 h-[600px] w-[600px] rounded-full hidden md:block border-[130px] border-primary/10">

      </div>
      <div className="w-full max-w-[1240px] flex flex-col">
        <div className="w-full flex items-center flex-col md:mt-16">
          <h2 className="text-6xl font-semibold">What we do</h2>
          <h2 className="max-w-[480px] text-center mt-3 font-semibold text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
            suscipit dui. Sed cursus nibh id risus ultrices convallis.
          </h2>
        </div>
        <div className="w-full flex mt-10 flex-col md:flex-row">
          <div className="py-14 px-8 rounded-3xl bg-white shadow-xl m-5 border border-gray-300">
            <div className=" h-16 w-16 flex justify-center items-center rounded-full overflow-hidden bg-primary">
              <img className=" w-1/2 h-1/2 object-center" src={Design} />
            </div>
            <h2 className="text-3xl pt-4 pb-2 text-black font-semibold">Design</h2>
            <p className="text-black py-2">
              Pulvinar ultricies non varius vel feugiat fusce suspendisse lorem
              cursus aenean amet egestas lectus dignissim odio nulla ullamcorper
              lectus lorem.
            </p>
          </div>
          <div className="py-14 px-8 bg-primary shadow-xl rounded-3xl m-5 ">
            <div className=" h-16 w-16 flex justify-center bg-white items-center rounded-full overflow-hidden">
              <img className=" w-1/2 h-1/2 pr-0.5 object-center" src={Marketing} />
            </div>
            <h2 className="text-3xl pt-4 pb-2 text-white font-semibold">Marketing</h2>
            <p className="text-white py-2">
              Pulvinar ultricies non varius vel feugiat fusce suspendisse lorem
              cursus aenean amet egestas lectus dignissim odio nulla ullamcorper
              lectus lorem.
            </p>
          </div>
          <div className="py-14 px-8 rounded-3xl shadow-xl m-5 border border-gray-300">
            <div className=" h-16 w-16 flex justify-center items-center rounded-full overflow-hidden bg-primary">
              <img className=" w-1/2 h-1/2 py-1 object-center" src={Code} />
            </div>
            <h2 className="text-3xl pt-4 pb-2 text-black font-semibold">Development</h2>
            <p className="text-black py-2">
              Pulvinar ultricies non varius vel feugiat fusce suspendisse lorem
              cursus aenean amet egestas lectus dignissim odio nulla ullamcorper
              lectus lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
