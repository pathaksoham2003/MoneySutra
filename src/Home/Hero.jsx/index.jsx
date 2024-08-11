import React from "react";
import { CAPathakPP, Facebook, Google, HeroImg, Instagram, LinkedIn, Whatsapp } from "../../assets";

const Hero = () => {
  const handleSocialOpen = (url) => {
    window.open(url, '_blank').focus();
  }
  return (
    <div className="w-full flex justify-center">
        <div className="bg-slate-200 flex-1">

        </div>
      <div className="w-full flex max-w-[1240px] md:max-w-[1240px]">
        <div className="w-[500px] h-[600px] overflow-hidden">
          <img className="object-contain w-full" src={HeroImg} />
        </div>
        <div className="flex flex-1 flex-col justify-start pl-10 pt-20 items-start bg-primary">
          <h2 className="bg-blue text-[24px] text-white">SAVE | INVEST | GROW 🚀</h2>
          <h2 className="bg-blue text-[80px] leading-[80px] text-white font-semibold">Plan your Financial Future with us.</h2>
          <div className="flex mt-12">
            <div className="w-[110px] h-[110px] rounded-full overflow-hidden">
              <img className="w-full object-contain object-top" src={CAPathakPP}/>
            </div>
            <div className="flex flex-col justify-center ml-5">
              <h2 className="text-white text-2xl font-semibold">Chaitanya Pathak</h2>
              <h2 className="text-background">AMFI Registered Mutual Fund Distributor </h2>
              <h2 className="text-background">(ARM-303749)</h2>
            </div>
            
          </div>
          <div className="w-full flex  justify-between">
              <div className="ml-auto  p-5 bg-[#131557] animate-bounce-sm rounded-2xl shadow-lg shadow-black">
                <h2 className="text-white text-2xl font-semibold">Contact with me</h2>
                <div className="flex mt-3"> 
                  <img onClick={()=>handleSocialOpen("https://mail.google.com/mail/?view=cm&fs=1&to=capathak123@gmail.com")} className=" w-[24px] mr-3" src={Google}/>
                  <img onClick={()=>handleSocialOpen("https://mail.google.com/mail/?view=cm&fs=1&to=capathak123@gmail.com")}  className="w-[24px] mr-3" src={Facebook}/>
                  <img onClick={()=>handleSocialOpen("https://wa.me/8793543098")}  className="w-[24px] mr-3" src={Whatsapp}/>
                  <img onClick={()=>handleSocialOpen("https://mail.google.com/mail/?view=cm&fs=1&to=capathak123@gmail.com")}  className="w-[24px] mr-3" src={Instagram}/>
                  <img onClick={()=>handleSocialOpen("https://www.linkedin.com/in/cachaitanyapathak/")}  className="w-[24px] mr-3" src={LinkedIn}/>
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
      <div className="bg-primary flex-1">

      </div>
    </div>
  );
};

export default Hero;
