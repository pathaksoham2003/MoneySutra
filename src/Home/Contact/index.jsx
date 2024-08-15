import React, { useRef, useState } from "react";
import { HeroImg } from "../../assets";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_EMJS_S_ID, import.meta.env.VITE_EMJS_T_ID, form.current, {
        publicKey: import.meta.env.VITE_EMJS_PK,
      })
      .then(
        (result) => {
          console.log(result);
          console.log("SUCCESS");
          // window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-[1240px] flex ">
        <div className="flex flex-col md:flex-row">
          <div className="px-4 md:px-16 mt-16">
            <h2 className="text-6xl font-semibold">Let’s Connect </h2>
            <p className="text-xl ml-1 mt-3">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col mt-4"
            >
              <div className="w-full flex justify-between">
                <input
                  className="w-full mr-2 p-2 border border-gray-500 text-xl rounded-xl my-3"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="w-full ml-2 p-2 border border-gray-500 text-xl rounded-xl my-3"
                  placeholder="Surname"
                  name="surname"
                />
              </div>
              <input
                className=" p-2 border border-gray-500 text-xl rounded-xl my-3"
                placeholder="Email Address"
                name="email"
              />
              <input
                className="p-2 border border-gray-500 text-xl rounded-xl my-3"
                placeholder="Contact No."
                name="contact"
              />
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 my-3 w-full text-xl text-gray-900 rounded-lg border border-gray-500"
                placeholder="Write your thoughts here..."
                name="message"
              ></textarea>
              <input
                type="submit"
                className="bg-primary rounded-xl text-center py-3 text-xl text-white font-bold"
                value="Send"
              />
            </form>
          </div>
          <div className="mx-2 md:mr-20 py-10">
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
