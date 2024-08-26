import React from "react";

const InfiniteTextStrip = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black">
      {/* Outer container to control overflow and scrolling */}
      <div className="flex animate-marquee">
        {/* Text strip that scrolls */}
        <span className="text-sm mx-10 text-white">
          Mutual funds investments are subject to market risk, read scheme
          related documents carefully. &nbsp;
        </span>
        {/* Repeat the text to create an infinite effect */}
        <span className="text-sm mx-10 text-white">
          Mutual funds investments are subject to market risk, read scheme
          related documents carefully.&nbsp;
        </span>
        <span className="text-sm mx-10 text-white">
          Mutual funds investments are subject to market risk, read scheme
          related documents carefully.&nbsp;
        </span>

        <span className="text-sm mx-10 text-white">
          Mutual funds investments are subject to market risk, read scheme
          related documents carefully.&nbsp;
        </span>

        <span className="text-sm mx-10 text-white">
          Mutual funds investments are subject to market risk, read scheme
          related documents carefully.&nbsp;
        </span>

        <span className="text-sm mx-10 text-white">
          Mutual funds investments are subject to market risk, read scheme
          related documents carefully.&nbsp;
        </span>
      </div>
    </div>
  );
};

export default InfiniteTextStrip;
