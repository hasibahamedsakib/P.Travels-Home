import { Link, NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import logo from "/src/assets/logo.png";
import Button from "../../components/Button";
const Navbar = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  //  toggle bar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 100 ? "lg:bg-blue-500" : " bg-blue-500 lg:bg-transparent";

  return (
    <nav
      className={` w-full lg:fixed font-Lora z-10  lg:px-5 lg:py-2  transition-all duration-300 ${navbarBgColor} `}
    >
      <div className="lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* website Logo */}
          <div className=" lg:p-4 ">
            <Link to="/" className="flex items-center gap-1">
              <img
                src={logo}
                className="hidden lg:block w-12 filter grayscale brightness-30 invert-[1]"
                alt="website_logo"
              />{" "}
              <p className="text-3xl font-bold text-white pt-2 lg:pt-0">
                P.Travels.
              </p>
            </Link>
          </div>
          {/* small screen size */}
          <div className="px-3 w-full lg:hidden flex justify-between text-white  bg-khaki h-[70px]  items-center  p-3">
            <Link to="/">
              <img
                src={logo}
                className="block w-10 filter grayscale brightness-30 invert-[1]"
                alt="website_logo"
              />
            </Link>
            <button
              className="lg:hidden block focus:outline-none "
              onClick={toggleNavbar}
            >
              {/* modal open and close */}
              {isOpen ? (
                <IoCloseSharp className="w-6 h-6 text-white" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
          {/* All navLink are hear with active */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex flex-col lg:flex-row text-sm text-white  uppercase font-normal bg-blue-400 dark:bg-normalBlack lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 `}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative`}
              to="/"
            >
              <span className="flex items-center">Home</span>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Rooms
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-6 z-20">
                <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-blue-500 text-white w-[200px] text-left dark:bg-normalBlack transition-all duration-500 text-sm py-4 ">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/room" className="block py-2">
                        Room
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/find_room" className="block py-2">
                        Find Room
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/room_details" className="block py-2">
                        Room Details
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Page
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-6 z-20">
                <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-blue-500 text-white w-[200px] text-left dark:bg-normalBlack transition-all duration-500 text-sm py-4 ">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/about" className="py-2 block">
                        ABOUT US
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/services" className="py-2 block">
                        SERVICE
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/service_details" className="py-2 block">
                        SERVICE DETAILS
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/our_team" className="py-2 block">
                        OUR TEAM
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/pricing" className="py-2 block">
                        PRICING
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            {/* blog sub menu link */}
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white   lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                BLOG
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-4 lg:pt-6 z-20">
                <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-blue-500 text-white w-60 text-left dark:bg-normalBlack transition-all duration-500 text-sm  py-4">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog" className="py-2 block">
                        BLOG
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog_details" className="py-2 block">
                        BLOG DETAILS
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          {/* large device visible button and search icon */}
          <div className="hidden lg:flex items-center justify-between">
            <Link to="/booking">
              <Button>Booking Online</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
