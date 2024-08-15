import React from "react";

const Counting = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full h-auto flex flex-col items-center my-16">
        <div className="text-center w-full flex flex-col md:flex-row justify-evenly items-start px-8 md:px-32">
          <div className="flex md:flex-col">
            <span className="text-5xl font-bold">10% to 12%</span>
            <span className="text-xl mt-4">Returns on Investment</span>
          </div>

          <div className="flex md:flex-col">
            <span className="text-5xl font-bold">10+</span>
            <span className="text-xl mt-4">Happy Clients</span>
          </div>
          <div className="flex md:flex-col">
            <span className="text-5xl font-bold">20 Lakh INR</span>
            <span className="text-xl mt-4">Total Invested</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
