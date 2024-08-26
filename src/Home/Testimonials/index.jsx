import React from "react";
import { CAPathakPP } from "../../assets";
import Start from "../../assets/Start";
import { Testimoni } from "../../content/testimonials";

const Testimonials = () => {
  return (
    <div className="relative w-full flex justify-center bg-gradient-to-t  from-10% from-primary via-primary/50 to-40% to-white/10">
      <div className="max-w-[1204px] w-full flex flex-col">
        <div className="w-full flex items-center flex-col mt-16">
          <h2 className="text-6xl font-semibold px-3">What our clients say</h2>
        </div>
        <div className="w-full flex mt-10 px-3 flex-col md:flex-row">
          {Testimoni.map((item)=><div className="w-full p-8 my-3 md:mx-2 bg-white border px-4 border-gray shadow-lg rounded-3xl">
            <div className="w-full flex mb-5">
              <Start />
              <Start />
              <Start />
              <Start />
              <Start />
            </div>
            <h2 className="text-2xl font-semibold">"{item.reviewHeading}"</h2>
            <p className="text-gray-600 pt-4">{item.review}
            </p>
            <div className="w-full h-1 my-5 bg-gray-400/20 rounded-full"></div>
            <div className="flex w-full">
              <div className="h-16 w-16 overflow-hidden rounded-full ">
                <img src={item.personAvatar} />
              </div>
              <div className="flex pl-6 flex-col">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <h2 className="text-gray-600">{item.post} at {item.company}</h2>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
