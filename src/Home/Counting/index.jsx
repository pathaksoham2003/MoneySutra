import React from "react";

const Counting = () => {
  return (
    <div className="w-full flex justify-center items-center md:py-8">
      <div className="w-full h-auto flex flex-col items-center my-16">
        <div className="text-center w-full flex flex-col md:flex-row justify-evenly items-start px-8 md:px-32">
          <div className="flex w-full justify-between md:flex-col">
            <span className="text-5xl text-left md:text-center font-bold pb-4">4.50% -18% p.a.</span>
            <span className="text-xl text-left md:text-center">ROI depending upon risk appetite</span>
          </div>

          <div className="flex w-full justify-between md:flex-col">
            <span className="text-5xl text-left md:text-center font-bold pb-4">25+</span>
            <span className="text-xl text-left md:text-center">Happy Clients</span>
          </div>
          <div className="flex w-full justify-between md:flex-col">
            <span className="text-5xl text-left md:text-center font-bold pb-4">INR 1 Crore +</span>
            <span className="text-xl text-left md:text-center">Asset Under Mangement (AUM)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
