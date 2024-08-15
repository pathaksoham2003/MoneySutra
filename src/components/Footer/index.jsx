import React from "react";
import {
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Whatsapp,
  Youtube,
} from "../../assets";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-primary">
      <div className="w-full h-auto flex flex-col items-center my-16">
        <div className="w-[350px] text-center flex flex-col">
          <h2 className="text-white text-5xl font-anton font-thin drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Money
            <span className="text-accent font-serif font-semibold ">Sutra</span>
          </h2>
          <h2 className="text-gray-300 mt-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            © 2024 MoneySutra. All rights reserved.{" "}
          </h2>
          <div className="flex mt-8 justify-center">
            <img
              onClick={() =>
                handleSocialOpen(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=capathak123@gmail.com"
                )
              }
              className=" w-[24px] mx-3"
              src={Google}
            />
            <img
              onClick={() =>
                handleSocialOpen(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=capathak123@gmail.com"
                )
              }
              className="w-[24px] mx-3"
              src={Facebook}
            />
            <img
              onClick={() => handleSocialOpen("https://wa.me/8793543098")}
              className="w-[24px] mx-3"
              src={Whatsapp}
            />
            <img
              onClick={() =>
                handleSocialOpen(
                  "https://www.youtube.com/@MoneySutraFinServ"
                )
              }
              className="w-[24px] mx-3"
              src={Youtube}
            />
            <img
              onClick={() =>
                handleSocialOpen(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=capathak123@gmail.com"
                )
              }
              className="w-[24px] mx-3"
              src={Instagram}
            />
            <img
              onClick={() =>
                handleSocialOpen(
                  "https://www.linkedin.com/in/cachaitanyapathak/"
                )
              }
              className="w-[24px] mx-3"
              src={LinkedIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
