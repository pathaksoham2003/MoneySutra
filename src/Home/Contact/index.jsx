import React from "react";
import { HeroImg } from "../../assets";

const Contact = () => {
  return (
    <div className="w-full flex justify-center ">
      
      <div className="max-w-[1240px] flex">
        <div className="flex">
          <div className="px-16 mt-16">
            <h2 className="text-6xl font-semibold">Let’s Connect </h2>
            <p className="text-xl ml-1 mt-3">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <div className="flex flex-col mt-4">
              <div className="w-full flex justify-between">
                <input
                  className="w-full mr-2 p-2 border border-gray-500 text-xl rounded-xl my-3"
                  placeholder="Name"
                />
                <input
                  className="w-full ml-2 p-2 border border-gray-500 text-xl rounded-xl my-3"
                  placeholder="Surname"
                />
              </div>
              <input
                className=" p-2 border border-gray-500 text-xl rounded-xl my-3"
                placeholder="Email Address"
              />
              <input
                className="p-2 border border-gray-500 text-xl rounded-xl my-3"
                placeholder="Contact No."
              />
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 my-3 w-full text-xl text-gray-900 rounded-lg border border-gray-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="bg-primary rounded-xl text-center py-3 text-xl text-white font-bold">
              Send
            </div>
          </div>
          <div className="mr-20 py-10">
            <div className="overflow-hidden h-[600px] rounded-3xl">
              <img src={HeroImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
