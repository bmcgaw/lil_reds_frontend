import React from "react";
import Logo from "./photos/lilredslogo.png";
import { NavLink } from "react-router-dom";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#FFC0B4]">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            className="absolute z-0 top-[8rem] left-0 right-0 m-auto w-[12rem] h-[6rem] md:w-[16rem] md:h-[8rem] md:top:[8rem] lg:w-[20rem] lg:h-[10rem] lg:top:[10rem] transition duration-300 self-center"
            src={Logo}
            alt="Oops!"
          />
          <div className="flex flex-col items-center justify-center w-[80%] h-[400px] absolute mt-[50rem] lg:mt-[54rem]">
            <h2 className="h-[50px] mb-[0.5rem] mt-[0.5rem] font-bold text-[22px] text-[#035162]">
              Bring{" "}
              <Typed
                className="text-white"
                strings={["personality", "recognition", "distinction"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
              {""}
              to your brand.
            </h2>
            <p className="text-[17px] mb-[3rem] mt-[2rem] md:text-[18px] text-[#035162]">
              Breathe life into your business! Your brand is the identity of
              your business. It's what sets you apart from your competitors.
              Book a discovery call with me to find out how I can help execute
              the perfect branding that is in tune with YOU, your business, and
              your unique personality.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-[100px] bg-[#02313C] flex items-center justify-center">
          <button className="w-[130px] h-[45px] rounded bg-[#FE7D71] text-white text-lg">
            <NavLink to="/pages/Contact">Contact Me</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
