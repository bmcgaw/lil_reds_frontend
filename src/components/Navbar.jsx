import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../pages/photos/lilredslogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const location = useLocation();

  return (
    <div className="z-[100]">
      <nav className="flex fixed w-full h-[85px] ml-auto justify-between items-center bg-[#02313C]">
        {location.pathname !== "/" ? (
          <img className="w-[120px] h-[60px] ml-9" src={Logo} alt="" />
        ) : null}
        ;
        <ul className="flex w-[23%] lg:flex justify-evenly ml-1">
          <li className="text-3xl text-[#FFC0B4] hover:cursor-pointer hover:text-white">
            <NavLink to="https://m.facebook.com/designsbylilredd">
              <FaFacebook />
            </NavLink>
          </li>
          <li className="text-3xl text-[#FFC0B4] hover:cursor-pointer hover:text-white">
            <NavLink to="https://www.linkedin.com/in/allison-mcgaw-9a3a311a7">
              <AiFillLinkedin />
            </NavLink>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="text-[#FFC0B4] ml-auto w-[50px] text-3xl lg:hidden hover:text-white hover:cursor-pointer"
        >
          {nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <ul className="hidden lg:flex w-[40%] justify-evenly ml-auto mr-0 text-xl">
          <li className="text-[#FFC0B4] hover:cursor-pointer">
            <NavLink
              to="/"
              className={(link) =>
                link.isActive ? "text-white" : "text-[#FFC0B4]"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-[#FFC0B4] hover:cursor-pointer">
            <NavLink
              to="./pages/About"
              className={(link) =>
                link.isActive ? "text-white" : "text-[#FFC0B4]"
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-[#FFC0B4] hover:cursor-pointer">
            <NavLink
              to="./pages/Portfolio"
              className={(link) =>
                link.isActive ? "text-white" : "text-[#FFC0B4]"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="text-[#FFC0B4] hover:cursor-pointer">
            <NavLink
              to="./pages/Services"
              className={(link) =>
                link.isActive ? "text-white" : "text-[#FFC0B4]"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="text-[#FFC0B4] hover:cursor-pointer">
            <NavLink
              to="./pages/Contact"
              className={(link) =>
                link.isActive ? "text-white" : "text-[#FFC0B4]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div />
      </nav>
      <ul
        className={
          nav
            ? "fixed right-[-100%]"
            : "fixed z-[999] top-[85px] right-0 lg:hidden h-[300px] w-[50%] flex-col bg-white ease-in-out duration-500"
        }
      >
        <li
          onClick={handleNav}
          className="text-[#02313C] w-full h-[20%] text-lg border-b border-[#02313C] text-center pb-5 pt-5 font-bold hover:cursor-pointer hover:text-xl"
        >
          <NavLink
            to="/"
            className={(link) =>
              link.isActive ? "text-[#0CA6AC]" : "text-[#02313C]"
            }
          >
            Home
          </NavLink>
        </li>
        <li
          onClick={handleNav}
          className="text-[#02313C] w-full h-[20%] text-lg border-b border-[#02313C] text-center pb-5 pt-5 font-bold hover:hover:cursor-pointer hover:text-xl"
        >
          <NavLink
            to="./pages/About"
            className={(link) =>
              link.isActive ? "text-[#0CA6AC]" : "text-[#02313C"
            }
          >
            About
          </NavLink>
        </li>
        <li
          onClick={handleNav}
          className="text-[#02313C] w-full h-[20%] text-lg border-b border-[#02313C] text-center pb-5 pt-5 font-bold hover:hover:cursor-pointer hover:text-xl"
        >
          <NavLink
            to="./pages/Portfolio"
            className={(link) =>
              link.isActive ? "text-[#0CA6AC]" : "text-[#02313C]"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li
          onClick={handleNav}
          className="text-[#02313C] w-full h-[20%] text-lg border-b border-[#02313C] text-center pb-5 pt-5 font-bold hover:hover:cursor-pointer hover:text-xl"
        >
          <NavLink
            to="./pages/Services"
            className={(link) =>
              link.isActive ? "text-[#0CA6AC]" : "text-[#02313C]"
            }
          >
            Services
          </NavLink>
        </li>
        <li
          onClick={handleNav}
          className="text-[#02313C] w-full h-[20%] text-lg border-b border-[#02313C] text-center pb-5 pt-5 font-bold hover:hover:cursor-pointer hover:text-xl"
        >
          <NavLink
            to="./pages/Contact"
            className={(link) =>
              link.isActive ? "text-[#0CA6AC]" : "text-[#02313C]"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
