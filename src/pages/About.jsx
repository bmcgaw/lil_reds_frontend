import React from "react";
import myFace from "./photos/myface.png";
import fanLeaf from "./photos/fanLeaf.png";
import littleDots from "./photos/littleDots.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const About = () => {
  const [leaf, setLeaf] = useState(false);

  useEffect(() => {
    setLeaf(false);
    setTimeout(() => {
      setLeaf(true);
    }, 250);
  }, []);

  return (
    <>
      <div>
        <div className="fixed flex flex-col md:flex-row justify-center items-center w-full h-[100vh] bg-[#FFC0B4] z-[-1]">
          <img
            className="w-[280px] h-[170px] mb-[1rem] md:mb-[5rem] md:w-[400px] md:h-[250px] md:mt-0 lg:w-[500px] lg:h-[300px] transition duration-150"
            src={myFace}
            alt=""
          />
          <p className="text-[16px] w-[90%] md:w-[40%] text-center mt-0 mb-10 md:mb-[2rem] md:mr-[4rem] lg:mr-[7rem] text-[#035162] md:text-[19px] border p-[0.25rem] md:p-[1.5rem] bg-[#faf0e6] rounded-lg border-[#035162]">
            Hi there! I’m Allison - Founder and Creator of Lil’ Red’s Design &
            Graphics! I specialize in logo design and branding for entrepreneurs
            and small business owners. When you work directly with me, you can
            expect me to help bring the vision for your business to life by
            strategically incorporating accurate design, colors, and typefaces
            to attract your perfect client. Visit me on social media or click
            below to check out my work!
          </p>
          <div className="flex items-center justify-center w-full h-[100px] bg-[#02313C] fixed bottom-0">
            <button className="w-[130px] h-[45px] rounded bg-[#FE7D71] text-white text-lg hover:shadow-md shadow-white">
              <NavLink to="/pages/Portfolio">Portfolio</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
