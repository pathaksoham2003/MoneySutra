import React from "react";

const Counting = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full h-auto flex flex-col items-center my-16">
        <div className="text-center w-full flex justify-evenly px-32">
          <div className="flex flex-col">
            <span className="text-4xl font-bold">10% to 12%</span>
            <span className="text-xl">Returns on Investment</span>
          </div>

          <div className="flex flex-col">
            <span className="text-4xl font-bold">10+</span>
            <span className="text-xl">Happy Clients</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold">20 Lakh INR</span>
            <span className="text-xl">Total Invested</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
