import React, { useState } from "react";
import HamburgerMenu from "../../images/Navbar/menuIcon.svg";
import SearchIcon from "../../images/Navbar/searchIcon.svg";
import NotificationIcon from "../../images/Navbar/notificationIcon.svg";
import ProfileIcon from "../../images/Navbar/profileIcon.svg";
import BillingIcon from "../../images/Navbar/billingIcon.svg";
import LogoutIcon from "../../images/Navbar/logoutIcon.svg";
import avatarImage from "../../images/Navbar/avatarImage.png";
import ProfileImage1 from "../../images/Card/profilePic1.png";
import ProfileImage2 from "../../images/Card/profilePic2.png";
import ProfileImage3 from "../../images/Card/profilePic3.png";
import Sidebar from "../Sidebar/Sidebar";
import "../../index.css";
import Dashboard from "../../pages/Dashboard";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const profiles = [
    {
      name: "Bavid Kames",
      svg: ProfileImage1,
      message: "Assigned you on the call with Sara",
      desc: "2 minutes ago"
    },
    {
      name: "Alexa Marry",
      svg: ProfileImage2,
      message: "Marked the task  New UI as done",
      desc: "5 minutes ago"
    },
    {
      name: "Eva Maria",
      svg: ProfileImage3,
      message: "Added a new comment on Sales task",
      desc: "10 minutes ago"
    },
  ];

  return (
    <div>
      <Dashboard open={openSidebar === true ? "pl-80 w-165 lg:w-full" : ""} />
      <div
        className={`flex ${openSidebar ? "w-165 sm:w-full" : ""
          }  fixed top-0 left-0 right-0 z-20`}
      >
        <Sidebar open={openSidebar === true ? "block" : "hidden"} />
        <div
          className={`p-4   bg-white shadow-sm w-full max-h-16 ${openSidebar && "lg:rounded-tl-3xl"
            }`}
        >
          <div className="flex items-center">
            <img
              src={HamburgerMenu}
              alt=""
              className="cursor-pointer pr-4 "
              onClick={() => {
                setOpenSidebar(!openSidebar);
              }}
            />

            <div className="flex w-full">
              <img
                src={SearchIcon}
                alt=""
                className="cursor-pointer m-2 hidden sm:block"
              />

              <input
                type="text"
                placeholder="Search transactions, invoices or help"
                className="w-full focus:outline-none placeholder-mainColor placeholder-opacity-90 text-mainColor text-sm hidden md:block"
              />
            </div>

            <div className="flex">
              <div className="flex items-center justify-center">
                <div className=" relative inline-block text-left dropdown">
                  <span className="rounded-md shadow-sm">
                    <button
                      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-500 focus:outline-none"
                      type="button"
                    >
                      <img
                        src={NotificationIcon}
                        alt=""
                        className="w-64 sm:w-7 md:w-7"
                      />
                    </button>
                  </span>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 ">
                    <div
                      className="absolute -right-12 -translate-x-1/2 translate-y-0 w-72 mt-2 py-3 px-3 origin-top-right bg-white rounded-md shadow-lg outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      {profiles.map((profile) => (
                        <div className="mt-5 flex cursor-pointer w-full" key={profile.name}>
                          <img
                            src={profile.svg}
                            alt=""
                            className="w-1/6  h-1/6 sm:h-1/12"
                          />
                          <div className="ml-3 w-full">
                            <div className="flex justify-between" >
                              <h3 className="text-mainColor font-semibold">
                                {profile.name}
                              </h3>
                              <p className="text-mainColor opacity-50 text-sm">
                                {profile.desc}
                              </p>
                            </div>

                            <div className="text-mainColor opacity-50 text-sm flex flex-wrap justify-between">
                              <div>
                                <p>{profile.message}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex content-center justify-center mt-4  border-t-2 border-veryLightGray">
                        <a
                          href="/"
                          className="text-anchorColor mt-2 md:text-sm"
                        >
                          Show More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className=" relative inline-block text-left dropdown">
                  <span className="rounded-md shadow-sm">
                    <button
                      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-500 focus:outline-none"
                      type="button"
                    >
                      <span className="text-lightGray opacity-70">John</span>
                      <svg
                        className="h-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        color="#4D4F5C"
                        opacity="0.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div
                      className="absolute right-0 w-44 mt-2 py-3 origin-top-right bg-white rounded-md shadow-lg outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      <div className="flex px-4 py-2 cursor-pointer">
                        <img src={ProfileIcon} alt="" className="w-5 mr-4" />
                        <p className="text-sm font-medium leading-5">
                          My Profile
                        </p>
                      </div>
                      <div className="flex px-4 py-2 cursor-pointer">
                        <img src={BillingIcon} alt="" className="w-5 mr-4" />
                        <p className="text-sm font-medium leading-5">Billing</p>
                      </div>
                      <div className="flex px-4 py-2 cursor-pointer">
                        <img src={LogoutIcon} alt="" className=" w-5 mr-4" />
                        <p className="text-sm font-medium leading-5 text-mainColor">
                          Logout
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={avatarImage}
                  alt=""
                  className="cursor-pointer mr-8 w-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
