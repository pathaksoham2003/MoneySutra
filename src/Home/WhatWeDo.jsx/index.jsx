import { Code, Design, Marketing } from "../../assets";

const WhatWeDo = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="absolute -top-[350px] -left-[150px] -z-40 h-[600px] w-[600px] rounded-full hidden md:block border-[130px] border-primary/10"></div>
      <div className="w-full max-w-[1240px] flex flex-col pt-10 md:pt-0">
        <div className="w-full flex items-center flex-col md:mt-16">
          <h2 className="text-6xl font-bold">What we do</h2>
          <h2 className="max-w-[480px] text-center mt-3 font-semibold text-gray-500">
            Secure your future with MoneySutra's expert-managed mutual
            funds—grow your wealth effortlessly. Invest today for a brighter
            tomorrow!
          </h2>
        </div>
        <div className="w-full flex mt-10 flex-col md:flex-row">
          <div className="py-14 px-8 rounded-3xl bg-white shadow-xl m-5 border border-gray-300">
            <div className=" h-16 w-16 flex justify-center items-center rounded-full overflow-hidden bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
            <h2 className="text-3xl pt-4 pb-2 text-black font-semibold">
              Risk Profiling
            </h2>
            <p className="text-black py-2">
              We assess your unique risk tolerance and classify you as
              Conservative, Moderately Conservative, Moderate, Moderately
              Aggressive, or Aggressive.
            </p>
          </div>
          <div className="py-14 px-8 bg-primary shadow-xl rounded-3xl m-5 ">
            <div className=" h-16 w-16 flex justify-center bg-white items-center rounded-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#0a4c96"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </div>
            <h2 className="text-3xl pt-4 pb-2 text-white font-semibold">
              Financial Goal Setting
            </h2>
            <p className="text-white py-2">
              Whether it's planning for retirement, your children's education or
              marriage, buying property, a car, or even a dream vacation, we
              help you set clear financial goals and timelines.
            </p>
          </div>
          <div className="py-14 px-8 rounded-3xl shadow-xl m-5 border border-gray-300">
            <div className=" h-16 w-16 flex justify-center items-center rounded-full overflow-hidden bg-primary">
              <svg
                // className=" w-1/2 h-1/2 py-1 object-center"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h2 className="text-3xl pt-4 pb-2 text-black font-semibold">
              Tailored Investment Advisory
            </h2>
            <p className="text-black py-2">
              We recommend the right investment amounts and strategies based on
              your risk profile to help you achieve your financial aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
