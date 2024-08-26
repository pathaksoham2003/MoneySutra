import React from "react";
import {
  CAPathakPP,
  Facebook,
  Google,
  HeroImg,
  Instagram,
  LinkedIn,
  Whatsapp,
  Youtube,
} from "../../assets";

const Hero = () => {
  const handleSocialOpen = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <div className="w-full flex justify-center">
      <div className="bg-slate-200 flex-1 hidden md:flex"></div>
      <div className="w-full flex flex-col-reverse md:flex-row max-w-[1240px] md:max-w-[1240px]">
        <div className="w-full md:max-w-[500px] h-[650px] overflow-hidden">
          <img className="object-contain w-full" src={HeroImg} />
        </div>
        <div className="flex flex-1 flex-col justify-start min-h-[650px] pl-10 pt-20 items-start bg-primary">
          <h2 className="bg-blue text-[24px] text-white flex items-end">
            SAVE | INVEST | GROW <span className="text-4xl block ml-3">🚀</span>
          </h2>
          <h2 className="bg-blue text-[80px] leading-[80px] text-white font-semibold">
            Plan your Financial Future with us.
          </h2>
          <div className="flex pt-12">
            <div className="md:w-[110px] md:h-[98px] w-full max-w-24 aspect-square rounded-full overflow-hidden">
              <img
                className="w-full object-contain"
                src={CAPathakPP}
              />
            </div>
            <div className="flex flex-col justify-center ml-5">
              <h2 className="text-white text-2xl font-semibold">
                Chaitanya Pathak
              </h2>
              <h2 className="text-background">
                AMFI Registered Mutual Fund Distributor{" "}
              </h2>
              <h2 className="text-background">(ARM-303749)</h2>
            </div>
          </div>
          <div className="w-full flex justify-between pr-5">
            <div className="ml-auto p-5 bg-accent animate-bounce-sm rounded-2xl shadow-lg shadow-black/70">
              <h2 className="text-white text-2xl font-semibold">
                Contact with me
              </h2>
              <div className="flex mt-3">
                <img
                  onClick={() =>
                    handleSocialOpen(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=teammoneysutra@gmail.com"
                    )
                  }
                  className=" w-[24px] mr-3"
                  src={Google}
                />
                <img
                  onClick={() =>
                    handleSocialOpen(
                      "https://www.facebook.com/MoneySutraInvestment/"
                    )
                  }
                  className="w-[24px] mr-3"
                  src={Facebook}
                />
                <img
                  onClick={() => handleSocialOpen("https://wa.me/918793543098")}
                  className="w-[24px] mr-3"
                  src={Whatsapp}
                />
                <img
                  onClick={() =>
                    handleSocialOpen(
                      "https://www.youtube.com/@MoneySutraFinServ"
                    )
                  }
                  className="w-[24px] mr-3"
                  src={Youtube}
                />
                <img
                  onClick={() =>
                    handleSocialOpen(
                      "https://www.instagram.com/moneysutrainvestment"
                    )
                  }
                  className="w-[24px] mr-3"
                  src={Instagram}
                />
                <img
                  onClick={() =>
                    handleSocialOpen(
                      "https://www.linkedin.com/in/cachaitanyapathak/"
                    )
                  }
                  className="w-[24px] mr-3"
                  src={LinkedIn}
                />
              </div>
            </div>
            {/* <div>
                <h2 className="text-white text-lg">Contact me</h2>
                <div className="flex">

                </div>
              </div> */}
          </div>
        </div>
      </div>
      <div className="bg-primary flex-1 hidden md:flex"></div>
    </div>
  );
};

export default Hero;
